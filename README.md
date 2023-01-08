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

4. Play a bit with the api inside `tests/index.test.ts`:

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

### to do

- Support any graphql-codegen naming convention
- Try with `abstract class`
- Typed node document
- Monorepo
- Graphql-query (+ subscriptions)
- Required fields e.g. userId when inserting a todo
- Test one to two more public APIs
- Test typings
- Urql?
- Apollo?
- GraphQL variables
- Custom result e.g. nested / not nested, `_` or `__` or nothing, etc.
- CI
- Changesets

- Swapi: Note on `extends Node` before `Node` is defined: `ReferenceError: Cannot access 'Node' before initialization`
  - -> graphql-codegen PR
