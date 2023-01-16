import { describe, expect, it } from 'vitest'
import { fetchClient } from '../src'
import * as schema from '../schemas/pothos'

const client = fetchClient({
  schema,
  url: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
})

describe.skip('Pothos', () => {
  it('should work with unions', async () => {
    const result = await client.query.giraffeFacts({ fact: true, value: true }).run()
    result.at(0)
    expect(result).toMatchInlineSnapshot(`
      {
        "title": "A New Hope",
      }
    `)
  })
})
