import {
  EnumType,
  FieldDefinition,
  InputObjectType,
  ListType,
  NonNullType,
  ObjectType,
  ScalarType,
  TypeRef
} from './introspection'
import { OperationType, RootOperationTypesOf } from './root'
import { ScalarsOf } from './scalars'
import { SelectSingleType } from './selectors'

// ! not used anymore - for reference only

type TypeAsInputFields<I, Type extends TypeRef> = Type extends InputObjectType
  ? Type extends InputObjectType & Required<Pick<InputObjectType, 'inputFields'>>
    ? {
        [Item in Type['inputFields'][number] as Item['name']]: TypeAsInputFields<I, Item['type']>
      }
    : TypeAsInputFields<I, SelectSingleType<I, Type>>
  : Type extends ListType
  ? Array<TypeAsInputFields<I, Type['ofType']>>
  : Type extends ScalarType & { name: keyof ScalarsOf<I> }
  ? ScalarsOf<I>[Type['name']]
  : Type extends NonNullType
  ? Required<TypeAsInputFields<I, Type['ofType']>>
  : Type extends EnumType
  ? 'TODO ENUMS' // TODO
  : `Unsupported type ${Type['kind']}`

export type FullInputFieldsOf<
  I,
  Operation extends OperationType,
  key extends keyof RootOperationTypesOf<I, Operation>
> = RootOperationTypesOf<I, Operation>[key] extends { args: readonly FieldDefinition[] }
  ? TypeAsInputFields<
      I,
      InputObjectType & {
        name: key
        inputFields: RootOperationTypesOf<I, Operation>[key]['args']
      }
    >
  : never

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
