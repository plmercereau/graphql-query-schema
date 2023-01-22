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
  const todos = await client.query.todos({ select: { user: true } })
  console.log(todos)
}

main()
