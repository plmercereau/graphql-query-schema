import fetch from 'cross-fetch'
import {
  OperationTypes,
  toRawGraphQL,
  ReturnTransformersFactory,
  proxyConstructor,
  GenericClient,
  GenericSchema,
  toGraphQL
} from './shared'

type FetchClientConstructorParams<Schema = Record<string, any>> = {
  schema: Schema
  url: string
  headers?: HeadersInit
}

type FetchWrapper = (init?: RequestInit) => Promise<Response>

const fetchReturnTransformer = <Result>(
  operation: OperationTypes,
  property: string,
  input: any,
  fetchWrapper: FetchWrapper
): ReturnType<ReturnTransformersFactory<Result>['fetch']> => {
  return {
    run: async () => {
      const query = await fetchWrapper({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: toRawGraphQL(operation, property, input) })
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
    toString: () => toRawGraphQL(operation, property, input),
    toGraphQL: () => toGraphQL(operation, property, input)
  }
}

export class FetchClient<Schema extends GenericSchema> implements GenericClient<Schema, 'fetch'> {
  url: string
  headers?: HeadersInit

  readonly fetch: FetchWrapper = (init?: RequestInit) =>
    fetch(this.url, {
      ...init,
      headers: {
        ...this.headers,
        ...init?.headers
      }
    })

  readonly query = proxyConstructor('Query', fetchReturnTransformer, this.fetch)
  readonly mutation = proxyConstructor('Mutation', fetchReturnTransformer, this.fetch)

  constructor({ url, headers }: FetchClientConstructorParams<Schema>) {
    this.url = url
    this.headers = headers
  }
}
