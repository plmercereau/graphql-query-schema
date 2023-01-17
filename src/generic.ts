import {
  OperationTypes,
  toGraphQL,
  ReturnTransformersFactory,
  proxyConstructor,
  GenericClient,
  GenericSchema
} from './shared'

const documentReturnTransformer = <Result>(
  schema: GenericSchema,
  operation: OperationTypes,
  property: string,
  input: any
): ReturnType<ReturnTransformersFactory<Result>['generic']> =>
  toGraphQL(schema, operation, property, input) as any

export function groq<Schema extends GenericSchema>(
  schema: Schema
): GenericClient<Schema, 'generic'> {
  return {
    query: proxyConstructor(schema, 'Query', documentReturnTransformer),
    mutation: proxyConstructor(schema, 'Mutation', documentReturnTransformer),
    subscription: proxyConstructor(schema, 'Subscription', documentReturnTransformer)
  }
}
