type A = { __typename: 'type_a'; a: string }
type B = { __typename: 'type_b'; b: string }
type U = A | B

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never
type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true

type Object = { __typename?: string }

type UnionField<
  T extends Object,
  WithTypeName = T & Required<Pick<T, '__typename'>>
> = IsUnion<T> extends true ? { __on: WithTypeName | WithTypeName[] } : never

const test: UnionField<U> = { __on: { __typename: 'type_b', b: 'value' } }
const test2: UnionField<U> = {
  __on: [
    { __typename: 'type_a', a: 'value' },
    { __typename: 'type_b', b: 'value' }
  ]
}

// TODO result type: __typename is required?

export {}
