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

- In the graphql-codegen config, `declarationKind` should be `class`
- Not tested with additional settings e.g. naming conventions. Recommended: generate a separate file if you need to codegen for another use
- Swapi: Note on `extends Node` before `Node` is defined: `ReferenceError: Cannot access 'Node' before initialization`
  - -> graphql-codegen PR
- Variables input is typed, but variables inside arguments are not.
- Remaining limitations on Unions

### to do

- Urql / Apollo tests
- Types testing
- Custom argument transformer e.g. nested / not nested, `_` or `__` or nothing, etc.
- Test with other Hasura settings e.g. naming conventions
- Multiple operations
  - Maybe: `client.query({ todos: { id: true }, users: { email: true } })`
- CI
- GraphQL features:
  - aliases
  - unions (to be finished)
  - interfaces
- Try other graphql-codegen naming conventions, and pick the one that renders nicest types
