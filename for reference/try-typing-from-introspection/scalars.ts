import { ScalarType } from './introspection'
import { SelectTypes } from './selectors'

type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>

export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  bigint: number
  bytea: string
  citext: string
  jsonb: JSONValue
  timestamptz: string
  uuid: string
}

export type ScalarsOf<I> = {
  [key in SelectTypes<I, ScalarType>[number] as key['name']]: key['name'] extends keyof Scalars
    ? Scalars[key['name']]
    : any
}
