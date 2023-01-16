import { EnumType } from 'json-to-graphql-query'

export const enumType = <T extends string>(e: T) => new EnumType(e) as unknown as T
