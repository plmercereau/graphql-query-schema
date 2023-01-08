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

const fetchReturnTransformer: ReturnTransformersFactory<any>['fetch'] = <Schema, Result>(
  operation: OperationTypes,
  property: string,
  input: any,
  params: ClientConstructorParams<Schema>
): {
  run: () => Promise<Result>
  toRawGraphQL: () => string
} => {
  const graphqlQuery = toRawGraphQL(operation, property, input)

  return {
    run: async () => {
      if (!params?.url) {
        throw new Error('Missing url')
      }
      const query = await fetch(params.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...params.headers
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

  constructor(params?: ClientConstructorParams<Schema>) {
    this.query = proxyConstructor('Query', fetchReturnTransformer, params)
    this.mutation = proxyConstructor('Mutation', fetchReturnTransformer, params)
  }
  // TODO client.fetch
}
