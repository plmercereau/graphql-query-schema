import fetch from 'cross-fetch'
import { beforeAll, describe, expect, it } from 'vitest'
import { GraphQLClient } from 'graphql-request'
import schema from '../schemas/hasura'
import { fetchClient } from '../src'

const url = 'http://localhost:1337/v1/graphql'
const headers = {
  'x-hasura-admin-secret': 'nhost-admin-secret'
}

const client = new GraphQLClient(url, { headers })
const { mutationDocument } = fetchClient({ schema, url, headers })

// TODO does not work anymore with the new variables approach
describe.skip('Hasura with graphql-request', () => {
  let userId: string
  beforeAll(async () => {
    const result = await fetch('http://localhost:1337/v1/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: `mutation { insertUser(object: {locale: "en"} ) { id } }`
      })
    })
    const { data } = await result.json()
    userId = data.insertUser.id
  })

  it('should insert a todo', async () => {
    const operation = mutationDocument.insertTodo({
      variables: {
        object: { contents: 'test', userId }
      },
      select: { contents: true, user: { select: { email: true, id: true } } }
    })
    const { insertTodo } = await client.request(operation)

    expect(insertTodo.contents).toMatchInlineSnapshot('"test"')
    expect(insertTodo.user.id).toEqual(userId)
  })

  it('should insert and remove a todo', async () => {
    const operation = mutationDocument.insertTodo({
      variables: { object: { contents: 'test', userId } },
      select: { contents: true, id: true }
    })
    const { insertTodo } = await client.request(operation)
    expect(insertTodo.contents).toMatchInlineSnapshot('"test"')

    const { deleteTodo } = await client.request(
      mutationDocument.deleteTodo({
        variables: { id: insertTodo.id },
        select: { contents: true }
      })
    )

    expect(deleteTodo).toMatchInlineSnapshot(`
      {
        "contents": "test",
      }
    `)
  })
})