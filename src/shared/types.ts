import { argPrefix } from './config'

type GenericSchema = Record<string, any>

type OmitByValue<T, ValueType> = Pick<
  T,
  { [Key in keyof T]-?: T[Key] extends ValueType ? never : Key }[keyof T]
>

export type OperationTypes = 'Query' | 'Mutation'

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
  : never

type RootOperation<
  Schema extends GenericSchema,
  OperationType extends OperationTypes
> = Schema[`${OperationType}${OperationSuffix<Schema>}`]['prototype']

type FieldType<
  Schema extends GenericSchema,
  OperationType extends OperationTypes,
  FieldName extends string
> = Schema[`${OperationType}${OperationSuffix<Schema>}${Capitalize<FieldName>}Args`]['prototype']

type AllParameters<
  Schema extends GenericSchema,
  OperationType extends OperationTypes,
  Element extends Record<string, any>,
  Args,
  AllFields = {
    [key in keyof Element]: UnwrapArray<Element[key]> extends object
      ?
          | true
          | AllParameters<
              Schema,
              OperationType,
              UnwrapArray<Element[key]>,
              Element[key] extends any[]
                ? FieldType<
                    Schema,
                    OperationType,
                    Required<UnwrapArray<Element[key]>>['__typename']
                  >
                : {}
            >
      : true
  },
  Fields = RequireAtLeastOne<AllFields>
> = Fields & AddPrefix<Args, typeof argPrefix>

type UnwrapArray<T> = T extends (infer E)[] ? E : NonNullable<T>

type WrapArray<T, U> = T extends any[] ? U[] : U

type ResultFields<
  Params,
  Element,
  Select = Omit<Params, '__args'>
> = UnwrapArray<Select> extends undefined
  ? Element
  : WrapArray<
      Element,
      OmitByValue<
        {
          [k in keyof Select]: k extends keyof UnwrapArray<Element>
            ? UnwrapArray<Element>[k] extends object
              ? ResultFields<Select[k], UnwrapArray<Element>[k]>
              : UnwrapArray<Element>[k]
            : never
        },
        never
      >
    >

export type OperationFactory<
  Schema extends GenericSchema,
  OperationType extends OperationTypes,
  ReturnTransformerName extends keyof ReturnTransformersFactory<any>,
  Operations extends Record<string, any> = Omit<RootOperation<Schema, OperationType>, '__typename'>
> = Required<{
  [name in keyof Operations]: <
    Operation extends Operations[name],
    Element extends UnwrapArray<Operation>,
    Params extends AllParameters<
      Schema,
      OperationType,
      Element,
      FieldType<Schema, OperationType, string & name>
    >,
    ExactParams extends Exactly<Params, ExactParams>,
    Result extends WrapArray<Operation, ResultFields<ExactParams, Element>>,
    ReturnTransformer extends ReturnTransformersFactory<Result>[ReturnTransformerName]
  >(
    params: ExactParams
  ) => ReturnType<ReturnTransformer>
}>

export type ReturnTransformersFactory<Result> = {
  fetch: ReturnTransformer<{
    run: () => Promise<Result>
    toRawGraphQL: () => string
  }>
}

export type ReturnTransformer<ReturnType> = (
  operation: OperationTypes,
  property: string,
  input: any,
  ...other: any
) => ReturnType