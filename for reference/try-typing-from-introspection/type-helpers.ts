export type FilterArrayItemsThatExtends<T, U> = T extends readonly []
  ? []
  : T extends readonly [infer I, ...infer Rest]
  ? I extends U
    ? [I, ...FilterArrayItemsThatExtends<Rest, U>]
    : FilterArrayItemsThatExtends<Rest, U>
  : []

export type PickFirstArrayItemThatExtends<T, U> = FilterArrayItemsThatExtends<T, U> extends [
  infer I,
  ...infer _Rest
]
  ? I & U
  : never
