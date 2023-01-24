import { ListType, NonNullType, ObjectType, TypeRef } from './introspection'
import { SchemaOf } from './root'
import { PickFirstArrayItemThatExtends, FilterArrayItemsThatExtends } from './type-helpers'

type TypesOf<I, S = SchemaOf<I>> = S extends { types: infer U }
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

type MAX_RECURSION = 10 // maximum recursion depth
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc
  : Enumerate<N, [...Acc, Acc['length']]>

type Pred = [never, ...Enumerate<MAX_RECURSION>]

export type ConcreteTypeOf<I, T extends TypeRef, D extends number = MAX_RECURSION> = [D] extends [0]
  ? any
  : T extends TypeRef
  ? T extends NonNullType
    ? ConcreteTypeOf<I, T['ofType'], Pred[D]>
    : T extends ListType
    ? ConcreteTypeOf<I, T['ofType'], Pred[D]>
    : T extends ObjectType
    ? SelectSingleType<I, T>
    : T
  : never

type Maybe<T> = T | undefined
export type WrapConcreteType<T extends TypeRef, Input, D extends number = MAX_RECURSION> = [
  D
] extends [0]
  ? any
  : T extends TypeRef
  ? T extends NonNullType
    ? NonNullable<WrapConcreteType<T['ofType'], Input, Pred[D]>>
    : T extends ListType
    ? Array<WrapConcreteType<T['ofType'], Input, Pred[D]>>
    : Maybe<Input>
  : never
