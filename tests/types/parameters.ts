import schema from '../../schemas/hasura'
import { fetchClient } from '../../src'
const client = fetchClient({ schema, url: '' })

// * Parameters
client.query.todos({
  variables: {
    limit: 1,
    distinct_on: ['category', 'contents'],
    offset: 1,
    order_by: [{ category: 'asc' }],
    where: { _and: [{ id: { _eq: 'abc' } }, { category: { _eq: 'essay' } }] }
  }
})

// * Unexisting parameter
client.query.todos({
  variables: {
    // @ts-expect-error
    invalid: 1
  }
})

// * Invalid parameter type
// @ts-expect-error
client.query.todos('invalid')
client.query.todos({
  variables: {
    // @ts-expect-error
    limit: 'string-instead-of-number'
  }
})

// * Required parameters
// @ts-expect-error
client.query.todo()
// @ts-expect-error
client.query.todo({ variables: {} })
client.query.todo({ variables: { id: 'abc' } })
// @ts-expect-error
client.mutation.insertTodo()

// * Optional parameters
client.query.todos({ variables: {} })
