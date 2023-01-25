import { fetchClient } from '../src'

import schema from '../schemas/hasura'

const client = fetchClient({
  schema,
  url: 'http://localhost:1337/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'nhost-admin-secret'
  }
})

const email = 'bob@bob.com'

const main = async () => {
  let [user] = await client.query.users({
    select: { email: true, id: true, createdAt: true },
    variables: { where: { email: { _eq: email } } }
  })

  if (!user) {
    user = await client.mutation.insertUser({
      variables: { object: { locale: 'en', email } },
      select: { email: true, id: true, createdAt: true }
    })
  }

  console.log('User', user)

  const todos = await client.query.todos({ select: { user: true, contents: true } })
  console.log(`${todos.length} todos`)

  const newTodo = await client.mutation.insertTodo({
    variables: { object: { contents: 'encore', userId: user.id } },
    select: { contents: true, createdAt: true }
  })
  console.log('Inserted todo', newTodo.createdAt)
}

main()
