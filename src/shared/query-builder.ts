import {
  IntrospectionOutputTypeRef,
  IntrospectionQuery,
  IntrospectionType,
  IntrospectionTypeRef,
  parse
} from 'graphql'
import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query'
import { GenericSchema, OperationTypes, ReturnTransformer } from './types'
import { VariableType as ModifiedVariableType } from './variables'

const reservedKeys = ['__typename']
const toJson = (
  schema: GenericSchema,
  parameters: Record<string, any> | true = true,
  typeRef?: IntrospectionTypeRef
) => {
  const select: Record<string, any> = {}
  const values = (parameters !== true && parameters.select) || {}

  if (Object.keys(values).length === 0) {
    const fieldType = getConcreteType(schema, typeRef)
    if (fieldType?.kind === 'OBJECT') {
      fieldType.fields?.forEach((field) => {
        if (getConcreteType(schema, field.type)?.kind === 'SCALAR') {
          select[field.name] = true
        }
      })
    }
  } else {
    Object.entries(values).forEach(([key, value]: [string, any]) => {
      if (reservedKeys.includes(key)) {
        select[key] = value
      } else if (key === 'on') {
        select['__typename'] = true
        select['__on'] = Object.keys(value).map((fragmentName) => {
          return {
            __typeName: fragmentName,
            ...toJson(
              schema,
              value[fragmentName],
              // TODO not implemented yet: wildcard all scalar fields in unions
              undefined
            )
          }
        })
      } else {
        if (value instanceof ModifiedVariableType) {
          select[key] = new VariableType(key)
        } else if (typeof value === 'object') {
          select[key] = toJson(
            schema,
            value,
            getFieldTypeRefFromObjectTypeRef(schema, key, typeRef)
          )
        } else {
          const fieldType = getConcreteType(
            schema,
            getFieldTypeRefFromObjectTypeRef(schema, key, typeRef)
          )
          select[key] = toJson(schema, value, fieldType)
        }
      }
    })
  }

  return { ...select, __args: parameters !== true && parameters.variables }
}

const getTypeFromRef = (schema: GenericSchema, typeRef?: IntrospectionTypeRef) =>
  (schema.default as IntrospectionQuery).__schema.types.find(
    (t) => t.name === (typeRef as any)?.name
  )

const getFieldTypeRefFromObjectTypeRef = (
  schema: GenericSchema,
  fieldName: String,
  objectTypeRef?: IntrospectionTypeRef
) => {
  const objectType = getTypeFromRef(schema, getConcreteType(schema, objectTypeRef))
  if (objectType?.kind !== 'OBJECT') {
    return undefined
  }
  return objectType?.fields?.find((f) => f.name === fieldName)?.type
}

const getRootOperationNode = (
  schema: GenericSchema,
  opType: OperationTypes,
  rootOperation: string
) => {
  const introspection = schema.default as IntrospectionQuery

  const rootNodeName = (
    opType === 'Query'
      ? introspection.__schema.queryType
      : opType === 'Mutation'
      ? introspection.__schema.mutationType
      : introspection.__schema.subscriptionType
  )?.name
  if (!rootNodeName) {
    throw new Error(`Could not find root type for operation type ${opType.toLowerCase()}`)
  }
  const rootNode = introspection.__schema.types.find((type) => type.name === rootNodeName)
  if (!rootNode) {
    throw new Error(`Could not find root node for operation type ${opType.toLowerCase()}`)
  }
  if (rootNode.kind !== 'OBJECT') {
    throw new Error(`Root node for operation type ${opType.toLowerCase()} is not an object`)
  }

  const node = rootNode.fields.find((field) => field.name === rootOperation)
  if (!node) {
    throw new Error(`Could not find root operation ${rootOperation}`)
  }
  return node
}

const getConcreteType = (
  schema: GenericSchema,
  type?: IntrospectionTypeRef | IntrospectionOutputTypeRef
): IntrospectionType | undefined => {
  if (!type) {
    return undefined
  }
  if (type.kind === 'NON_NULL' || type.kind === 'LIST') {
    return getConcreteType(schema, type.ofType)
  }
  return (schema.default as IntrospectionQuery).__schema.types.find((f) => f.name === type.name)
}

export const toRawGraphQL = (
  schema: GenericSchema,
  opType: OperationTypes,
  rootOperation: string,
  params: any = {}
) => {
  const type = getConcreteType(schema, getRootOperationNode(schema, opType, rootOperation).type)
  return jsonToGraphQLQuery(
    {
      [opType.toLowerCase()]: {
        [rootOperation]: toJson(schema, params, type)
      }
    },
    { pretty: true }
  )
}

export const toGraphQL = (
  schema: GenericSchema,
  opType: OperationTypes,
  rootOperation: string,
  params: any
) => parse(toRawGraphQL(schema, opType, rootOperation, params))

export const proxyConstructor = (
  schema: GenericSchema,
  operation: OperationTypes,
  returnTransformer: ReturnTransformer<any, any>,
  ...args: any
) =>
  new Proxy({} as any, {
    get(_, prop: string) {
      return (input: Record<string, any>) =>
        returnTransformer(schema, operation, prop, input, ...args)
    }
  })
