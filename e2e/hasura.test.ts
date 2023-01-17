import { beforeAll, describe, expect, it } from 'vitest'
import { enumType, fetchClient, variableType } from '../src'
import * as schema from '../schemas/hasura'
import { blob } from 'stream/consumers'

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
    const res = await client.query
      .todos({
        id: true,
        contents: true,
        user: { email: true }
      })
      .run()
    res[0]

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
            _eq: variableType('x')
          }
        },
        _variables: { x: 'uuid' },
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

  it('should work with an enum', async () => {
    const todos = await client.query
      .todos({
        _where: {
          category: { _eq: enumType(schema.Categories_Enum.Essay) }
        },
        contents: true,
        category: true
      })
      .run()

    expect(todos).toMatchInlineSnapshot('[]')
  })
})
