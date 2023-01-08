import fetch from 'cross-fetch'
import { beforeAll, describe, expect, it } from 'vitest'
import { Client } from '../src'
import * as schema from '../schemas/nhost'

const client = new Client({
  schema,
  url: 'http://localhost:1337/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'nhost-admin-secret'
  }
})

describe('main', () => {
  let userId: string
  beforeAll(async () => {
    const result = await client.fetch({
      method: 'POST',
      body: JSON.stringify({
        query: `mutation { insertUser(object: {locale: "en"} ) { id } }`
      })
    })
    const { data } = await result.json()
    userId = data.insertUser.id
  })

  it('should insert a todo', async () => {
    const result = await client.mutation
      .insertTodo({
        _object: { contents: 'test', userId },
        contents: true,
        user: { email: true, id: true }
      })
      .run()
    expect(result.contents).toMatchInlineSnapshot('"test"')
    expect(result.user.id).toEqual(userId)
  })

  it('should insert and remove a todo', async () => {
    const insertResult = await client.mutation
      .insertTodo({
        _object: { contents: 'test', userId },
        id: true,
        contents: true
      })
      .run()

    expect(insertResult.contents).toMatchInlineSnapshot('"test"')
    const deleteResult = await client.mutation
      .deleteTodo({ _id: insertResult.id, contents: true })
      .run()

    expect(deleteResult).toMatchInlineSnapshot(`
      {
        "contents": "test",
      }
    `)
  })
})
