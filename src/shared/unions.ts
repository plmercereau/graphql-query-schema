import { UnionToIntersection } from './type-helpers'

export type UnionInput<T extends { __typename?: string }> = UnionToIntersection<{
  [key in keyof T as NonNullable<T['__typename']>]: T
}>
