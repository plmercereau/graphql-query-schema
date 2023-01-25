import crossFetch from 'cross-fetch'
import {
  toRawGraphQL,
  ReturnTransformersFactory,
  OperationFactory,
  toGraphQLDocument,
  GenericSchema,
  getRootOperationNames,
  OperationTypes
} from './shared'

type Client<Schema extends GenericSchema> = Readonly<{
  [key in Exclude<OperationTypes, 'Subscription'> as Uncapitalize<key>]: OperationFactory<
    Schema,
    key,
    'request'
  >
}> & {
  [key in OperationTypes as `${Uncapitalize<key>}Document`]: OperationFactory<
    Schema,
    key,
    'document'
  >
}
type FetchWrapper = (init?: RequestInit) => Promise<Response>

export function fetchClient<Schema extends GenericSchema>({
  schema,
  url,
  headers
}: {
  schema: Schema
  url: string
  headers?: HeadersInit
}): Client<Schema> &
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

  const queryNames = getRootOperationNames(schema, 'Query')
  const mutationNames = getRootOperationNames(schema, 'Mutation')
  const subscriptionNames = getRootOperationNames(schema, 'Subscription')

  const fetchReturnTransformer = async <Result>(
    schema: GenericSchema,
    operation: OperationTypes,
    property: string,
    input: any
  ): ReturnType<ReturnTransformersFactory<Result>['request']> => {
    const { query, variables } = toRawGraphQL(schema, operation, property, input)
    // TODO also get the variable values
    // TODO in the variable values, convert enum strings to `EnumType`
    const request = await fetch({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query, variables })
    })
    if (request.status !== 200) {
      throw new Error(request.statusText)
    }
    const { data, errors } = await request.json()
    if (errors) {
      console.log(JSON.stringify({ input, query, variables }, null, 2))
      console.log(errors)
      throw new Error(errors[0].message)
    }
    return data[property]
  }

  const query = queryNames.reduce<OperationFactory<Schema, 'Query', 'request'>>((acc, property) => {
    acc[property] = (input: unknown) =>
      fetchReturnTransformer(schema, 'Query', property, input) as any
    return acc
  }, {} as any)

  const mutation = mutationNames.reduce<OperationFactory<Schema, 'Mutation', 'request'>>(
    (acc, property) => {
      acc[property] = (input: unknown) =>
        fetchReturnTransformer(schema, 'Mutation', property, input) as any
      return acc
    },
    {} as any
  )

  const queryDocument = queryNames.reduce<OperationFactory<Schema, 'Query', 'document'>>(
    (acc, property) => {
      acc[property] = (input: unknown) => toGraphQLDocument(schema, 'Query', property, input) as any
      return acc
    },
    {} as any
  )

  const mutationDocument = mutationNames.reduce<OperationFactory<Schema, 'Mutation', 'document'>>(
    (acc, property) => {
      acc[property] = (input: unknown) =>
        toGraphQLDocument(schema, 'Mutation', property, input) as any
      return acc
    },
    {} as any
  )

  const subscriptionDocument = subscriptionNames.reduce<
    OperationFactory<Schema, 'Subscription', 'document'>
  >((acc, property) => {
    acc[property] = (input: unknown) =>
      toGraphQLDocument(schema, 'Subscription', property, input) as any
    return acc
  }, {} as any)

  return {
    fetch,
    url,
    headers,
    query,
    mutation,
    queryDocument,
    mutationDocument,
    subscriptionDocument
  }
}
