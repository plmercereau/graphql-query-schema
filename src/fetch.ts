import crossFetch from 'cross-fetch'
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

export function fetchClient<Schema extends GenericSchema>({
  url,
  headers
}: FetchClientConstructorParams<Schema>): Omit<GenericClient<Schema, 'fetch'>, 'subscription'> &
  Readonly<{
    fetch: FetchWrapper
    url: string
    headers?: HeadersInit
  }> {
  const fetch: FetchWrapper = (init?: RequestInit) =>
    crossFetch(url, {
      ...init,
      headers: {
        ...headers,
        ...init?.headers
      }
    })
  return {
    fetch,
    url,
    headers,
    query: proxyConstructor('Query', fetchReturnTransformer, fetch),
    mutation: proxyConstructor('Mutation', fetchReturnTransformer, fetch)
  }
}
