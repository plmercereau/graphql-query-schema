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
): ReturnType<ReturnTransformersFactory<Result>['factory']> => toGraphQL(operation, property, input)

// TODO find a better name than "Factory". "documentNodes"? "documents"? => "graphql" <=
// TODO another pattern than class e.g. factory(schema). (factory<typeof schema> is a bit ugly)
export class Factory<Schema extends GenericSchema> implements GenericClient<Schema, 'factory'> {
  readonly query = proxyConstructor('Query', documentReturnTransformer)
  readonly mutation = proxyConstructor('Mutation', documentReturnTransformer)

  constructor(_schema: Schema) {}
}
