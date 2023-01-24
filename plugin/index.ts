import { getIntrospectedSchema, minifyIntrospectionQuery } from '@urql/introspection'

import { plugin as typescriptPlugin } from '@graphql-codegen/typescript'

type Unpromise<T> = T extends Promise<infer U> ? U : T

export const plugin: typeof typescriptPlugin = (schema, documents, _config) => {
  // * Don't allow the user to set a custom config until this is considered safe
  const conf: typeof _config = { declarationKind: 'type' }
  const minifiedData = minifyIntrospectionQuery(
    minifyIntrospectionQuery(getIntrospectedSchema(schema), {
      includeDirectives: false,
      includeEnums: true,
      includeInputs: true,
      includeScalars: true
    })
  )

  const { prepend, content } = typescriptPlugin(schema, documents, conf) as Unpromise<
    ReturnType<typeof typescriptPlugin>
  >

  // * https://stackoverflow.com/questions/2008279/validate-a-javascript-function-name
  const types = [
    ...Array.from(content.matchAll(/^export type ([$A-Z_][0-9A-Z_$]*) = {/gim)),
    ...Array.from(content.matchAll(/^export enum ([$A-Z_][0-9A-Z_$]*) {/gim))
  ]
    .map(([, name]) => `\n${name}: ${name}`)
    .join(',')

  const result = `
export default {
  introspection: ${JSON.stringify(minifiedData, null, 2).replace(/^/gm, '  ').slice(2)} as const,
  types: {} as {${types.replace(/^/gm, '    ').slice(4)}
  }
}`

  return {
    prepend,
    content: [content, result].join('\n')
  }
}
export default plugin
