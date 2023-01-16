import { AddPrefix } from './type-helpers'

export const argPrefix = '_' as const

export type WithArgPrefix<T extends string> = `${typeof argPrefix}${T}`

export type AddArgPrefix<T> = AddPrefix<T, typeof argPrefix>
