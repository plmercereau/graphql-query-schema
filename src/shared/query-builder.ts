import { parse } from 'graphql'
import { jsonToGraphQLQuery, VariableType } from 'json-to-graphql-query'
import {
  FieldDefinition,
  getArgumentType,
  getConcreteType,
  getFieldType,
  getGraphQLType,
  getRootOperationNode,
  TypeRef
} from './schema'
import { GenericSchema, OperationTypes } from './schema'

const reservedKeys = ['__typename']

const toJson = (
  schema: GenericSchema,
  parameters: Record<string, any> | true = true,
  definition: TypeRef | FieldDefinition,
  variables: Record<string, any> = {},
  variablesPrefix: string = ''
) => {
  const select: Record<string, any> = {}
  const values = (parameters !== true && parameters.select) || {}
  const inputArguments = (parameters !== true && parameters.variables) || {}
  const args: Record<string, any> = {}

  if ('type' in definition) {
    Object.keys(inputArguments).forEach((key) => {
      // TODO camel case the variable names?
      const uniqueVariableName = variablesPrefix ? `${variablesPrefix}_${key}` : key
      variables[uniqueVariableName] = getGraphQLType(schema, getArgumentType(key, definition))
      args[key] = new VariableType(uniqueVariableName)
    })
  }

  if (Object.keys(values).length === 0) {
    const fieldType = getConcreteType(schema, definition)
    if (fieldType.kind === 'OBJECT') {
      fieldType.fields?.forEach((field) => {
        if (getConcreteType(schema, field.type).kind === 'SCALAR') {
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
              {} as any,
              variables,
              variablesPrefix
            )
          }
        })
      } else {
        // if (value instanceof ModifiedVariableType) {
        //   // TODO implement custom variables later
        //   select[key] = new VariableType(key)
        // } else if...
        const childVariablePrefix = variablesPrefix ? `${variablesPrefix}_${key}` : key
        if (typeof value === 'object') {
          const { query, variables: newVariables } = toJson(
            schema,
            value,
            getFieldType(schema, key, definition),
            variables,
            childVariablePrefix
          )
          select[key] = query
          variables = { ...variables, ...newVariables }
        } else {
          const fieldType = getConcreteType(schema, getFieldType(schema, key, definition))
          const { query, variables: newVariables } = toJson(
            schema,
            value,
            fieldType,
            variables,
            childVariablePrefix
          )
          select[key] = query
          variables = { ...variables, ...newVariables }
        }
      }
    })
  }

  return {
    query: { ...select, __args: args },
    variables
  }
}

export const toRawGraphQL = (
  schema: GenericSchema,
  opType: OperationTypes,
  rootOperation: string,
  params: any = {}
) => {
  const { query, variables } = toJson(
    schema,
    params,
    getRootOperationNode(schema, opType, rootOperation)
  )
  return jsonToGraphQLQuery(
    {
      [opType.toLowerCase()]: {
        __variables: variables,
        [rootOperation]: query
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
