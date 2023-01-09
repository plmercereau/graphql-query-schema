import { parse } from 'graphql'
import { jsonToGraphQLQuery } from 'json-to-graphql-query'
import { argPrefix } from './config'
import { OperationTypes, ReturnTransformer } from './types'
export * from './types'

const toJson = (values: Record<string, any>) => {
  const __args: Record<string, any> = {}
  const select: Record<string, any> = {}
  Object.keys(values).forEach((key) => {
    if (key.startsWith(argPrefix) && key !== '__typename') {
      __args[key.slice(1)] = values[key]
    } else {
      if (typeof values[key] === 'object') {
        select[key] = toJson(values[key])
      } else {
        select[key] = values[key]
      }
    }
  })
  return { ...select, __args }
}

export const toRawGraphQL = (opType: OperationTypes, rootOperation: string, params: any) => {
  return jsonToGraphQLQuery(
    {
      [opType.toLowerCase()]: {
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
  returnTransformer: ReturnTransformer<any>,
  ...args: any
) =>
  new Proxy({} as any, {
    get(_, prop: string) {
      return (input: Record<string, any>) => returnTransformer(operation, prop, input, ...args)
    }
  })
