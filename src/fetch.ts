import crossFetch from 'cross-fetch'
import {
  OperationTypes,
  toRawGraphQL,
  ReturnTransformersFactory,
  proxyConstructor,
  GenericClient,
  GenericSchema
} from './shared'

type FetchClientConstructorParams<Schema = Record<string, any>> = {
  schema: Schema
  url: string
  headers?: HeadersInit
}

type FetchWrapper = (init?: RequestInit) => Promise<Response>

const fetchReturnTransformer = async <Result>(
  schema: GenericSchema,
  operation: OperationTypes,
  property: string,
  input: any,
  fetchWrapper: FetchWrapper
): ReturnType<ReturnTransformersFactory<Result>['fetch']> => {
  const query = toRawGraphQL(schema, operation, property, input)
  const request = await fetchWrapper({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
  if (request.status !== 200) {
    throw new Error(request.statusText)
  }
  const { data, errors } = await request.json()
  if (errors) {
    console.log(query)
    console.log(errors)
    throw new Error(errors[0].message)
  }
  return data[property]
}

export function fetchClient<Schema extends GenericSchema>({
  schema,
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
    query: proxyConstructor(schema, 'Query', fetchReturnTransformer, fetch),
    mutation: proxyConstructor(schema, 'Mutation', fetchReturnTransformer, fetch)
  }
}
