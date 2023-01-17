import { describe, expect, it } from 'vitest'
import { fetchClient } from '../src'
import * as schema from '../schemas/pothos'
import { e } from 'vitest/dist/index-761e769b'

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
    res.__typename

    if (res.__typename === 'GiraffeNumericFact') {
      res.value
    } else {
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
