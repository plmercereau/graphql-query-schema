import { Split, Join } from 'type-fest'

export type StripImpossibleProperties<T> = Pick<
  T,
  { [Key in keyof T]-?: T[Key] extends never ? never : Key }[keyof T]
>

// ? Keep?
// * See: https://learn.microsoft.com/en-us/javascript/api/@azure/keyvault-certificates/requireatleastone?view=azure-node-latest
export type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>
}[keyof T]

export type UnwrapNullableArray<T> = NonNullable<T extends (infer E)[] ? E : T>
export type UnwrapArray<T> = T extends (infer E)[] ? E : NonNullable<T>

export type WrapArray<T, U> = NonNullable<T> extends any[] ? U[] : U

/** Omit all the optional fields of the type */
export type OmitOptionalFields<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
}

export type MakeOptional<T> = {
  [K in keyof T as undefined extends T[K] ? K : never]?: T[K]
} & {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K]
}

// ? Keep?
/** Transform a function according to the type of its first parameter:
 * - if the first parameter has some required keys, it is required
 * - otherwise, the parameter is made optional
 */
export type FunctionWithOptionalParameter<
  T extends (arg: any) => any,
  Arg = Parameters<T>[0]
> = keyof OmitOptionalFields<Arg> extends string
  ? (arg: Arg) => ReturnType<T>
  : (arg?: Arg) => ReturnType<T>

/** Select only the properties of the object that matches the second generic argument */
export type Select<T, K extends keyof any> = Pick<T, Extract<keyof T, K>>

/** Gets the main GraphQL type from a GraphQL argument type e.g. `[string!]!` returns `string` */
export type GraphQLPredicate<GQLType extends string> = GQLType extends `${infer S}!`
  ? GraphQLPredicate<S>
  : GQLType extends `[${infer S}]`
  ? GraphQLPredicate<S>
  : GQLType

// * See: https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type/50375286#50375286
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never

// * See: https://stackoverflow.com/a/53955431
export type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true

// export type RequiredField<T, K extends keyof T> = T & Required<Pick<T, K>>

export type ToUnion<T> = T[keyof T]

type CapitalizeEach<T> = T extends [infer I, ...infer R]
  ? I extends string
    ? [Capitalize<I>, ...CapitalizeEach<R>]
    : []
  : []

/** Transform `a_string_type` to `A_String_Type`  */
export type CapitalizeSnakeCase<T extends string> = Join<CapitalizeEach<Split<T, '_'>>, '_'>

type RequiredKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? never : K }[keyof T]

export type RequiredWhenChildrenAreRequired<key extends string, T> = RequiredKeys<T> extends never
  ? { [k in key]?: T }
  : { [k in key]: T }
