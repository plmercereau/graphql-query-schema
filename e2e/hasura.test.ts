import { beforeAll, describe, expect, it } from 'vitest'
import { fetchClient } from '../src'
import schema from '../schemas/hasura'

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
    await client.query.todos({
      select: {
        id: true,
        contents: true,
        user: { select: { email: true } }
      }
    })

    const result = await client.mutation.insertTodo({
      variables: { object: { contents: 'test', userId } },
      select: {
        contents: true,
        user: { select: { email: true, id: true } }
      }
    })

    expect(result.contents).toMatchInlineSnapshot('"test"')
    expect(result.user.id).toEqual(userId)
  })

  it('should insert and remove a todo', async () => {
    const insertResult = await client.mutation.insertTodo({
      variables: { object: { contents: 'test', userId } },
      select: {
        id: true,
        contents: true
      }
    })

    expect(insertResult.contents).toMatchInlineSnapshot('"test"')
    const deleteResult = await client.mutation.deleteTodo({
      variables: { id: insertResult.id },
      select: { contents: true }
    })

    expect(deleteResult).toMatchInlineSnapshot(`
      {
        "contents": "test",
      }
    `)
  })

  it('should work with an enum', async () => {
    const todos = await client.query.todos({
      variables: {
        where: {
          category: { _eq: 'essay' }
        }
      },
      select: { contents: true, category: true }
    })

    expect(todos).toMatchInlineSnapshot('[]')
  })

  it('should work with a wildcard', async () => {
    const todos = await client.query.todos()

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
    const todos = await client.query.todos({
      select: { id: true, user: true }
    })

    expect(Object.keys(todos[0])).toMatchInlineSnapshot(`
      [
        "id",
        "user",
      ]
    `)
    expect(Object.keys(todos[0].user)).toMatchInlineSnapshot(`
      [
        "avatarUrl",
        "createdAt",
        "defaultRole",
        "displayName",
        "email",
        "id",
        "isAnonymous",
        "lastSeen",
        "locale",
        "updatedAt",
      ]
    `)
  })

  it('should work with unions', async () => {
    const result = await client.query.everyone({
      on: {
        Human: true,
        Dog: { select: { name: true, barks: true } },
        Hamster: { select: { name: true, diet: true } }
      }
    })

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "__typename": "Human",
          "firstName": "John",
          "phoneNumber": "123-456-7890",
        },
        {
          "__typename": "Dog",
          "barks": false,
          "name": "Fido",
        },
        {
          "__typename": "Dog",
          "barks": true,
          "name": "Rover",
        },
        {
          "__typename": "Hamster",
          "diet": "HERBIVOROUS",
          "name": "Hammy",
        },
      ]
    `)
  })

  it('should work with interfaces', async () => {
    const result = await client.query.pets({
      select: { name: true, owner: { select: { firstName: true } } },
      on: { Dog: { select: { barks: true } }, Hamster: true }
    })

    const res = result[0]

    res.__typename // "Dog" | "Hamster" | null
    res.name // string
    res.owner.firstName // string

    if (res.__typename === 'Dog') {
      res.__typename // "Dog"
      res.barks // boolean
    }
    if (res.__typename === 'Hamster') {
      res.squeaks // boolean
    }
    expect(result).toMatchInlineSnapshot(`
      [
        {
          "__typename": "Dog",
          "barks": false,
          "name": "Fido",
          "owner": {
            "firstName": "John",
          },
        },
        {
          "__typename": "Dog",
          "barks": true,
          "name": "Rover",
          "owner": {
            "firstName": "John",
          },
        },
        {
          "__typename": "Hamster",
          "diet": "HERBIVOROUS",
          "name": "Hammy",
          "owner": {
            "firstName": "John",
          },
          "squeaks": true,
        },
      ]
    `)
  })
})
