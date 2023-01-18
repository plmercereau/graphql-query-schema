import { beforeAll, describe, expect, it } from 'vitest'
import { enumType, fetchClient, variableType } from '../src'
import * as schema from '../schemas/hasura'

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
        select: {
          id: true,
          contents: true,
          user: { select: { email: true } }
        }
      })
      .run()

    const result = await client.mutation
      .insertTodo({
        variables: { object: { contents: 'test', userId } },
        select: {
          contents: true,
          user: { select: { email: true, id: true } }
        }
      })
      .run()

    expect(result.contents).toMatchInlineSnapshot('"test"')
    expect(result.user.id).toEqual(userId)
  })

  it('should insert and remove a todo', async () => {
    const insertResult = await client.mutation
      .insertTodo({
        variables: { object: { contents: 'test', userId } },
        select: {
          id: true,
          contents: true
        }
      })
      .run()

    expect(insertResult.contents).toMatchInlineSnapshot('"test"')
    const deleteResult = await client.mutation
      .deleteTodo({ variables: { id: insertResult.id }, select: { contents: true } })
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
        variables: { object: { contents, userId } },
        select: {
          id: true,
          contents: true
        }
      })
      .run()

    const result = await client.query
      .todos({
        variables: {
          where: {
            id: {
              _eq: variableType('x')
            }
          }
        },
        select: { contents: true },
        _vars: { x: 'uuid' }
      })
      .run({ x: id })
    expect(result).toMatchInlineSnapshot(`
      [
        {
          "contents": "test_variable",
        },
      ]
    `)

    await client.mutation.deleteTodo({ variables: { id }, select: { id: true } }).run()
  })

  it('should work with an enum', async () => {
    const todos = await client.query
      .todos({
        variables: {
          where: {
            category: { _eq: enumType(schema.Categories_Enum.Essay) }
          }
        },
        select: { contents: true, category: true }
      })
      .run()

    expect(todos).toMatchInlineSnapshot('[]')
  })

  it('should work with a wildcard', async () => {
    const todos = await client.query.todos().run()

    expect(Object.keys(todos[0])).toMatchInlineSnapshot(`
      [
        "category",
        "contents",
        "createdAt",
        "id",
        "updatedAt",
        "userId",
      ]
    `)
  })

  it('should work with a nested wildcard', async () => {
    const todos = await client.query
      .todos({
        select: { id: true, user: true }
      })
      .run()
    expect(Object.keys(todos[0])).toMatchInlineSnapshot(`
      [
        "id",
        "user",
      ]
    `)
    expect(Object.keys(todos[0].user)).toMatchInlineSnapshot(`
      [
        "activeMfaType",
        "avatarUrl",
        "createdAt",
        "currentChallenge",
        "defaultRole",
        "disabled",
        "displayName",
        "email",
        "emailVerified",
        "id",
        "isAnonymous",
        "lastSeen",
        "locale",
        "metadata",
        "newEmail",
        "otpHash",
        "otpHashExpiresAt",
        "otpMethodLastUsed",
        "passwordHash",
        "phoneNumber",
        "phoneNumberVerified",
        "ticket",
        "ticketExpiresAt",
        "totpSecret",
        "updatedAt",
      ]
    `)
  })
})
