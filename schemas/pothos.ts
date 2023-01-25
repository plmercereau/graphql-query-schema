export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GiraffeFact = GiraffeNumericFact | GiraffeStringFact;

export type GiraffeNumericFact = {
  __typename?: 'GiraffeNumericFact';
  fact: Scalars['String'];
  value: Scalars['Float'];
};

export type GiraffeStringFact = {
  __typename?: 'GiraffeStringFact';
  fact: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  giraffeFacts: Array<GiraffeFact>;
};


export default {
  introspection: {
    "__schema": {
      "queryType": {
        "name": "Query"
      },
      "mutationType": null,
      "subscriptionType": null,
      "types": [
        {
          "kind": "SCALAR",
          "name": "Boolean"
        },
        {
          "kind": "SCALAR",
          "name": "Float"
        },
        {
          "kind": "UNION",
          "name": "GiraffeFact",
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "GiraffeNumericFact"
            },
            {
              "kind": "OBJECT",
              "name": "GiraffeStringFact"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "GiraffeNumericFact",
          "fields": [
            {
              "name": "fact",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "value",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "GiraffeStringFact",
          "fields": [
            {
              "name": "fact",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "SCALAR",
          "name": "ID"
        },
        {
          "kind": "SCALAR",
          "name": "Int"
        },
        {
          "kind": "OBJECT",
          "name": "Query",
          "fields": [
            {
              "name": "giraffeFacts",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "UNION",
                      "name": "GiraffeFact",
                      "ofType": null
                    }
                  }
                }
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "SCALAR",
          "name": "String"
        },
        {
          "kind": "SCALAR",
          "name": "Any"
        }
      ],
      "directives": []
    }
  } as const,
  types: {} as {
    Scalars: Scalars,
    GiraffeNumericFact: GiraffeNumericFact,
    GiraffeStringFact: GiraffeStringFact,
    Query: Query
  }
}