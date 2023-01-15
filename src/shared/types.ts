import { TypedDocumentNode } from '@graphql-typed-document-node/core'

import { argPrefix } from './config'
import {
  UnwrapNullableArray,
  UnwrapArray,
  RequireAtLeastOne,
  WrapArray,
  StripImpossibleProperties,
  FunctionWithOptionalParameter
} from './type-helpers'
import { VariablesInputType, VariablesTypes } from './variables'

export type GenericSchema = Record<string, any>

export type OperationTypes = 'Query' | 'Mutation' | 'Subscription'

type AddPrefix<T, P extends string> = {
  [K in keyof T as K extends string ? `${P}${K}` : never]: T[K]
}

type OperationSuffix<Schema extends GenericSchema> = Schema['Query'] extends object
  ? ''
  : Schema['Query_Root'] extends object
  ? '_Root'
  : Schema['Root'] extends object
  ? ''
  : never

type RootOperation<
  Schema extends GenericSchema,
  OperationType extends OperationTypes
> = Schema[OperationType] extends object
  ? Schema[OperationType]['prototype']
  : // * Standard syntax
  Schema[`${OperationType}_Root`] extends object
  ? Schema[`${OperationType}_Root`]['prototype']
  : // * Hasura syntax
  Schema['Root'] extends object
  ? OperationType extends 'Query'
    ? Schema['Root']['prototype']
    : never
  : never

type FieldArgs<
  Schema extends GenericSchema,
  OperationType extends OperationTypes,
  FieldName extends string
> = Schema[`Root${Capitalize<FieldName>}Args`] extends object
  ? // * Relay syntax
    Schema[`Root${Capitalize<FieldName>}Args`]['prototype']
  : // * Standard syntax
    Schema[`${OperationType}${OperationSuffix<Schema>}${Capitalize<FieldName>}Args`]['prototype']

type AllParameters<
  Schema extends GenericSchema,
  OperationType extends OperationTypes,
  Element extends Record<string, any>,
  Args,
  AllFields = {
    [key in keyof Element]: UnwrapNullableArray<Element[key]> extends object
      ? AllParameters<
          Schema,
          OperationType,
          UnwrapNullableArray<Element[key]>,
          // TODO find a cleaner syntax
          Element[key] extends any[]
            ? FieldArgs<Schema, OperationType, Required<UnwrapArray<Element[key]>>['__typename']>
            : {}
        >
      : true
  },
  Fields = RequireAtLeastOne<AllFields>
> = Fields & AddPrefix<Args, typeof argPrefix>

type QueryFields<Params, Element> = UnwrapArray<Params> extends undefined
  ? Element
  : WrapArray<
      NonNullable<Element>,
      StripImpossibleProperties<{
        [k in keyof Params]: k extends keyof UnwrapArray<Element>
          ? UnwrapArray<NonNullable<Element>>[k] extends object
            ? QueryFields<Params[k], UnwrapArray<Element>[k]>
            : UnwrapArray<Element>[k]
          : never
      }>
    >

// * See: https://stackoverflow.com/a/59230299
type Exactly<T, U> = T & Record<Exclude<keyof U, keyof T | `${typeof argPrefix}variables`>, never>

export type OperationFactory<
  Schema extends GenericSchema,
  OperationType extends OperationTypes,
  ReturnTransformerName extends keyof ReturnTransformersFactory,
  Operations extends Record<string, any> = Omit<RootOperation<Schema, OperationType>, '__typename'>
> = Required<{
  [name in keyof Operations]: <
    Operation extends Operations[name],
    Element extends UnwrapArray<Operation>,
    VariablesInput extends VariablesInputType<Schema>,
    Variables extends VariablesTypes<Schema, VariablesInput>,
    Params extends AllParameters<
      Schema,
      OperationType,
      NonNullable<Element>,
      FieldArgs<Schema, OperationType, string & name>
    >,
    ExactParams extends Exactly<Params, ExactParams>,
    Result extends WrapArray<Operation, QueryFields<ExactParams, Element>>,
    ReturnTransformer extends ReturnTransformersFactory<
      Result,
      Variables,
      string & name
    >[ReturnTransformerName]
  >(
    params: ExactParams & { [key in `${typeof argPrefix}variables`]?: VariablesInput }
  ) => ReturnType<ReturnTransformer>
}>

export type GenericClient<
  Schema extends GenericSchema,
  ReturnTransformerName extends keyof ReturnTransformersFactory
> = Readonly<{
  [key in OperationTypes as Uncapitalize<key>]: OperationFactory<Schema, key, ReturnTransformerName>
}>

export type ReturnTransformersFactory<
  Result = any,
  Variables = any,
  OperationName extends string = any
> = {
  /** Typed Document Node client */
  generic: ReturnTransformer<TypedDocumentNode<{ [key in OperationName]: Result }>, OperationName>
  /** Fetch client */
  fetch: ReturnTransformer<
    {
      run: FunctionWithOptionalParameter<(variables: Variables) => Promise<Result>>
      toString: () => string
      toGraphQL: () => TypedDocumentNode<Result, Variables>
    },
    OperationName
  >
}

export type ReturnTransformer<ReturnType, _OperationName> = (
  operation: OperationTypes,
  property: string,
  input: any,
  ...other: any
) => ReturnType
