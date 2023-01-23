export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export class Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GiraffeFact = GiraffeNumericFact | GiraffeStringFact;

export class GiraffeNumericFact {
  __typename?: 'GiraffeNumericFact';
  fact: Scalars['String'];
  value: Scalars['Float'];
};

export class GiraffeStringFact {
  __typename?: 'GiraffeStringFact';
  fact: Scalars['String'];
};

export class Query {
  __typename?: 'Query';
  giraffeFacts: Array<GiraffeFact>;
};

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": null,
    "subscriptionType": null,
    "types": [
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
                "name": "Any"
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
                "name": "Any"
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
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
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
        "name": "Any"
      }
    ],
    "directives": []
  }
} as const