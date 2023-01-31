import schema from './schemas/hasura'
import { print } from 'graphql'
import { describe, expect, it } from 'vitest'
import { fetchClient } from '../src'
const { queryDocument, mutationDocument, subscriptionDocument } = fetchClient({ schema, url: '' })

describe('main', () => {
  it('single todo with one field', () => {
    const q = queryDocument.todo({
      select: { id: true },
      variables: { id: '6503ef87-d0c2-47a5-80a2-d664a5ae23c1' }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "query ($id: uuid!) {
        todo(id: $id) {
          id
        }
      }"
    `)
  })

  it('single todo', () => {
    const q = queryDocument.todo({
      select: {
        createdAt: true
      },
      variables: {
        id: '6503ef87-d0c2-47a5-80a2-d664a5ae23c1'
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "query ($id: uuid!) {
        todo(id: $id) {
          createdAt
        }
      }"
    `)
  })

  it('todo list', () => {
    const q = queryDocument.todos({
      select: {
        createdAt: true,
        contents: true
      },
      variables: {
        limit: 2,
        where: {
          createdAt: { _lte: new Date(2023, 1, 5).toISOString() }
        },
        order_by: [{ createdAt: 'asc' }]
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "query ($limit: Int, $where: todos_bool_exp, $order_by: [todos_order_by!]) {
        todos(limit: $limit, where: $where, order_by: $order_by) {
          createdAt
          contents
        }
      }"
    `)
  })

  it('select a relationship', () => {
    const q = queryDocument.todos({
      select: {
        userId: true,
        user: {
          select: {
            email: true,
            avatarUrl: true
          }
        }
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "{
        todos {
          userId
          user {
            email
            avatarUrl
          }
        }
      }"
    `)
  })

  it('use an aggregate', () => {
    const q = queryDocument.todosAggregate({
      select: {
        aggregate: { select: { count: true } },
        nodes: { select: { id: true, createdAt: true, user: { select: { email: true } } } }
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "{
        todosAggregate {
          aggregate {
            count
          }
          nodes {
            id
            createdAt
            user {
              email
            }
          }
        }
      }"
    `)
  })

  it('generate a subscription', () => {
    const q = subscriptionDocument.todos({
      variables: {
        where: { user: { roles: { role: { _eq: 'user' } } } }
      },
      select: {
        userId: true,
        user: {
          select: {
            email: true,
            avatarUrl: true
          }
        }
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "subscription ($where: todos_bool_exp) {
        todos(where: $where) {
          userId
          user {
            email
            avatarUrl
          }
        }
      }"
    `)
  })

  it('single insert mutation', () => {
    const q = mutationDocument.insertTodo({
      select: {
        id: true
      },
      variables: {
        object: { id: 'abc', category: 'essay', contents: 'dew' },
        on_conflict: {
          constraint: 'todos_pkey',
          update_columns: ['category', 'contents']
        }
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "mutation ($object: todos_insert_input!, $on_conflict: todos_on_conflict) {
        insertTodo(object: $object, on_conflict: $on_conflict) {
          id
        }
      }"
    `)
  })

  it('multiple inserts mutation', () => {
    const q = mutationDocument.insertTodos({
      select: {
        affected_rows: true,
        returning: {
          select: {
            id: true
          }
        }
      },
      variables: {
        objects: [
          { id: 'abc', category: 'essay', contents: 'dew' },
          { id: 'def', category: 'novel', contents: 'bah' }
        ],
        on_conflict: {
          constraint: 'todos_pkey',
          update_columns: ['category', 'contents']
        }
      }
    })

    expect(print(q)).toMatchInlineSnapshot(`
      "mutation ($objects: [todos_insert_input!]!, $on_conflict: todos_on_conflict) {
        insertTodos(objects: $objects, on_conflict: $on_conflict) {
          affected_rows
          returning {
            id
          }
        }
      }"
    `)
  })

  it('single deletion mutation', () => {
    const q = mutationDocument.deleteTodo({
      select: {
        id: true
      },
      variables: {
        id: '6503ef87-d0c2-47a5-80a2-d664a5ae23c1'
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "mutation ($id: uuid!) {
        deleteTodo(id: $id) {
          id
        }
      }"
    `)
  })

  it('multiple deletion mutation', () => {
    const q = mutationDocument.deleteTodos({
      select: {
        affected_rows: true
      },
      variables: {
        where: { userId: { _eq: 'abc' } }
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "mutation ($where: todos_bool_exp!) {
        deleteTodos(where: $where) {
          affected_rows
        }
      }"
    `)
  })
})