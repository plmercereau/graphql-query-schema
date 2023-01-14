import { VariableType as OriginalVariableType } from 'json-to-graphql-query'
import { MakeOptional } from './type-helpers'

export class VariableType<T extends string> extends OriginalVariableType {
  value: T
  constructor(variable: T) {
    super(variable)
    this.value = variable
  }
}

export const variable = <T extends string>(variable: T): any => new VariableType(variable)

// TODO Arrays
export type VariablesTypes<
  Variables extends { [key: string]: Scalar | `${Scalar}!` } | undefined,
  Scalars extends Record<string, any>,
  Scalar extends string & keyof Scalars
> = MakeOptional<{
  [key in keyof Variables]: Variables[key] extends `${infer S}!`
    ? Scalars[S]
    : Scalars[NonNullable<Variables>[key]] | undefined
}>
