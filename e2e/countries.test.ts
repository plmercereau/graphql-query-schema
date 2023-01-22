import { describe, expect, it } from 'vitest'
import { fetchClient } from '../src'
import * as schema from '../schemas/countries'

const client = fetchClient({
  schema,
  url: 'https://countries.trevorblades.com/graphql'
})

describe('Countries', () => {
  it('should select Andorra and some details', async () => {
    const result = await client.query.countries({
      select: { name: true, capital: true, continent: { select: { code: true, name: true } } },
      variables: { filter: { code: { eq: 'AD' } } }
    })

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
