import { describe, expect, it } from 'vitest'
import { Client } from '../src'
import * as schema from '../schemas/countries'

const client = new Client({
  schema,
  url: 'https://countries.trevorblades.com/graphql'
})

describe('main', () => {
  it('should select Andorra and some details', async () => {
    const result = await client.query
      .countries({
        name: true,
        capital: true,
        continent: { code: true, name: true },
        _filter: { code: { eq: 'AD' } }
      })
      .run()

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "capital": "Andorra la Vella",
          "continent": {
            "code": "EU",
            "name": "Europe",
          },
          "name": "Andorra",
        },
      ]
    `)
  })
})
