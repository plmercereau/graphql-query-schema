import { TypeRef } from './introspection'
import { SchemaOf } from './root'
import { PickFirstArrayItemThatExtends, FilterArrayItemsThatExtends } from './type-helpers'

export type TypesOf<I, S = SchemaOf<I>> = S extends { types: infer U }
  ? U extends readonly [...infer R]
    ? R extends TypeRef[]
      ? R
      : []
    : []
  : []

export type SelectSingleType<I, Type extends TypeRef> = Type &
  PickFirstArrayItemThatExtends<
    TypesOf<I>,
    Type extends { name: string } ? Pick<Type, 'kind' | 'name'> : Pick<Type, 'kind'>
  >

export type SelectTypes<I, T> = FilterArrayItemsThatExtends<TypesOf<I>, T>
