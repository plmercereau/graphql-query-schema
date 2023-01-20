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
  ofType?: null // TODO
  possibleTypes?: Readonly<Array<TypeRef>>
}

export type TypeRef = InputObjectType | ListType | NonNullType | ObjectType | ScalarType | UnionType

export type FieldDefinition = {
  readonly name: string
  readonly args?: ReadonlyArray<{ name: string; type: TypeRef }>
  readonly type: TypeRef
}
