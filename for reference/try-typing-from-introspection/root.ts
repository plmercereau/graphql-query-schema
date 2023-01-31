import { ObjectType } from './introspection'
import { SelectSingleType } from './selectors'

export type OperationType = 'query' | 'mutation' | 'subscription'

export type SchemaOf<T> = T extends {
  __schema: infer U extends { [key in `${OperationType}Type`]: { name: string } | null }
}
  ? U
  : never

export type RootTypeOf<
  I,
  Operation extends OperationType
> = SchemaOf<I>[`${Operation}Type`] extends { name: string }
  ? SelectSingleType<I, ObjectType<SchemaOf<I>[`${Operation}Type`]['name']>>
  : never

export type RootOperationTypesOf<
  I,
  Operation extends OperationType,
  RootType = RootTypeOf<I, Operation>
> = RootType extends Required<Pick<ObjectType, 'fields'>>
  ? {
      [Item in RootType['fields'][number] as Item['name']]: Item
    }
  : never
