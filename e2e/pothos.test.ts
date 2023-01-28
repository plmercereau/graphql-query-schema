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
        Human: { select: { firstName: true } },
        Dog: { select: { name: true, barks: true } },
        Hamster: { select: { name: true, diet: true } }
      },
      select: {}
    })

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "__typename": "Human",
          "firstName": "John",
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
})
