import { CodegenConfig, generate } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: [
        {
            'http://localhost:1337/v1/graphql': {
                headers: {
                    'x-hasura-admin-secret': 'nhost-admin-secret'
                }
            }
        }
    ],
    generates: {
        './tests/schema.ts': {
            plugins: [
                'typescript',
                {
                    add: {
                        content: `export type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;\n`
                    }
                }
            ],
            config: {
                scalars: {
                    uuid: 'string',
                    bigint: 'number',
                    citext: 'string',
                    timestamptz: 'string',
                    json: 'JSONValue',
                    jsonb: 'JSONValue'
                },
                // ! This is required to make it work
                declarationKind: 'class'
                // TODO make it work with different naming conventions
            }
        }
    }
}

generate(config, true)
