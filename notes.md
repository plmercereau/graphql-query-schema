- [ ] Convert all arguments as variables in the generated graphql query and types
  - [ ] update the generated query
  - [ ] update the variable typings
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
    queryRootType: 'Query' as const, // or null
    mutationRootType: 'Mutation' as const, // or null
    subscriptionRootType: 'Subscription' as const, // or null
    types: {
      TypeName: TypeName
      // etc
    }
  }
  ```
