## TODO

- [ ] Convert all arguments as variables in the generated graphql query and types
  - [x] update the generated query
  - [x] update the query execution
  - [ ] update the variable typings
- [ ] Correct typings
  - [ ] `variables` should be required when one argument is required e.g. this should fail:
    - `client.mutation.insertUser()`
    - `client.mutation.insertUser({})`
    - `client.mutation.insertUser({ select: true })`
  - [ ] non-nullable arguments should be required, for instance this should fail:
    - `client.mutation.insertUser({ variables: { email: 'bob' }})` // `locale` is missing
- [ ] Check and complete unions
- [ ] Use the introspection schema to
  - [x] find the query roots
  - [ ] find the argument types

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

## Sort

- Urql / Apollo tests
- Types testing
- Test with other Hasura settings e.g. naming conventions
- CI
- Other GraphQL features:
  - [ ] variables (for `client.queryDocument` etc)
    - detect enums used in arguments when generating the query, and wrap them with `EnumType`
  - [ ] aliases
  - [ ] unions (to be finished)
  - [ ] Interfaces
  - [ ] Multiple operations
    - Maybe: `client.query({ todos: { id: true }, users: { email: true } })`
- Try other graphql-codegen naming conventions, and pick the one that renders nicest types
