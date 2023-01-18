import { AddPrefix, RemovePrefix } from './type-helpers'

export const argsKey = '' as const
export const argPrefix = '_' as const

export const fieldsKey = '' as const

export const variablesKey = 'variables' as const
export const onKey = 'on' as const

type Wrap<T, Key extends string> = { [_ in Key]?: T }
type WithArgPrefix<T extends string> = `${typeof argPrefix}${T}`

export type VariablesKey = WithArgPrefix<typeof variablesKey>
export type OnKey = WithArgPrefix<typeof onKey>

export type AddArgPrefix<T> = AddPrefix<T, typeof argPrefix>

export type WrapArguments<T> = typeof argsKey extends '' ? AddArgPrefix<T> : Wrap<T, typeof argsKey>

export type WrapFields<T> = typeof fieldsKey extends '' ? T : Wrap<T | true, typeof fieldsKey>

export type UnwrapFields<T> = typeof fieldsKey extends ''
  ? T
  : typeof fieldsKey extends keyof T
  ? T[typeof fieldsKey]
  : never

export type WrapOn<T> = typeof onKey extends '' ? AddArgPrefix<T> : Wrap<T, typeof onKey>

export type UnwrapOn<T> = typeof onKey extends ''
  ? T
  : typeof onKey extends keyof T
  ? RemovePrefix<NonNullable<T[typeof onKey]>, typeof onKey>
  : never

export const unwrapParameters = (parameters: any) => {
  if (parameters === true) {
    return true
  }
  if (!parameters || typeof parameters !== 'object') {
    throw new Error('Invalid fields')
  }
  if (Object.keys(parameters).length === 0) {
    return true
  }

  const fields = Object.entries(
    fieldsKey && fieldsKey in parameters ? parameters[fieldsKey] : parameters
  ).reduce<any>((acc, [key, value]) => {
    if (!argPrefix || !key.startsWith(argPrefix)) {
      acc[key] = value
    }
    if (key === `${argPrefix}${onKey}`) {
      acc['__on'] = value
    }
    return acc
  }, {})

  const args =
    argsKey && argsKey in parameters
      ? Object.keys(parameters[argsKey]).reduce<Record<string, unknown>>((acc, key) => {
          acc[key] = parameters[argsKey][key]
          return acc
        }, {})
      : Object.keys(parameters).reduce<Record<string, unknown>>((acc, key) => {
          if (key.startsWith(argPrefix)) {
            acc[key.slice(argPrefix.length)] = parameters[key]
          }
          return acc
        }, {})
  return {
    __args: args,
    ...fields
  }
}
