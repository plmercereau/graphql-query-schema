import { Client } from '../src'
import * as schema from './schema'

import { describe, expect, it } from 'vitest'

const client = new Client({
  schema,
  url: 'http://localhost:1337/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'nhost-admin-secret'
  }
})

describe('main', () => {
  it('single todo with all the fields', () => {
    expect(
      client.query.todo({ _id: '6503ef87-d0c2-47a5-80a2-d664a5ae23c1', id: true }).toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "query {
          todo (id: \\"6503ef87-d0c2-47a5-80a2-d664a5ae23c1\\") {
              id
          }
      }"
    `)
  })

  it('single todo', () => {
    expect(
      client.query
        .todo({
          createdAt: true,
          _id: '6503ef87-d0c2-47a5-80a2-d664a5ae23c1'
        })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "query {
          todo (id: \\"6503ef87-d0c2-47a5-80a2-d664a5ae23c1\\") {
              createdAt
          }
      }"
    `)
  })

  it('todo list', () => {
    expect(
      client.query
        .todos({
          createdAt: true,
          contents: true,
          _limit: 2,
          _where: { createdAt: { _lte: new Date(2023, 1, 5).toISOString() } },
          _order_by: [{ createdAt: schema.Order_By.Asc }]
        })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "query {
          todos (limit: 2, where: {createdAt: {_lte: \\"2023-02-04T23:00:00.000Z\\"}}, order_by: [{createdAt: \\"asc\\"}]) {
              createdAt
              contents
          }
      }"
    `)
  })

  it('select a relationship', () => {
    expect(
      client.query.todos({ userId: true, user: { email: true, avatarUrl: true } }).toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "query {
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
    expect(
      client.query
        .todosAggregate({
          aggregate: { count: true },
          nodes: { id: true, createdAt: true, user: { email: true } }
        })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "query {
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
    expect(
      client.mutation
        .insertFile({
          _object: { bucketId: 'dew', name: 'dew' },
          _on_conflict: {
            constraint: schema.Files_Constraint.FilesPkey,
            update_columns: [schema.Files_Update_Column.Name]
          },
          id: true
        })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "mutation {
          insertFile (object: {bucketId: \\"dew\\", name: \\"dew\\"}, on_conflict: {constraint: \\"files_pkey\\", update_columns: [\\"name\\"]}) {
              id
          }
      }"
    `)
  })

  it('multiple inserts mutation', () => {
    expect(
      client.mutation
        .insertFiles({
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
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "mutation {
          insertFiles (objects: [{bucketId: \\"dew\\", name: \\"dew\\"}, {bucketId: \\"dew\\", name: \\"dew\\"}], on_conflict: {constraint: \\"files_pkey\\", update_columns: [\\"name\\"]}) {
              affected_rows
              returning {
                  id
              }
          }
      }"
    `)
  })

  it('single deletion mutation', () => {
    expect(
      client.mutation
        .deleteFile({
          _id: '6503ef87-d0c2-47a5-80a2-d664a5ae23c1',
          id: true
        })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "mutation {
          deleteFile (id: \\"6503ef87-d0c2-47a5-80a2-d664a5ae23c1\\") {
              id
          }
      }"
    `)
  })

  it('multiple deletion mutation', () => {
    expect(
      client.mutation
        .deleteFiles({
          _where: { bucketId: { _eq: 'default' } },
          affected_rows: true
        })
        .toRawGraphQL()
    ).toMatchInlineSnapshot(`
      "mutation {
          deleteFiles (where: {bucketId: {_eq: \\"default\\"}}) {
              affected_rows
          }
      }"
    `)
  })
})
