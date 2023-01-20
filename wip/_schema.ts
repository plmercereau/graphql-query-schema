export default {
  __schema: {
    queryType: {
      name: 'Query'
    },
    mutationType: null,
    subscriptionType: null,
    types: [
      {
        kind: 'SCALAR',
        name: 'Boolean'
      },
      {
        kind: 'OBJECT',
        name: 'Continent',
        fields: [
          {
            name: 'code',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'countries',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Country',
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'ContinentFilterInput',
        inputFields: [
          {
            name: 'code',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'StringQueryOperatorInput',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'Country',
        fields: [
          {
            name: 'capital',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'code',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'continent',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Continent',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'currency',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'emoji',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'emojiU',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'languages',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Language',
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'native',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'phone',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'states',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'State',
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'CountryFilterInput',
        inputFields: [
          {
            name: 'code',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'StringQueryOperatorInput',
              ofType: null
            }
          },
          {
            name: 'continent',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'StringQueryOperatorInput',
              ofType: null
            }
          },
          {
            name: 'currency',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'StringQueryOperatorInput',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'SCALAR',
        name: 'ID'
      },
      {
        kind: 'OBJECT',
        name: 'Language',
        fields: [
          {
            name: 'code',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'native',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'rtl',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'LanguageFilterInput',
        inputFields: [
          {
            name: 'code',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'StringQueryOperatorInput',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'Query',
        fields: [
          {
            name: '_entities',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'UNION',
                  name: '_Entity',
                  ofType: null
                }
              }
            },
            args: [
              {
                name: 'representations',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: '_Any',
                        ofType: null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: '_service',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: '_Service',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'continent',
            type: {
              kind: 'OBJECT',
              name: 'Continent',
              ofType: null
            },
            args: [
              {
                name: 'code',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'ID',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'continents',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Continent',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'filter',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'ContinentFilterInput',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'countries',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Country',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'filter',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'CountryFilterInput',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'country',
            type: {
              kind: 'OBJECT',
              name: 'Country',
              ofType: null
            },
            args: [
              {
                name: 'code',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'ID',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'language',
            type: {
              kind: 'OBJECT',
              name: 'Language',
              ofType: null
            },
            args: [
              {
                name: 'code',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'ID',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'languages',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Language',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'filter',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'LanguageFilterInput',
                  ofType: null
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'State',
        fields: [
          {
            name: 'code',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'country',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Country',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'SCALAR',
        name: 'String'
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'StringQueryOperatorInput',
        inputFields: [
          {
            name: 'eq',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'glob',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'in',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null
              }
            }
          },
          {
            name: 'ne',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'nin',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null
              }
            }
          },
          {
            name: 'regex',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'SCALAR',
        name: '_Any'
      },
      {
        kind: 'UNION',
        name: '_Entity',
        possibleTypes: [
          {
            kind: 'OBJECT',
            name: 'Continent'
          },
          {
            kind: 'OBJECT',
            name: 'Country'
          },
          {
            kind: 'OBJECT',
            name: 'Language'
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: '_Service',
        fields: [
          {
            name: 'sdl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'SCALAR',
        name: 'Any'
      }
    ],
    directives: []
  }
} as const
