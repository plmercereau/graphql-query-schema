import fetch from 'cross-fetch'
import { jsonToGraphQLQuery } from 'json-to-graphql-query'

type OmitByValue<T, ValueType> = Pick<
  T,
  { [Key in keyof T]-?: T[Key] extends ValueType ? never : Key }[keyof T]
>

const argPrefix = '_' as const

type OperationTypes = 'Query' | 'Mutation'

type AddPrefix<T, P extends string> = {
  [K in keyof T as K extends string ? `${P}${K}` : never]: T[K]
}

// * See: https://stackoverflow.com/a/59230299
type Exactly<T, U> = T & Record<Exclude<keyof U, keyof T>, never>

// * See: https://learn.microsoft.com/en-us/javascript/api/@azure/keyvault-certificates/requireatleastone?view=azure-node-latest
type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>
}[keyof T]

type Parameters<
  Schema extends Record<string, any>,
  OperationType extends OperationTypes,
  Element extends Record<string, any>,
  Args,
  AllFields = {
    [key in keyof Element]: UnwrapArray<Element[key]> extends object
      ?
          | true
          | Parameters<
              Schema,
              OperationType,
              UnwrapArray<Element[key]>,
              Element[key] extends any[]
                ? Schema[`${OperationType}_Root${Capitalize<
                    Required<UnwrapArray<Element[key]>>['__typename']
                  >}Args`]['prototype']
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

type OperationFactory<
  Schema extends Record<string, any>,
  OperationType extends OperationTypes,
  Operations extends Record<string, any> = Omit<
    Schema[`${string & OperationType}_Root`]['prototype'],
    '__typename'
  >
> = Required<{
  [name in keyof Operations]: <
    Operation extends Operations[name],
    Element extends UnwrapArray<Operation>,
    Params extends Parameters<
      Schema,
      OperationType,
      Element,
      Schema[`${OperationType}_Root${Capitalize<string & name>}Args`]['prototype']
    >,
    ExactParams extends Exactly<Params, ExactParams>,
    Result extends WrapArray<Operation, ResultFields<ExactParams, Element>>
  >(
    params: ExactParams
  ) => {
    run: () => Promise<Result>
    toRawGraphQL: () => string
  }
}>

type ClientConstructorParams<Schema = Record<string, any>> = {
  schema?: Schema
  url?: string
  headers?: HeadersInit
}

const proxyConstructor = <Schema extends Record<string, any>>(
  operation: 'Queries' | 'Mutations',
  params?: ClientConstructorParams<Schema>
): OperationFactory<Schema, 'Query'> => {
  return new Proxy({} as any, {
    get(_, prop: string) {
      const operationTypes: Record<typeof operation, string> = {
        Mutations: 'Mutation',
        Queries: 'Query'
      }
      const operationType = operationTypes[operation]

      const toJson = (values: Record<string, any>, property?: string) => {
        const __args: Record<string, any> = {}
        const select: Record<string, any> = {}
        Object.keys(values).forEach((key) => {
          if (key.startsWith(argPrefix) && key !== '__typename') {
            __args[key.slice(1)] = values[key]
          } else {
            if (typeof values[key] === 'object') {
              select[key] = toJson(values[key])
            } else {
              select[key] = values[key]
            }
          }
        })
        return { ...select, __args }
      }

      return (input: Record<string, any>) => {
        const toRawGraphQL = () =>
          jsonToGraphQLQuery(
            {
              [operationType.toLowerCase()]: {
                [prop]: toJson(input, prop)
              }
            },
            { pretty: true }
          )

        return {
          run: async () => {
            if (!params?.url) {
              throw new Error('Missing url')
            }
            const query = await fetch(params.url, {
              method: 'POST',
              headers: params.headers,
              body: JSON.stringify({ query: toRawGraphQL() })
            })
            if (!query.ok) {
              throw new Error(query.statusText)
            }
            const { data, errors } = await query.json()
            if (errors) {
              throw new Error(errors[0].message)
            }
            return data[prop]
          },
          toRawGraphQL
        }
      }
    }
  })
}
export class Client<Schema extends Record<string, any>> {
  query: OperationFactory<Schema, 'Query'>
  mutation: OperationFactory<Schema, 'Mutation'>

  constructor(params?: ClientConstructorParams<Schema>) {
    this.query = proxyConstructor('Queries', params)
    this.mutation = proxyConstructor('Mutations', params)
  }
}
