import { fetchClient } from '../src'
import * as schema from '../schemas/hasura'
const client = fetchClient({
  schema,
  url: 'http://localhost:1337/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'nhost-admin-secret'
  }
})

const main = async () => {
  const todos = await client.query.todos({ select: { user: true, contents: true } })
  console.log(todos.length)
  todos[0].contents
  const user = await client.mutation.insertUser({ select: { email: true, locale: true } })
  console.log(user)
  user.locale

  const todo = await client.mutation.insertTodo({})
  todo.contents
}

main()
