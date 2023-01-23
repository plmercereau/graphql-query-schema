import { TypeRef, NonNullType, ListType, ObjectType, ScalarType } from './introspection'
import { ScalarsOf } from './scalars'
import { SelectSingleType } from './selectors'

export type GenericInput = {
  select?: Record<string, GenericInput | true> | true
}

type MAX_RECURSION = 32 // maximum recursion depth
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc
  : Enumerate<N, [...Acc, Acc['length']]>

type Pred = [never, ...Enumerate<MAX_RECURSION>]

export type ArgumentsOf<
  I,
  Type extends TypeRef,
  Args,
  D extends number = MAX_RECURSION,
  Fields = [D] extends [0]
    ? any // Could not recurse any further
    : Type extends NonNullType
    ? ArgumentsOf<I, Type['ofType'], Args, Pred[D]>
    : Type extends ListType
    ? ArgumentsOf<I, Type['ofType'], Args, Pred[D]>
    : Type extends ObjectType
    ?
        | {
            select:
              | {
                  [Field in SelectSingleType<I, Type> extends { fields: readonly any[] }
                    ? SelectSingleType<I, Type>['fields'][number]
                    : never as Field['name']]?: ArgumentsOf<I, Field['type'], Args, Pred[D]>
                }
              | true
          }
        | true
    : Type extends ScalarType & { name: keyof ScalarsOf<I> }
    ? ScalarsOf<I>[Type['name']]
    : `MISSING TYPE`
> = (GenericInput | undefined) & Fields
