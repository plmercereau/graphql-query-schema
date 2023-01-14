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
    run: async (variables) => {
      const query = toRawGraphQL(operation, property, input)
      const request = await fetchWrapper({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables })
      })
      if (!request.ok) {
        console.log(query)
        throw new Error(request.statusText)
      }
      const { data, errors } = await request.json()
      if (errors) {
        console.log(query)
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
