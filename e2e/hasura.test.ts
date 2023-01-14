import { beforeAll, describe, expect, it } from 'vitest'
import { fetchClient, variable } from '../src'
import * as schema from '../schemas/hasura'
import {} from 'json-to-graphql-query'
import { VariableType } from '../src/shared'

const client = fetchClient({
  schema,
  url: 'http://localhost:1337/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'nhost-admin-secret'
  }
})

describe('Hasura', () => {
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

  it('should find a todo with a variable', async () => {
    const contents = 'test_variable'
    const { id } = await client.mutation
      .insertTodo({
        _object: { contents, userId },
        id: true,
        contents: true
      })
      .run()

    const result = await client.query
      .todos({
        _where: {
          id: {
            _eq: variable('x')
          }
        },
        __variables: { x: 'uuid' },
        contents: true
      })
      .run({ x: id })
    expect(result).toMatchInlineSnapshot(`
      [
        {
          "contents": "test_variable",
        },
      ]
    `)

    await client.mutation.deleteTodo({ _id: id, id: true }).run()
  })
})
