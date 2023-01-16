import { describe, expect, it } from 'vitest'
import { fetchClient } from '../src'
import * as schema from '../schemas/pothos'

const client = fetchClient({
  schema,
  url: 'http://localhost:3000/graphql'
})

describe('Pothos', () => {
  it('should work with unions', async () => {
    const result = await client.query
      .giraffeFacts({
        _on: {
          GiraffeNumericFact: { value: true },
          GiraffeStringFact: { fact: true }
        }
      })
      .run()
    const res = result.at(0)!
    // TODO fact should not be available here
    res.fact
    if (res.__typename === 'GiraffeNumericFact') {
      res.value
      // TODO fact should not be available here
      res.fact
    }
    expect(result).toMatchInlineSnapshot(`
      [
        {
          "__typename": "GiraffeStringFact",
          "fact": "A giraffe’s spots are much like human fingerprints. No two individual giraffes have exactly the same pattern",
        },
        {
          "__typename": "GiraffeNumericFact",
          "value": 35,
        },
      ]
    `)
  })
})
