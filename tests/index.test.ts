import { Factory } from '../src'
import * as schema from '../schemas/hasura'
import { print } from 'graphql'
import { describe, expect, it } from 'vitest'

const { query, mutation } = new Factory(schema)

describe('main', () => {
  it('single todo with one field', () => {
    const q = query.todo({ _id: '6503ef87-d0c2-47a5-80a2-d664a5ae23c1', id: true })
    expect(print(q)).toMatchInlineSnapshot(`
      "{
        todo(id: \\"6503ef87-d0c2-47a5-80a2-d664a5ae23c1\\") {
          id
        }
      }"
    `)
  })

  it('single todo', () => {
    const q = query.todo({
      createdAt: true,
      _id: '6503ef87-d0c2-47a5-80a2-d664a5ae23c1'
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
    const q = query.todos({
      createdAt: true,
      contents: true,
      _limit: 2,
      _where: {
        createdAt: { _lte: new Date(2023, 1, 5).toISOString() }
      },
      _order_by: [{ createdAt: schema.Order_By.Asc }]
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
    const q = query.todos({ userId: true, user: { email: true, avatarUrl: true } })
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
    const q = query.todosAggregate({
      aggregate: { count: true },
      nodes: { id: true, createdAt: true, user: { email: true } }
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

  it('single insert mutation', () => {
    const q = mutation.insertFile({
      _object: { bucketId: 'dew', name: 'dew' },
      _on_conflict: {
        constraint: schema.Files_Constraint.FilesPkey,
        update_columns: [schema.Files_Update_Column.Name]
      },
      id: true
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
    const q = mutation.insertFiles({
      _objects: [
        { bucketId: 'dew', name: 'dew' },
        { bucketId: 'dew', name: 'dew' }
      ],
      _on_conflict: {
        constraint: schema.Files_Constraint.FilesPkey,
        update_columns: [schema.Files_Update_Column.Name]
      },
      affected_rows: true,
      returning: {
        id: true
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
    const q = mutation.deleteFile({
      _id: '6503ef87-d0c2-47a5-80a2-d664a5ae23c1',
      id: true
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
    const q = mutation.deleteFiles({
      _where: { bucketId: { _eq: 'default' } },
      affected_rows: true
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
