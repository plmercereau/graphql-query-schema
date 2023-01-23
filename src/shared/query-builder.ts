import { parse } from 'graphql'
import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query'
import {
  getConcreteType,
  getFieldTypeRefFromObjectTypeRef,
  getRootOperationNode,
  TypeRef
} from './schema'
import { GenericSchema, OperationTypes } from './schema'
import { VariableType as ModifiedVariableType } from './variables'

const reservedKeys = ['__typename']
const toJson = (
  schema: GenericSchema,
  parameters: Record<string, any> | true = true,
  typeRef?: TypeRef
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

export const toGraphQLDocument = (
  schema: GenericSchema,
  opType: OperationTypes,
  rootOperation: string,
  params: any
) => parse(toRawGraphQL(schema, opType, rootOperation, params))
