# Graphql requests from an object definition

1. Start Nhost locally

```sh
nhost dev
```

2. Generate the schema

```sh
pnpm run generate
```

It generates `tests/schema.ts`

3. Run the tests

```
pnpm run test
```

4. Play a bit with the api inside `e2e/hasura.test.ts`:

```ts
const res = await client.query
  .todos({
    createdAt: true,
    contents: true,
    user: { displayName: true }
  })
  .run()

res.map(({ createdAt, contents, user: { displayName } }) => {
  console.log(`${displayName} created the following todo at ${createdAt}: ${contents}`)
})
```

## Limitations

- `declarationKind` should be `class`
- Not tested with additional settings e.g. naming conventions. Recommended: generate a separate file if you need to codegen for another use
- Swapi: Note on `extends Node` before `Node` is defined: `ReferenceError: Cannot access 'Node' before initialization`
  - -> graphql-codegen PR

### to do

- Urql / Apollo tests
- Types testing
- Custom argument transformer e.g. nested / not nested, `_` or `__` or nothing, etc.
- Required fields e.g. userId when inserting a todo -> isn't it something related to Hasura or Graphql-codegen?
- Test with other Hasura settings e.g. naming conventions
- Multiple operations
  - Maybe: `client.query({ todos: { id: true }, users: { email: true } })`
- CI
- Find a name: grapho is taken, graph-object? grafo? groph? **groql**?
- GraphQL aliases?
- GraphQL variables?
- Changesets
- make public
- codesandbox examples
- Support any graphql-codegen naming convention
- Try with `abstract class`
