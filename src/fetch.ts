import fetch from 'cross-fetch'
import {
  OperationFactory,
  OperationTypes,
  toRawGraphQL,
  ReturnTransformersFactory,
  proxyConstructor
} from './shared'

type ClientConstructorParams<Schema = Record<string, any>> = {
  schema?: Schema
  url?: string
  headers?: HeadersInit
}

type FetchWrapper = (init?: RequestInit) => Promise<Response>

const fetchReturnTransformer: ReturnTransformersFactory<any>['fetch'] = <Schema, Result>(
  operation: OperationTypes,
  property: string,
  input: any,
  fetchWrapper: FetchWrapper
): {
  run: () => Promise<Result>
  toRawGraphQL: () => string
} => {
  const graphqlQuery = toRawGraphQL(operation, property, input)

  return {
    run: async () => {
      const query = await fetchWrapper({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: graphqlQuery })
      })
      if (!query.ok) {
        throw new Error(query.statusText)
      }
      const { data, errors } = await query.json()
      if (errors) {
        throw new Error(errors[0].message)
      }
      return data[property]
    },
    toRawGraphQL: () => graphqlQuery
  }
}

export class Client<Schema extends Record<string, any>> {
  query: OperationFactory<Schema, 'Query', 'fetch'>
  mutation: OperationFactory<Schema, 'Mutation', 'fetch'>
  fetch: FetchWrapper

  constructor(params?: ClientConstructorParams<Schema>) {
    const fetchWrapper: FetchWrapper = (init?: RequestInit) => {
      if (!params?.url) {
        throw new Error('Missing url')
      }
      return fetch(params.url, {
        ...init,
        headers: {
          ...params.headers,
          ...init?.headers
        }
      })
    }
    this.query = proxyConstructor('Query', fetchReturnTransformer, fetchWrapper)
    this.mutation = proxyConstructor('Mutation', fetchReturnTransformer, fetchWrapper)
    this.fetch = fetchWrapper
  }
}
