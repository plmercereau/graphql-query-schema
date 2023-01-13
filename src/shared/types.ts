import { TypedDocumentNode } from '@graphql-typed-document-node/core'

import { argPrefix } from './config'

export type GenericSchema = Record<string, any>

type StripImpossibleProperties<T> = Pick<
  T,
  { [Key in keyof T]-?: T[Key] extends never ? never : Key }[keyof T]
>

export type OperationTypes = 'Query' | 'Mutation' | 'Subscription'

type AddPrefix<T, P extends string> = {
  [K in keyof T as K extends string ? `${P}${K}` : never]: T[K]
}

// * See: https://stackoverflow.com/a/59230299
type Exactly<T, U> = T & Record<Exclude<keyof U, keyof T>, never>

// * See: https://learn.microsoft.com/en-us/javascript/api/@azure/keyvault-certificates/requireatleastone?view=azure-node-latest
type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>
}[keyof T]

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
          // TODO not nice. Maybe a better way to do this?
          Element[key] extends any[]
            ? FieldArgs<Schema, OperationType, Required<UnwrapArray<Element[key]>>['__typename']>
            : {}
        >
      : true
  },
  Fields = RequireAtLeastOne<AllFields>
> = Fields & AddPrefix<Args, typeof argPrefix>

type UnwrapNullableArray<T> = NonNullable<T extends (infer E)[] ? E : T>
type UnwrapArray<T> = T extends (infer E)[] ? E : NonNullable<T>

type WrapArray<T, U> = NonNullable<T> extends any[] ? U[] : U

type ResultFields<
  Params,
  Element,
  Select = Omit<Params, '__args'>
> = UnwrapArray<Select> extends undefined
  ? Element
  : WrapArray<
      NonNullable<Element>,
      StripImpossibleProperties<{
        [k in keyof Select]: k extends keyof UnwrapArray<Element>
          ? UnwrapArray<NonNullable<Element>>[k] extends object
            ? ResultFields<Select[k], UnwrapArray<Element>[k]>
            : UnwrapArray<Element>[k]
          : never
      }>
    >

export type OperationFactory<
  Schema extends GenericSchema,
  OperationType extends OperationTypes,
  ReturnTransformerName extends keyof ReturnTransformersFactory,
  Operations extends Record<string, any> = Omit<RootOperation<Schema, OperationType>, '__typename'>
> = Required<{
  [name in keyof Operations]: <
    Operation extends Operations[name],
    Element extends UnwrapArray<Operation>,
    Params extends AllParameters<
      Schema,
      OperationType,
      NonNullable<Element>,
      FieldArgs<Schema, OperationType, string & name>
    >,
    ExactParams extends Exactly<Params, ExactParams>,
    Result extends WrapArray<Operation, ResultFields<ExactParams, Element>>,
    ReturnTransformer extends ReturnTransformersFactory<
      Result,
      string & name
    >[ReturnTransformerName]
  >(
    params: ExactParams
  ) => ReturnType<ReturnTransformer>
}>

export type GenericClient<
  Schema extends GenericSchema,
  ReturnTransformerName extends keyof ReturnTransformersFactory
> = Readonly<{
  [key in OperationTypes as Uncapitalize<key>]: OperationFactory<Schema, key, ReturnTransformerName>
}>

export type ReturnTransformersFactory<Result = any, OperationName extends string = any> = {
  /** Typed Document Node client */
  generic: ReturnTransformer<TypedDocumentNode<{ [key in OperationName]: Result }>, OperationName>
  /** Fetch client */
  fetch: ReturnTransformer<
    {
      run: () => Promise<Result>
      toString: () => string
      toGraphQL: () => TypedDocumentNode<Result>
    },
    OperationName
  >
}

export type ReturnTransformer<ReturnType, OperationName> = (
  operation: OperationTypes,
  property: string,
  input: any,
  ...other: any
) => ReturnType
