# Graphql requests from an object definition

1. Start the servers locally

```sh
pnpm run backend
```

2. Generate the schema

```sh
pnpm run generate
```

3. Run the tests

```
pnpm run test
```

4. Run the e2e tests against the servers

```
pnpm run e2e:test
```

5. Play a bit with the api inside `e2e/hasura.test.ts`:

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

## Fetch client

```ts
import { fetchClient } from '../src'
import * as schema from '../schemas/hasura'

const client = fetchClient({
  schema,
  url: 'http://localhost:1337/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'nhost-admin-secret'
  }
})

const todos = await client.query
  .todos({
    id: true,
    contents: true,
    user: { email: true }
  })
  .run()

todos.forEach(({ id, contents, user: { email } }) => {
  console.log(id, contents, email)
})

const { id } = await client.mutation
  .insertTodo({
    _object: { contents: 'test', userId: '0835ff72-d103-4b3b-b401-6ced740c5609' },
    id: true
  })
  .run()
```

## Enums

```ts
import { fetchClient, enumType } from '../src'
import * as schema from '../schemas/pothos'

const client = fetchClient({
  schema,
  url: 'http://localhost:1337/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'nhost-admin-secret'
  }
})

const todos = await client.query
  .todos({
    _where: {
      category: { _eq: enumType(schema.Categories_Enum.Essay) }
    },
    contents: true,
    category: true
  })
  .run()
```

## Variables

```ts
import { fetchClient, variableType } from '../src'
import * as schema from '../schemas/pothos'

const client = fetchClient({
  schema,
  url: 'http://localhost:3000/graphql'
})

const getTodosFromUser = client.query.todos({
  _variables: { email: 'String!' },
  _where: { user: { email: { _eq: variableType('email') } } },
  id: true,
  contents: true,
  user: {
    id: true,
    displayName: true
  }
})

const bobTodos = await getTodosFromUser.run({ email: 'bob@sponge.it' })
```

## Unions

```ts
import { fetchClient } from '../src'
import * as schema from '../schemas/pothos'

const client = fetchClient({
  schema,
  url: 'http://localhost:3000/graphql'
})

const giraffes = await client.query
  .giraffeFacts({
    _on: {
      GiraffeNumericFact: { value: true },
      GiraffeStringFact: { fact: true }
    }
  })
  .run()

giraffes.forEach((giraffe) => {
  if (giraffe.__typename === 'GiraffeNumericFact') {
    // * We are in the GiraffeNumericFact fragment: only `value` is available
    console.log('Value:', giraffe.value)
  } else {
    // * We are in the GiraffeStringFact fragment: only `fact` is available
    console.log('Fact:', giraffe.fact)
  }
})
```

## "Vanilla" helper, to generate typed graphql node documents

```ts
import { groq } from '../src'
import * as schema from '../schemas/hasura'
import { print } from 'graphql'

const documents = groq(schema)

// document is fully typed
const queryDocument = documents.query.todos({
  _order_by: [{ createdAt: schema.Order_By.Asc }],
  createdAt: true,
  contents: true
})

console.log(print(queryDocument))
/* returns
{
  todos(order_by: [{createdAt: "asc"}]) {
    createdAt
    contents
  }
}
*/

const subscriptionDocument = documents.subscription.todos({
  _where: { createdAt: { _gt: new Date().toISOString() } },
  createdAt: true,
  contents: true
})

console.log(print(subscriptionDocument))
/* returns
subscription {
  todos( where: { createdAt: { _gt: "2023-01-18T07:45:51.865Z" } } ) {
    createdAt
    contents
  }
}
*/
```

## Use with other libraries

With `graphql-request`:

```ts
import { GraphQLClient } from 'graphql-request'
import { groq, variableType } from '../src'
import * as schema from '../schemas/hasura'

const client = new GraphQLClient('http://localhost:1337/v1/graphql')
const { query } = groq(schema)

const todosDocument = query.todos({
  user: {
    displayName: true
  },
  contents: true,
  category: true
})

// the result is fully typed
const { todos } = await client.request(todosDocument)

const todosFromUserDocument = query.todos({
  _where: { user: { email: { _eq: variableType('email') } } },
  _variables: { email: 'String!' },
  contents: true,
  category: true
})

// the result and variables are fully typed
const { todos: bobTodos } = await client.request(todosFromUserDocument, { email: 'bob@sponge.it' })


const { todos: bobTodos } = await client.request(todosFromUserDocument, { where: { user: { email: { _eq: 'bob@sponge.it'  } } } })
```

## Limitations

- In the graphql-codegen config, `declarationKind` should be `class`
- Not tested with additional settings e.g. naming conventions. Recommended: generate a separate file if you need to codegen for another use
- There is a bug in the `typescript` graphql-codegen plugin: with some schemas (not Hasura schemas), it generates classes before their parent class. It ends up in an error: `ReferenceError: Cannot access 'Node' before initialization`
  - see the Swapi code generation
- Variables input is typed, but variables inside arguments are not.
- Remaining limitations on Unions:
  - improve typings
  - does not support "select all scalars"

### to do

- Urql / Apollo tests
- get rid of `variableType` and `enumType` now the schema is available on runtime
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
