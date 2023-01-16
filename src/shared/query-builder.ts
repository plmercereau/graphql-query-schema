import { parse } from 'graphql'
import { jsonToGraphQLQuery } from 'json-to-graphql-query'
import { argPrefix } from './config'
import { OperationTypes, ReturnTransformer } from './types'
import { VariableType as ModifiedVariableType } from './variables'
import { VariableType } from 'json-to-graphql-query'

const reservedKeys = ['__typename']
const toJson = (values: Record<string, any>) => {
  const __args: Record<string, any> = {}
  const select: Record<string, any> = {}
  Object.keys(values).forEach((key) => {
    if (reservedKeys.includes(key)) {
      select[key] = values[key]
    } else if (key === `${argPrefix}on`) {
      select['__typename'] = true
      select['__on'] = Object.keys(values[key]).map((fragmentName) => ({
        __typeName: fragmentName,
        ...toJson(values[key][fragmentName])
      }))
    } else if (key.startsWith(argPrefix)) {
      __args[key.slice(1)] = values[key]
    } else {
      if (values[key] instanceof ModifiedVariableType) {
        select[key] = new VariableType(key)
      } else if (typeof values[key] === 'object') {
        select[key] = toJson(values[key])
      } else {
        select[key] = values[key]
      }
    }
  })
  return { ...select, __args }
}

export const toRawGraphQL = (opType: OperationTypes, rootOperation: string, params: any) => {
  const variablesKey = `${argPrefix}variables`
  const variables = params[variablesKey]
  if (variables) {
    delete params[variablesKey]
  }
  return jsonToGraphQLQuery(
    {
      [opType.toLowerCase()]: {
        __variables: variables,
        [rootOperation]: toJson(params)
      }
    },
    { pretty: true }
  )
}

export const toGraphQL = (opType: OperationTypes, rootOperation: string, params: any) =>
  parse(toRawGraphQL(opType, rootOperation, params))

export const proxyConstructor = (
  operation: OperationTypes,
  returnTransformer: ReturnTransformer<any, any>,
  ...args: any
) =>
  new Proxy({} as any, {
    get(_, prop: string) {
      return (input: Record<string, any>) => returnTransformer(operation, prop, input, ...args)
    }
  })
