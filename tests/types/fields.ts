import schema from '../../schemas/hasura'
import { fetchClient } from '../../src'
const client = fetchClient({ schema, url: '' })

client.query.todos()

client.query.todos({
  select: {
    userId: true,
    // @ts-expect-error
    unexistingProperty: true
  }
})
