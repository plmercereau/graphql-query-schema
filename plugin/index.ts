import { getIntrospectedSchema, minifyIntrospectionQuery } from '@urql/introspection'

import { plugin as typescriptPlugin } from '@graphql-codegen/typescript'

type Unpromise<T> = T extends Promise<infer U> ? U : T

export const plugin: typeof typescriptPlugin = (schema, documents, config) => {
  // TODO We don't most options until this is considered safe
  const { scalars } = config
  const conf: typeof config = {
    scalars,
    declarationKind: 'type',
    // TODO to be determined: do we want to use native enums, or their string value?
    enumsAsTypes: true
  }
  const minifiedData = minifyIntrospectionQuery(getIntrospectedSchema(schema), {
    // TODO only include what is striclty necessary - the introspection object is big
    includeDirectives: false,
    includeEnums: true,
    includeInputs: false,
    includeScalars: false
  })

  const { prepend, content } = typescriptPlugin(schema, documents, conf) as Unpromise<
    ReturnType<typeof typescriptPlugin>
  >

  // * https://stackoverflow.com/questions/2008279/validate-a-javascript-function-name
  // TODO we should use a stronger way of getting the type and enum names, for instance to  in using the typescript parser
  const types = [
    ...Array.from(content.matchAll(/^export type ([$A-Z_][0-9A-Z_$]*) = {/gim))
    // * Not required if we generate enumns as types
    // ...Array.from(content.matchAll(/^export enum ([$A-Z_][0-9A-Z_$]*) {/gim))
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
