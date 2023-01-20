import {
  FieldDefinition,
  ListType,
  NonNullType,
  ObjectType,
  ScalarType,
  TypeRef
} from './introspection'
import { OperationType, RootOperationTypesOf } from './root'
import { ScalarsOf } from './scalars'
import { SelectSingleType } from './selectors'

type TypeAsResult<I, Type extends TypeRef> = Type extends NonNullType
  ? Required<TypeAsResult<I, NonNullable<Type['ofType']>>>
  : Type extends ListType
  ? Array<TypeAsResult<I, NonNullable<Type['ofType']>>>
  : Type extends ObjectType
  ? {
      [Item in SelectSingleType<
        I,
        ObjectType<Type['name']> & {
          fields: Readonly<Array<FieldDefinition>>
        }
      >['fields'][number] as Item['name']]: TypeAsResult<I, Item['type']>
    }
  : Type extends ScalarType & { name: keyof ScalarsOf<I> }
  ? ScalarsOf<I>[Type['name']]
  : `MISSING TYPE ${Type['kind']}`

export type FullResultOf<
  I,
  Operation extends OperationType,
  key extends keyof RootOperationTypesOf<I, Operation>,
  RootOperationTypes = RootOperationTypesOf<I, Operation>[key]
> = TypeAsResult<
  I,
  RootOperationTypes extends { type: TypeRef } ? RootOperationTypes['type'] : never
>
