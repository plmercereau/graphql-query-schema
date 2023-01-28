import type { ConditionalPickDeep, ValueOf } from 'type-fest'

type Variable<T> = T & { variable: T }
type StringLiteral<T> = T extends `${infer U}` ? U : never

const variable = <T extends string>(arg: T): Variable<StringLiteral<T>> => {
  return arg as any
}

const x = variable('hello') // type is `Variable<hello>`

let value = 'alors'
const y = variable(value) // type is `never`

type Something = ConditionalPickDeep<
  {
    a: 'x'
    b: Variable<'a'>
    c: {
      d: 'z'
      e: Variable<'b'>
      x: Variable<'b'>
      f: Variable<'c'>
      g: {
        bob: 'j'
        h: Variable<'d'>
      }
    }
    d: Variable<'e'>
  },
  Variable<unknown>,
  { condition: 'extends' }
>

type DeepPropertiesToUnion<T> = T extends Variable<unknown>
  ? T['variable']
  : DeepPropertiesToUnion<ValueOf<T>>

type R = DeepPropertiesToUnion<Something>

type res = {
  [key in R]: true
}
