import { describe, expect, it } from 'vitest'
import { fetchClient } from '../src'
import schema from '../schemas/pothos'

const client = fetchClient({
  schema,
  url: 'http://localhost:3000/graphql'
})

describe('Pothos', () => {
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
