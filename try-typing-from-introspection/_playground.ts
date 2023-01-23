import { ResultOf } from './result'
import { RootOperationTypesOf, RootTypeOf } from './root'
import { FullInputFieldsOf, FullResultOf } from './_reference'
import schema from './_schema'

type CountriesQueryResult = FullResultOf<typeof schema, 'query', 'countries'>
type RootType = RootTypeOf<typeof schema, 'query'>
type QUERY_OPS = RootOperationTypesOf<typeof schema, 'query'>
type FullInputFields = FullInputFieldsOf<typeof schema, 'query', 'country'>

type Result = ResultOf<
  typeof schema,
  'query',
  'countries',
  {
    select: {
      continent: {
        select: {
          countries: {
            select: {
              continent: {
                select: {
                  countries: {
                    select: {
                      code: true
                      continent: {
                        select: {
                          countries: {
                            select: {
                              continent: {
                                select: {
                                  countries: {
                                    select: {
                                      languages: {
                                        select: {
                                          code: true
                                          // LIMIT REACHED
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
>
const x = {} as NonNullable<Result>
x[0].continent.countries[0].continent.countries[0].continent
