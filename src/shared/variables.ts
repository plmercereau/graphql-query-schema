import { VariableType as OriginalVariableType } from 'json-to-graphql-query'
import { GraphQLPredicate, MakeOptional, Select } from './type-helpers'
import { GenericSchema } from './types'

export class VariableType<T extends string> extends OriginalVariableType {
  value: T
  constructor(variable: T) {
    super(variable)
    this.value = variable
  }
}

export const variableType = <T extends string>(variable: T): any => new VariableType(variable)

type ScalarTypes<Schema extends GenericSchema> = Schema['Scalars']['prototype']
type ArgTypes<Schema extends GenericSchema> = Select<
  {
    [name in keyof Schema]: Schema[name]['prototype']
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
