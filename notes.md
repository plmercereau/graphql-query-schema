## TODO

- [ ] Convert all arguments as variables in the generated graphql query and types
  - [ ] update the generated query
  - [ ] update the variable typings
- [ ] Correct typings
  - [ ] `variables` should be required when one argument is required e.g. this should fail:
    - `client.mutation.insertUser()`
    - `client.mutation.insertUser({})`
    - `client.mutation.insertUser({ select: true })`
  - [ ] non-nullable arguments should be required, for instance this should fail:
    - `client.mutation.insertUser({ variables: { email: 'bob' }})` // `locale` is missing
- [ ] Urql PR / typescript codegen PR ? or we create our own plugin
- [ ] Enums: get rid of `enumType` now the schema is available on runtime
  - [ ] change the typings to allow the list of values e.g. `'essay'` instead of `Categories_Enum.Essay`?
  - [ ] detect it's an enum when generating the query
- [ ] Check and complete unions
- [ ] Use the introspection schema to
  - [x] find the query roots
  - [ ] find the argument types
- [x] GraphQL codegen plugin
  - [x] instrospection `as const`
  - [x] get rid of the classes config, and prefer interfaces

## Done

- [x] Get rid of proxies
- [x] Get rid of .run() etc
- [x] Implement `client.queryDocument`, `client.mutationDocument`, and `client.subscriptionDocument`
  - [x] get rid of the "generic" client

## Sort

- Urql / Apollo tests
- Types testing
- Test with other Hasura settings e.g. naming conventions
- CI
- Other GraphQL features:
  - [ ] variables (for `client.queryDocument` etc)
  - [ ] aliases
  - [ ] unions (to be finished)
  - [ ] Interfaces
  - [ ] Multiple operations
    - Maybe: `client.query({ todos: { id: true }, users: { email: true } })`
- Try other graphql-codegen naming conventions, and pick the one that renders nicest types
