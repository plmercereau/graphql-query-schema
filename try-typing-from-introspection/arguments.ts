import { TypeRef, NonNullType, ListType, ObjectType, ScalarType } from './introspection'
import { ScalarsOf } from './scalars'
import { SelectSingleType } from './selectors'

export type GenericInput = {
  select?: Record<string, GenericInput | true> | true
}

export type ArgumentsOf<
  I,
  Type extends TypeRef,
  Args,
  Fields = Type extends NonNullType
    ? ArgumentsOf<I, Type['ofType'], Args>
    : Type extends ListType
    ? ArgumentsOf<I, Type['ofType'], Args>
    : Type extends ObjectType
    ?
        | {
            select:
              | {
                  [Field in SelectSingleType<I, Type> extends { fields: readonly any[] }
                    ? SelectSingleType<I, Type>['fields'][number]
                    : never as Field['name']]?: ArgumentsOf<I, Field['type'], Args>
                }
              | true
          }
        | true
    : Type extends ScalarType & { name: keyof ScalarsOf<I> }
    ? ScalarsOf<I>[Type['name']]
    : `MISSING TYPE`
> = (GenericInput | undefined) & Fields
