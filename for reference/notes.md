## TODO

- [ ] Types testing
- [ ] Unified test schema

## Done

- [x] Get rid of proxies
- [x] Get rid of .run() etc
- [x] Implement `client.queryDocument`, `client.mutationDocument`, and `client.subscriptionDocument`
  - [x] get rid of the "generic" client
- [x] Enums:
  - [x] get rid of `enumType` now the schema is available on runtime
  - [x] change the typings to allow the list of values e.g. `'essay'` instead of `Categories_Enum.Essay`?
- [x] GraphQL codegen plugin
  - [x] instrospection `as const`
  - [x] get rid of the classes config, and prefer interfaces
- [x] Check and complete unions
- [x] Correct typings
  - [x] `variables` should be required when one argument is required e.g. this should fail:
    - `client.mutation.insertUser()`
    - `client.mutation.insertUser({})`
    - `client.mutation.insertUser({ select: true })`
  - [ ] non-nullable arguments should be required, for instance this should fail:
    - `client.mutation.insertUser({ variables: { email: 'bob' }})` // `locale` is missing
    - => This information is not present in the GraphQL schema => out
- [x] Convert all arguments as variables in the generated graphql query and types
  - [x] update the generated query
  - [x] update the query execution
- [x] Use the introspection schema to:
  - [x] find the query roots
  - [x] find the argument types
- [x] review the nested arguments system - and use the introspection `args` as a reference
- [x] Unions
  - [x] Types for `on: { Human: true }`
  - [x] When in an union, require at least one type
- [x] Interfaces
  - [x] Fragments on interfaces (generation ok, but incorrect types)
- [x] identify with other graphql-codegen options could be allowed, and block the required ones
  - [x] Use `addUnderscoreToArgsType`
  - [x] `avoidOptionals` -> no, we need them
  - [x] don't allow other naming conventions as it may complicate things without bringing much value
  - [x] Allow custom scalars

## Sort

- Use `type-fest` types when possible, e.g. `Exact`, `ConditionalPickDeep`, `RequireAtLeastOne`, etc
- Bundle and tree-shake `type-fest`
- Simplify the TS outputs with https://github.com/sindresorhus/type-fest/blob/main/source/simplify.d.ts
- Urql / Apollo tests
- Variables typings
- Test with other Hasura settings e.g. naming conventions
- CI
- Other GraphQL features:
  - [ ] Variables (for `client.queryDocument` etc)
    - detect enums used in arguments when generating the query, and wrap them with `EnumType`
  - [ ] Multiple operations
    - Maybe: `client.query({ todos: { id: true }, users: { email: true } })`
  - [ ] Aliases
  - [ ] Fragments
  - [ ] Directives
  - [x] Enums
  - [x] Unions
  - [x] Interfaces
- Idea: extend specific types, for instance a given JSONB column
- Idea: namespace, e.g. `client.query.auth.users()` - will probably complicate things a lot for not much value
- Idea on unions: if no `on` is given, select all the scalars from all the possible types
  (but not when in an interface)

## Variables

To make the distinction between `variable('x')` and a "literal" value:

- https://codemix.com/opaque-types-in-javascript/

To deeply pick the variable types:

- https://github.com/sindresorhus/type-fest/blob/main/source/conditional-pick-deep.d.ts

then flatten them with

```ts
type PropertyValuesToUnionDeep<T> = T extends Record<string, infer X>
  ? PropertyValuesToUnionDeep<X>
  : T
```

```typescript
type StringLiteral<T> = T extends `${infer U}` ? U : never

const variable = <T extends string>(arg: T): StringLiteral<T> => {
  return arg as any
}

const x = variable('hello') // type is `hello`

let value = 'alors'
const y = variable(value) // type is `never`
```
