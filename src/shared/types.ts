import { TypedDocumentNode } from '@graphql-typed-document-node/core'

import {
  UnwrapNullableArray,
  UnwrapArray,
  WrapArray,
  StripImpossibleProperties,
  ToUnion,
  IsUnion,
  OmitOptionalFields
} from './type-helpers'
import { FieldArgs, GenericSchema, OperationsOf, OperationTypes } from './schema'
import { VariablesInputType, VariablesTypes } from './variables'

type AllParameters<
  Schema extends GenericSchema,
  OperationType extends OperationTypes,
  Element extends Record<string, any>,
  Args,
  Fields = IsUnion<Element> extends true
    ? {
        on: // TODO require at least one typename. When using RequireAtLeastOne, the result type is not inferred correctly
        //RequireAtLeastOne<
        {
          [key in NonNullable<Element['__typename']>]?: AllParameters<
            Schema,
            OperationType,
            Schema['types'][key],
            Args
          >
        }
        //>
      }
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
> = { select?: Fields } & { variables?: Args }

type IsTrueOrHasOnlyOptionals<T> = T extends true
  ? true
  : keyof OmitOptionalFields<T> extends never
  ? true
  : false

type QueryFields<
  Params extends { select?: any },
  Element,
  UnwrappedParams extends { select?: any } = UnwrapArray<Params>
> = Omit<
  UnwrappedParams | UnwrappedParams extends undefined
    ? Element
    : WrapArray<
        NonNullable<Element>,
        IsTrueOrHasOnlyOptionals<UnwrappedParams['select']> extends true
          ? // * Return all the non-object (scalar) fields
            StripImpossibleProperties<{
              [k in keyof NonNullable<Element>]: k extends keyof UnwrapArray<Element>
                ? UnwrapArray<NonNullable<Element>>[k] extends object
                  ? never
                  : UnwrapArray<Element>[k]
                : never
            }>
          : // * The parameter is a list of fields and the element in an object: pick the selected fields
            StripImpossibleProperties<{
              [k in keyof UnwrappedParams['select']]: k extends keyof UnwrapArray<Element>
                ? UnwrapArray<NonNullable<Element>>[k] extends object
                  ? QueryFields<UnwrappedParams['select'][k], UnwrapArray<Element>[k]>
                  : UnwrapArray<Element>[k]
                : never
            }>
      >,
  'on'
>

type UnionFields<
  Schema extends GenericSchema,
  Params extends { select?: any } | undefined,
  Fragments extends { on: any } = NonNullable<NonNullable<Params>['select']> & { on: {} }
> = ToUnion<{
  [fragmentName in keyof Fragments['on']]: {
    __typename: NonNullable<Schema['types'][string & fragmentName]['__typename']>
  } & QueryFields<
    NonNullable<Fragments['on'][fragmentName]>,
    Schema['types'][string & fragmentName]
  >
}>

// * See: https://stackoverflow.com/a/59230299
type Exactly<T, U> = T & Record<Exclude<keyof U, keyof T>, never>

export type OperationFactory<
  Schema extends GenericSchema,
  OperationType extends OperationTypes,
  ReturnTransformerName extends keyof ReturnTransformersFactory,
  Operations = OperationsOf<Schema, OperationType>
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
    params?: ExactParams
  ) => ReturnType<ReturnTransformer>
}>

export type ReturnTransformersFactory<
  Result = any,
  Variables = any,
  OperationName extends string = any
> = {
  /** Typed Document Node client */
  document: ReturnTransformer<TypedDocumentNode<{ [key in OperationName]: Result }, Variables>>
  /** Run the operation  */
  request: ReturnTransformer<Promise<Result>>
}

export type ReturnTransformer<ReturnType> = (
  schema: GenericSchema,
  operation: OperationTypes,
  property: string,
  input: any
) => ReturnType
