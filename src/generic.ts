import {
  OperationTypes,
  toGraphQL,
  ReturnTransformersFactory,
  proxyConstructor,
  GenericClient,
  GenericSchema
} from './shared'

const documentReturnTransformer = <Result>(
  operation: OperationTypes,
  property: string,
  input: any
): ReturnType<ReturnTransformersFactory<Result>['generic']> =>
  toGraphQL(operation, property, input) as any

export function groq<Schema extends GenericSchema>(
  _schema: Schema
): GenericClient<Schema, 'generic'> {
  return {
    query: proxyConstructor('Query', documentReturnTransformer),
    mutation: proxyConstructor('Mutation', documentReturnTransformer),
    subscription: proxyConstructor('Subscription', documentReturnTransformer)
  }
}
