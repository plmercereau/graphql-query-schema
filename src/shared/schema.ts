import { CapitalizeSnakeCase } from './type-helpers'

export type GenericSchema = Record<string, any> & {
  introspection: Introspection
  types: Record<string, any>
}

export type OperationTypes = 'Query' | 'Mutation' | 'Subscription'

type RootOperationName<
  Schema extends GenericSchema,
  OperationType extends OperationTypes,
  IntrospectionSchema = Schema['introspection']['__schema'],
  IntrospectionProperty = `${Uncapitalize<OperationType>}Type`
> = IntrospectionProperty extends keyof IntrospectionSchema
  ? IntrospectionSchema[IntrospectionProperty] extends { name: string }
    ? CapitalizeSnakeCase<IntrospectionSchema[IntrospectionProperty]['name']>
    : never
  : never

export type RootOperation<
  Schema extends GenericSchema,
  OperationType extends OperationTypes,
  OperationName = RootOperationName<Schema, OperationType>
> = OperationName extends string
  ? Schema['types'][OperationName] extends object
    ? Schema['types'][OperationName]
    : never
  : never

export type OperationsOf<Schema extends GenericSchema, OperationType extends OperationTypes> = Omit<
  RootOperation<Schema, OperationType>,
  '__typename' | number | symbol
>

export type FieldArgs<
  Schema extends GenericSchema,
  OperationType extends OperationTypes,
  FieldName extends string,
  Suffix extends string = `${Capitalize<FieldName>}Args`
> = Schema['types'][`Root${Suffix}`] extends object
  ? // * Relay syntax
    Schema['types'][`Root${Suffix}`]
  : // * Standard syntax
    Schema['types'][`${RootOperationName<Schema, OperationType>}${Suffix}`]

export type Introspection = {
  __schema: {
    queryType: { name: string } | null
    mutationType: { name: string } | null
    subscriptionType: { name: string } | null
    types: Readonly<Array<TypeRef>>
    directives: Readonly<[]>
  }
}

export type InputObjectType = {
  kind: 'INPUT_OBJECT'
  name: string
  ofType?: null
  readonly inputFields?: Readonly<Array<FieldDefinition>>
}

export type ListType = {
  kind: 'LIST'
  ofType: TypeRef
}

export type NonNullType = {
  kind: 'NON_NULL'
  ofType: TypeRef
}

export type ObjectType<Name extends string = string> = {
  kind: 'OBJECT'
  name: Name
  interfaces?: Readonly<Array<unknown>>
  ofType?: null
  fields?: Readonly<Array<FieldDefinition>>
}

export type ScalarType = {
  kind: 'SCALAR'
  name: string
}

export type UnionType = {
  kind: 'UNION'
  name: string
  ofType?: null // TODO check if/when this is used
  possibleTypes?: Readonly<Array<TypeRef>>
}

export type EnumType = {
  kind: 'ENUM'
  name: string
  ofType?: null // TODO check if/when this is used
  enumValues?: Readonly<Array<{ name: string }>>
}

// ! TODO  Not implemented yet
export type InterfaceType = {
  kind: 'INTERFACE'
  name: string
  ofType?: null
}

export type TypeRef =
  | InputObjectType
  | ListType
  | NonNullType
  | ObjectType
  | ScalarType
  | UnionType
  | EnumType
  | InterfaceType

export type FieldDefinition = {
  readonly name: string
  readonly args?: ReadonlyArray<{ name: string; type: TypeRef }>
  readonly type: TypeRef
}

export const getIntrospectionType = <S extends GenericSchema, Type extends Partial<TypeRef>>(
  schema: S,
  type: Type
) =>
  schema.introspection.__schema.types.find((t) =>
    Object.entries(type).every(([key, value]) => t[key as keyof TypeRef] === value)
  )

const getRootOperationNodeType = <S extends GenericSchema, OperationType extends OperationTypes>(
  schema: S,
  operationType: OperationType
): ObjectType<OperationType> | undefined => {
  const rootOperationKey = operationType.toLowerCase()

  const name =
    schema.introspection.__schema[
      `${rootOperationKey}Type` as 'queryType' | 'mutationType' | 'subscriptionType'
    ]?.name
  if (!name) {
    return undefined
  }
  const type = getIntrospectionType(schema, { kind: 'OBJECT', name }) as ObjectType<OperationType>
  if (!type) {
    return undefined
  }
  return type
}

export const getRootOperationNames = <
  S extends GenericSchema,
  OperationType extends OperationTypes,
  Operations = OperationsOf<S, OperationType>
>(
  schema: S,
  operationType: OperationType
): Array<keyof Operations> => {
  const type = getRootOperationNodeType(schema, operationType)
  if (!type) {
    return []
  }

  return (type.fields?.map((field) => field.name) as Array<keyof Operations>) ?? []
}

export const getTypeFromRef = (schema: GenericSchema, typeRef?: TypeRef) =>
  schema.introspection.__schema.types.find(
    (t) => 'name' in t && typeRef && 'name' in typeRef && t.name === typeRef.name
  )

export const getFieldTypeRefFromObjectTypeRef = (
  schema: GenericSchema,
  fieldName: String,
  objectTypeRef?: TypeRef
) => {
  const objectType = getTypeFromRef(schema, getConcreteType(schema, objectTypeRef))
  if (objectType?.kind !== 'OBJECT') {
    return undefined
  }
  return objectType?.fields?.find((f) => f.name === fieldName)?.type
}

export const getRootOperationNode = (
  schema: GenericSchema,
  opType: OperationTypes,
  rootOperation: string
) => {
  const rootNode = getRootOperationNodeType(schema, opType)

  if (!rootNode) {
    throw new Error(`Could not find root node for operation type ${opType.toLowerCase()}`)
  }

  const node = rootNode.fields?.find((field) => field.name === rootOperation)
  if (!node) {
    throw new Error(`Could not find root operation ${rootOperation}`)
  }
  return node
}

export const getConcreteType = (schema: GenericSchema, type?: TypeRef): TypeRef | undefined => {
  if (!type) {
    return undefined
  }
  if (type.kind === 'NON_NULL' || type.kind === 'LIST') {
    return getConcreteType(schema, type.ofType)
  }
  return schema.introspection.__schema.types?.find((f) => 'name' in f && f.name === type.name)
}
