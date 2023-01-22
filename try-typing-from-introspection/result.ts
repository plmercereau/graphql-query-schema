import { ListType, NonNullType, ObjectType, ScalarType, TypeRef } from './introspection'
import { OperationType, RootOperationTypesOf } from './root'
import { ScalarsOf } from './scalars'
import { ConcreteTypeOf, SelectSingleType } from './selectors'
import { EmptyObject } from 'type-fest'
import { ArgumentsOf, GenericInput } from './arguments'

type SelectResultFrom<
  I,
  Type extends TypeRef,
  Input extends GenericInput
> = Type extends NonNullType
  ? NonNullable<SelectResultFrom<I, Type['ofType'], Input>>
  : Type extends ListType
  ? Array<SelectResultFrom<I, Type['ofType'], Input>> | undefined
  : Type extends ObjectType
  ?
      | {
          [Field in SelectSingleType<I, Type> extends { fields: readonly any[] }
            ? SelectSingleType<I, Type>['fields'][number]
            : never as Input extends undefined | true | { select: true | EmptyObject }
            ? ConcreteTypeOf<I, Field['type']> extends ScalarType
              ? // * Include all scalar fields when no field is selected
                Field['name']
              : never
            : Field['name'] extends keyof Input['select']
            ? // * Only include selected fields
              Field['name']
            : never]: SelectResultFrom<I, Field['type'], Input['select'][Field['name']]>
        }
      | undefined
  : Type extends ScalarType & { name: keyof ScalarsOf<I> }
  ? ScalarsOf<I>[Type['name']] | undefined
  : `MISSING TYPE ${Type['kind']}`

export type ResultOf<
  I,
  Operation extends OperationType,
  key extends keyof RootOperationTypesOf<I, Operation>,
  Input extends ArgumentsOf<I, RootType, {}>,
  RootType extends TypeRef = RootOperationTypesOf<I, Operation>[key] extends { type: TypeRef }
    ? RootOperationTypesOf<I, Operation>[key]['type']
    : never,
  Result = SelectResultFrom<I, RootType, Input>
> = Result
