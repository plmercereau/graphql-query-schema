import { ObjectType, ScalarType, TypeRef } from './introspection'
import { ScalarsOf } from './scalars'
import { ConcreteTypeOf, SelectSingleType } from './selectors'
import { EmptyObject } from 'type-fest'
import { ArgumentsOf, GenericInput } from './arguments'

// TODO change the logic: recurse on Input, not on Type

type SelectResultFrom<
  I,
  Type extends TypeRef,
  Input extends GenericInput,
  ConcreteType extends ConcreteTypeOf<I, Type> = ConcreteTypeOf<I, Type>
> = ConcreteType extends ObjectType
  ?
      | {
          [Field in SelectSingleType<I, ConcreteType> extends { fields: readonly any[] }
            ? SelectSingleType<I, ConcreteType>['fields'][number]
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
  : ConcreteType extends ScalarType & { name: keyof ScalarsOf<I> }
  ? ScalarsOf<I>[ConcreteType['name']] | undefined
  : `MISSING TYPE ${ConcreteType['kind']}`

export type ResultOf<
  I,
  Input extends ArgumentsOf<
    I,
    {
      kind: 'NON_NULL'
      ofType: {
        kind: 'LIST'
        ofType: {
          kind: 'NON_NULL'
          ofType: {
            kind: 'OBJECT'
            name: 'Country'
            ofType: null
          }
        }
      }
    },
    {}
  >
> = SelectResultFrom<
  I,
  {
    kind: 'NON_NULL'
    ofType: {
      kind: 'LIST'
      ofType: {
        kind: 'NON_NULL'
        ofType: {
          kind: 'OBJECT'
          name: 'Country'
          ofType: null
        }
      }
    }
  },
  Input
>
