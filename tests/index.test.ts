import * as schema from '../schemas/hasura'
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
      "{
        todo(id: \\"6503ef87-d0c2-47a5-80a2-d664a5ae23c1\\") {
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
      "{
        todo(id: \\"6503ef87-d0c2-47a5-80a2-d664a5ae23c1\\") {
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
        order_by: [{ createdAt: schema.Order_By.Asc }]
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "{
        todos(
          limit: 2
          where: {createdAt: {_lte: \\"2023-02-04T23:00:00.000Z\\"}}
          order_by: [{createdAt: \\"asc\\"}]
        ) {
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
            avatarUrl: true,
            roles_aggregate: { select: { aggregate: { select: { count: true } } } }
          }
        }
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "subscription {
        todos(where: {user: {roles: {role: {_eq: \\"user\\"}}}}) {
          userId
          user {
            email
            avatarUrl
            roles_aggregate {
              aggregate {
                count
              }
            }
          }
        }
      }"
    `)
  })

  it('single insert mutation', () => {
    const q = mutationDocument.insertFile({
      select: {
        id: true
      },
      variables: {
        object: { bucketId: 'dew', name: 'dew' },
        on_conflict: {
          constraint: schema.Files_Constraint.FilesPkey,
          update_columns: [schema.Files_Update_Column.Name]
        }
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "mutation {
        insertFile(
          object: {bucketId: \\"dew\\", name: \\"dew\\"}
          on_conflict: {constraint: \\"files_pkey\\", update_columns: [\\"name\\"]}
        ) {
          id
        }
      }"
    `)
  })

  it('multiple inserts mutation', () => {
    const q = mutationDocument.insertFiles({
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
          { bucketId: 'dew', name: 'dew' },
          { bucketId: 'dew', name: 'dew' }
        ],
        on_conflict: {
          constraint: schema.Files_Constraint.FilesPkey,
          update_columns: [schema.Files_Update_Column.Name]
        }
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "mutation {
        insertFiles(
          objects: [{bucketId: \\"dew\\", name: \\"dew\\"}, {bucketId: \\"dew\\", name: \\"dew\\"}]
          on_conflict: {constraint: \\"files_pkey\\", update_columns: [\\"name\\"]}
        ) {
          affected_rows
          returning {
            id
          }
        }
      }"
    `)
  })

  it('single deletion mutation', () => {
    const q = mutationDocument.deleteFile({
      select: {
        id: true
      },
      variables: {
        id: '6503ef87-d0c2-47a5-80a2-d664a5ae23c1'
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "mutation {
        deleteFile(id: \\"6503ef87-d0c2-47a5-80a2-d664a5ae23c1\\") {
          id
        }
      }"
    `)
  })

  it('multiple deletion mutation', () => {
    const q = mutationDocument.deleteFiles({
      select: {
        affected_rows: true
      },
      variables: {
        where: { bucketId: { _eq: 'default' } }
      }
    })
    expect(print(q)).toMatchInlineSnapshot(`
      "mutation {
        deleteFiles(where: {bucketId: {_eq: \\"default\\"}}) {
          affected_rows
        }
      }"
    `)
  })
})
