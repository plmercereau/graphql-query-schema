import SchemaBuilder from '@pothos/core'
import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'

const builder = new SchemaBuilder<{
  Objects: {
    GiraffeStringFact: { factKind: 'string'; fact: string }
    GiraffeNumericFact: { factKind: 'number'; fact: string; value: number }
  }
}>({})

builder.objectType('GiraffeStringFact', {
  fields: (t) => ({
    fact: t.exposeString('fact', {})
  })
})

const GiraffeNumericFact = builder.objectType('GiraffeNumericFact', {
  fields: (t) => ({
    fact: t.exposeString('fact', {}),
    value: t.exposeFloat('value', {})
  })
})

const GiraffeFact = builder.unionType('GiraffeFact', {
  types: ['GiraffeStringFact', GiraffeNumericFact],
  resolveType: (fact) => {
    switch (fact.factKind) {
      case 'number':
        return GiraffeNumericFact
      case 'string':
        return 'GiraffeStringFact'
    }
  }
})

builder.queryField('giraffeFacts', (t) =>
  t.field({
    type: [GiraffeFact],
    resolve: () => {
      const fact1 = {
        factKind: 'string',
        fact: 'A giraffe’s spots are much like human fingerprints. No two individual giraffes have exactly the same pattern'
      } as const

      const fact2 = {
        factKind: 'number',
        fact: 'Top speed (MPH)',
        value: 35
      } as const

      return [fact1, fact2]
    }
  })
)

builder.queryType()

const yoga = createYoga({
  schema: builder.toSchema()
})

const server = createServer(yoga)

server.listen(3000, () => {
  console.log('listening on http://localhost:3000/graphql')
})
