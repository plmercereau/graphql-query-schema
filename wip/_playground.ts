import { FullInputFieldsOf } from './input-fields'
import { FullResultOf } from './result'
import { RootOperationTypesOf, RootTypeOf } from './root'
import schema from './_schema'

type CountriesQueryResult = FullResultOf<typeof schema, 'query', 'countries'>
type RootType = RootTypeOf<typeof schema, 'query'>
type QUERY_OPS = RootOperationTypesOf<typeof schema, 'query'>
type FullInputFields = FullInputFieldsOf<typeof schema, 'query', 'countries'>
