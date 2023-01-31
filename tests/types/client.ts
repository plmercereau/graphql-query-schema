import schema from '../../schemas/hasura'
import { fetchClient } from '../../src'
const client = fetchClient({ schema, url: '' })

// * Existing query
client.query.todos()

// * Unexisting query
// @ts-expect-error
client.query.unexistingQuery()

// * Existing mutation
client.mutation.insertTodo({ variables: { object: { id: 'abc' } } })

// * Unexisting mutation
// @ts-expect-error
client.mutation.unexistingMutation()
