import { VariableType as OriginalVariableType } from 'json-to-graphql-query'
import { GenericSchema } from '../src/shared/schema'
import { GraphQLPredicate, MakeOptional, Select } from '../src/shared/type-helpers'

export class VariableType<T extends string> extends OriginalVariableType {
  value: T
  constructor(variable: T) {
    super(variable)
    this.value = variable
  }
}

type ScalarTypes<Schema extends GenericSchema> = Schema['types']['Scalars']
type ArgTypes<Schema extends GenericSchema> = Select<
  {
    [name in keyof Schema['types']]: Schema['types'][name]
  },
  `${string}Args`
>

type TransformGraphQLType<T, GQLType> = GQLType extends `${infer S}!`
  ? NonNullable<TransformGraphQLType<T, S>>
  : GQLType extends `[${infer S}]`
  ? Array<TransformGraphQLType<T, S>>
  : T | undefined

export type VariablesTypes<
  Schema extends GenericSchema,
  Variables extends { [key: string]: ScalarNames | `${ScalarNames}!` | ArgNames | `${ArgNames}!` },
  Scalars extends ScalarTypes<Schema> = ScalarTypes<Schema>,
  ScalarNames extends string & keyof Scalars = string & keyof Scalars,
  Args extends ArgTypes<Schema> = ArgTypes<Schema>,
  ArgNames extends string & keyof Args = string & keyof Args
> = keyof Variables extends string
  ? MakeOptional<{
      [key in keyof Variables]: GraphQLPredicate<Variables[key]> extends keyof Args
        ? TransformGraphQLType<Args[GraphQLPredicate<Variables[key]>], Variables[key]>
        : TransformGraphQLType<Scalars[GraphQLPredicate<Variables[key]>], Variables[key]>
    }>
  : { [key: string]: never }

export type VariablesInputType<
  Schema extends GenericSchema,
  Scalars extends ScalarTypes<Schema> = ScalarTypes<Schema>,
  ScalarNames extends string & keyof Scalars = string & keyof Scalars,
  Args extends ArgTypes<Schema> = ArgTypes<Schema>,
  ArgNames extends string & keyof Args = string & keyof Args
> = { [key: string]: ScalarNames | `${ScalarNames}!` | ArgNames | `${ArgNames}!` }