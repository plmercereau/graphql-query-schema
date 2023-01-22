- [ ] Convert all arguments as variables in the generated graphql query and types
  - [ ] update the generated query
  - [ ] update the variable typings
- [ ] `variables` should be required when one argument is required e.g. this should fail:
  - `client.mutation.insertUser()`
  - `client.mutation.insertUser({})`
  - `client.mutation.insertUser({ select: true })`
- [ ] non-nullable arguments should be required, for instance this should fail:
  - `client.mutation.insertUser({ variables: { email: 'bob' }})` // `locale` is missing
- [x] Get rid of .run() etc
- [ ] Problem on mutations?
- [ ] Implement `client.queryDocument`, `client.mutationDocument`, and `client.subscriptionDocument`
  - [ ] get rid of the "generic" client
- [ ] Urql PR / typescript codegen PR ? or we create our own plugin
- [ ] Get rid of proxies
- [ ] Use the introspection schema to find the query roots
- [ ] GraphQL codegen plugin
- [ ] Enums
  - [ ] change the typings to allow the list of values e.g. `'essay'` instead of `Categories_Enum.Essay`?
  - [ ] detect it's an enum when generating the query
- [ ] Check and complete umions
- [ ] Variables

  - `as const`
  - get rid of the classes?
    - create a default export like this:

  ```ts
  export default {
    introspection: { __schema: '...' } as const,
    queryRootType: 'Query' as 'Query', // or null
    mutationRootType: 'Mutation' as 'Mutation', // or null
    subscriptionRootType: 'Subscription' as 'Subscription', // or null
    types: {} as unknown as {
      TypeName: TypeName
      // etc
    }
  }
  ```
