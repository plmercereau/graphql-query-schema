import { TypedDocumentNode } from '@graphql-typed-document-node/core'

import { AddArgPrefix, WithArgPrefix } from './config'
import {
  UnwrapNullableArray,
  UnwrapArray,
  WrapArray,
  StripImpossibleProperties,
  FunctionWithOptionalParameter,
  ToUnion,
  IsUnion
} from './type-helpers'

import { VariablesInputType, VariablesTypes } from './variables'

export type GenericSchema = Record<string, any>

export type OperationTypes = 'Query' | 'Mutation' | 'Subscription'

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
  Fields = IsUnion<Element> extends true
    ? AddArgPrefix<{
        on: // TODO require at least one typename. When using RequireAtLeastOne, the result type is not inferred correctly
        //RequireAtLeastOne<
        {
          [key in NonNullable<Element['__typename']>]?: AllParameters<
            Schema,
            OperationType,
            Schema[key]['prototype'],
            Args
          >
        }
        //>
      }>
    : {
        [key in keyof Element]?: UnwrapNullableArray<Element[key]> extends object
          ? // * Accept either a list of fields or `true` to select all the fields
            | AllParameters<
                  Schema,
                  OperationType,
                  UnwrapNullableArray<Element[key]>,
                  Element[key] extends any[]
                    ? FieldArgs<
                        Schema,
                        OperationType,
                        Required<UnwrapArray<Element[key]>>['__typename']
                      >
                    : {}
                >
              | true
          : // * If the element key is not an object/array of objects, it's a scalar field
            true
      }
> = Fields & AddArgPrefix<Args>

type QueryFields<Params, Element> = Omit<
  UnwrapArray<Params> extends undefined
    ? Element & { undef: true }
    : WrapArray<
        NonNullable<Element>,
        UnwrapArray<Params> extends true
          ? // * The parameter is `true` and the element is an object: return all the non-object (scalar) fields
            // TODO: we should also apply this logic when no parameter is passed
            StripImpossibleProperties<{
              [k in keyof NonNullable<Element>]: k extends keyof UnwrapArray<Element>
                ? UnwrapArray<NonNullable<Element>>[k] extends object
                  ? never
                  : UnwrapArray<Element>[k]
                : never
            }>
          : // * The parameter is a list of fields and the element in an object: pick the selected fields
            StripImpossibleProperties<{
              [k in keyof Params]: k extends keyof UnwrapArray<Element>
                ? UnwrapArray<NonNullable<Element>>[k] extends object
                  ? QueryFields<Params[k], UnwrapArray<Element>[k]>
                  : UnwrapArray<Element>[k]
                : never
            }> & { there: NonNullable<Element>['id'] }
      >,
  WithArgPrefix<'on'>
>

type UnionFields<
  Schema extends GenericSchema,
  Params extends AddArgPrefix<{ on?: any }> & { __typename?: string },
  Fragments = NonNullable<Params[WithArgPrefix<'on'>]>
> = WithArgPrefix<'on'> extends keyof NonNullable<Params>
  ? ToUnion<{
      [fragmentName in keyof Fragments]: {
        __typename: NonNullable<Schema[string & fragmentName]['prototype']['__typename']>
      } & QueryFields<
        NonNullable<Fragments[fragmentName]>,
        Schema[string & fragmentName]['prototype']
      >
    }>
  : {}

// * See: https://stackoverflow.com/a/59230299
type Exactly<T, U> = T & Record<Exclude<keyof U, keyof T | WithArgPrefix<'variables'>>, never>

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
    Result extends WrapArray<
      Operation,
      IsUnion<NonNullable<Element>> extends true
        ? UnionFields<Schema, ExactParams>
        : QueryFields<ExactParams, Element>
    >,
    ReturnTransformer extends ReturnTransformersFactory<
      Result,
      Variables,
      string & name
    >[ReturnTransformerName]
  >(
    params?: ExactParams & { [key in WithArgPrefix<'variables'>]?: VariablesInput }
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
  generic: ReturnTransformer<
    TypedDocumentNode<{ [key in OperationName]: Result }, Variables>,
    OperationName
  >
  /** Fetch client */
  fetch: ReturnTransformer<
    {
      run: FunctionWithOptionalParameter<(variables: Variables) => Promise<Result>>
      toString: () => string
      toGraphQL: () => TypedDocumentNode<{ [key in OperationName]: Result }, Variables>
    },
    OperationName
  >
}

export type ReturnTransformer<ReturnType, _OperationName> = (
  schema: GenericSchema,
  operation: OperationTypes,
  property: string,
  input: any,
  ...other: any
) => ReturnType
