export default {
  __schema: {
    queryType: {
      name: 'query_root'
    },
    mutationType: {
      name: 'mutation_root'
    },
    subscriptionType: {
      name: 'subscription_root'
    },
    types: [
      {
        kind: 'SCALAR',
        name: 'Boolean'
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'Boolean_comparison_exp',
        inputFields: [
          {
            name: '_eq',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_gt',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_gte',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_in',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_is_null',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_lt',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_lte',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_neq',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_nin',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            }
          }
        ]
      },
      {
        kind: 'SCALAR',
        name: 'Float'
      },
      {
        kind: 'SCALAR',
        name: 'Int'
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'Int_comparison_exp',
        inputFields: [
          {
            name: '_eq',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: '_gt',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: '_gte',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: '_in',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_is_null',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_lt',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: '_lte',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: '_neq',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: '_nin',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              }
            }
          }
        ]
      },
      {
        kind: 'SCALAR',
        name: 'String'
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'String_comparison_exp',
        inputFields: [
          {
            name: '_eq',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_gt',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_gte',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_ilike',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_in',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_iregex',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_is_null',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_like',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_lt',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_lte',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_neq',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_nilike',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_nin',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_niregex',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_nlike',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_nregex',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_nsimilar',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_regex',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_similar',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authProviderRequests',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'options',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            },
            args: [
              {
                name: 'path',
                type: {
                  kind: 'SCALAR',
                  name: 'String',
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
        name: 'authProviderRequests_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'authProviderRequests_aggregate_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authProviderRequests',
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
        kind: 'OBJECT',
        name: 'authProviderRequests_aggregate_fields',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authProviderRequests_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'authProviderRequests_max_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'authProviderRequests_min_fields',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviderRequests_append_input',
        inputFields: [
          {
            name: 'options',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviderRequests_bool_exp',
        inputFields: [
          {
            name: '_and',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_not',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviderRequests_bool_exp',
              ofType: null
            }
          },
          {
            name: '_or',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'id',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'options',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'jsonb_comparison_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authProviderRequests_constraint',
        enumValues: [
          {
            name: 'provider_requests_pkey'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviderRequests_delete_at_path_input',
        inputFields: [
          {
            name: 'options',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null
                }
              }
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviderRequests_delete_elem_input',
        inputFields: [
          {
            name: 'options',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviderRequests_delete_key_input',
        inputFields: [
          {
            name: 'options',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviderRequests_insert_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'options',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authProviderRequests_max_fields',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'authProviderRequests_min_fields',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'authProviderRequests_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authProviderRequests',
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
        name: 'authProviderRequests_on_conflict',
        inputFields: [
          {
            name: 'constraint',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'authProviderRequests_constraint',
                ofType: null
              }
            }
          },
          {
            name: 'update_columns',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'ENUM',
                    name: 'authProviderRequests_update_column',
                    ofType: null
                  }
                }
              }
            },
            defaultValue: '[]'
          },
          {
            name: 'where',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviderRequests_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviderRequests_order_by',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'options',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviderRequests_pk_columns_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviderRequests_prepend_input',
        inputFields: [
          {
            name: 'options',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authProviderRequests_select_column',
        enumValues: [
          {
            name: 'id'
          },
          {
            name: 'options'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviderRequests_set_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'options',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviderRequests_stream_cursor_input',
        inputFields: [
          {
            name: 'initial_value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authProviderRequests_stream_cursor_value_input',
                ofType: null
              }
            }
          },
          {
            name: 'ordering',
            type: {
              kind: 'ENUM',
              name: 'cursor_ordering',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviderRequests_stream_cursor_value_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'options',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authProviderRequests_update_column',
        enumValues: [
          {
            name: 'id'
          },
          {
            name: 'options'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviderRequests_updates',
        inputFields: [
          {
            name: '_append',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviderRequests_append_input',
              ofType: null
            }
          },
          {
            name: '_delete_at_path',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviderRequests_delete_at_path_input',
              ofType: null
            }
          },
          {
            name: '_delete_elem',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviderRequests_delete_elem_input',
              ofType: null
            }
          },
          {
            name: '_delete_key',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviderRequests_delete_key_input',
              ofType: null
            }
          },
          {
            name: '_prepend',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviderRequests_prepend_input',
              ofType: null
            }
          },
          {
            name: '_set',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviderRequests_set_input',
              ofType: null
            }
          },
          {
            name: 'where',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authProviderRequests_bool_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authProviders',
        fields: [
          {
            name: 'id',
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
            name: 'userProviders',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserProviders',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserProviders_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'userProviders_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserProviders_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserProviders_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_bool_exp',
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
        name: 'authProviders_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'authProviders_aggregate_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authProviders',
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
        kind: 'OBJECT',
        name: 'authProviders_aggregate_fields',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'authProviders_max_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'authProviders_min_fields',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviders_bool_exp',
        inputFields: [
          {
            name: '_and',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviders_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_not',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviders_bool_exp',
              ofType: null
            }
          },
          {
            name: '_or',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviders_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'id',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'userProviders',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_bool_exp',
              ofType: null
            }
          },
          {
            name: 'userProviders_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_aggregate_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authProviders_constraint',
        enumValues: [
          {
            name: 'providers_pkey'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviders_insert_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'userProviders',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_arr_rel_insert_input',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authProviders_max_fields',
        fields: [
          {
            name: 'id',
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
        kind: 'OBJECT',
        name: 'authProviders_min_fields',
        fields: [
          {
            name: 'id',
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
        kind: 'OBJECT',
        name: 'authProviders_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authProviders',
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
        name: 'authProviders_obj_rel_insert_input',
        inputFields: [
          {
            name: 'data',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authProviders_insert_input',
                ofType: null
              }
            }
          },
          {
            name: 'on_conflict',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviders_on_conflict',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviders_on_conflict',
        inputFields: [
          {
            name: 'constraint',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'authProviders_constraint',
                ofType: null
              }
            }
          },
          {
            name: 'update_columns',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'ENUM',
                    name: 'authProviders_update_column',
                    ofType: null
                  }
                }
              }
            },
            defaultValue: '[]'
          },
          {
            name: 'where',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviders_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviders_order_by',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'userProviders_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_aggregate_order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviders_pk_columns_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authProviders_select_column',
        enumValues: [
          {
            name: 'id'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviders_set_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviders_stream_cursor_input',
        inputFields: [
          {
            name: 'initial_value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authProviders_stream_cursor_value_input',
                ofType: null
              }
            }
          },
          {
            name: 'ordering',
            type: {
              kind: 'ENUM',
              name: 'cursor_ordering',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviders_stream_cursor_value_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authProviders_update_column',
        enumValues: [
          {
            name: 'id'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authProviders_updates',
        inputFields: [
          {
            name: '_set',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviders_set_input',
              ofType: null
            }
          },
          {
            name: 'where',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authProviders_bool_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authRefreshTokens',
        fields: [
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'expiresAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'user',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'users',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'authRefreshTokens_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'authRefreshTokens_aggregate_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authRefreshTokens',
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
        name: 'authRefreshTokens_aggregate_bool_exp',
        inputFields: [
          {
            name: 'count',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRefreshTokens_aggregate_bool_exp_count',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRefreshTokens_aggregate_bool_exp_count',
        inputFields: [
          {
            name: 'arguments',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'ENUM',
                  name: 'authRefreshTokens_select_column',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'distinct',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'filter',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRefreshTokens_bool_exp',
              ofType: null
            }
          },
          {
            name: 'predicate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'Int_comparison_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authRefreshTokens_aggregate_fields',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authRefreshTokens_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'authRefreshTokens_max_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'authRefreshTokens_min_fields',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRefreshTokens_aggregate_order_by',
        inputFields: [
          {
            name: 'count',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'max',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRefreshTokens_max_order_by',
              ofType: null
            }
          },
          {
            name: 'min',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRefreshTokens_min_order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRefreshTokens_arr_rel_insert_input',
        inputFields: [
          {
            name: 'data',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authRefreshTokens_insert_input',
                    ofType: null
                  }
                }
              }
            }
          },
          {
            name: 'on_conflict',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRefreshTokens_on_conflict',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRefreshTokens_bool_exp',
        inputFields: [
          {
            name: '_and',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRefreshTokens_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_not',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRefreshTokens_bool_exp',
              ofType: null
            }
          },
          {
            name: '_or',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRefreshTokens_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'expiresAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_bool_exp',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authRefreshTokens_constraint',
        enumValues: [
          {
            name: 'refresh_tokens_pkey'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRefreshTokens_insert_input',
        inputFields: [
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'expiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_obj_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authRefreshTokens_max_fields',
        fields: [
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'expiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRefreshTokens_max_order_by',
        inputFields: [
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'expiresAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authRefreshTokens_min_fields',
        fields: [
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'expiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRefreshTokens_min_order_by',
        inputFields: [
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'expiresAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authRefreshTokens_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authRefreshTokens',
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
        name: 'authRefreshTokens_on_conflict',
        inputFields: [
          {
            name: 'constraint',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'authRefreshTokens_constraint',
                ofType: null
              }
            }
          },
          {
            name: 'update_columns',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'ENUM',
                    name: 'authRefreshTokens_update_column',
                    ofType: null
                  }
                }
              }
            },
            defaultValue: '[]'
          },
          {
            name: 'where',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRefreshTokens_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRefreshTokens_order_by',
        inputFields: [
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'expiresAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_order_by',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRefreshTokens_pk_columns_input',
        inputFields: [
          {
            name: 'refreshToken',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authRefreshTokens_select_column',
        enumValues: [
          {
            name: 'createdAt'
          },
          {
            name: 'expiresAt'
          },
          {
            name: 'refreshToken'
          },
          {
            name: 'userId'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRefreshTokens_set_input',
        inputFields: [
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'expiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRefreshTokens_stream_cursor_input',
        inputFields: [
          {
            name: 'initial_value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authRefreshTokens_stream_cursor_value_input',
                ofType: null
              }
            }
          },
          {
            name: 'ordering',
            type: {
              kind: 'ENUM',
              name: 'cursor_ordering',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRefreshTokens_stream_cursor_value_input',
        inputFields: [
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'expiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authRefreshTokens_update_column',
        enumValues: [
          {
            name: 'createdAt'
          },
          {
            name: 'expiresAt'
          },
          {
            name: 'refreshToken'
          },
          {
            name: 'userId'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRefreshTokens_updates',
        inputFields: [
          {
            name: '_set',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRefreshTokens_set_input',
              ofType: null
            }
          },
          {
            name: 'where',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authRefreshTokens_bool_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authRoles',
        fields: [
          {
            name: 'role',
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
            name: 'userRoles',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserRoles',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserRoles_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'userRoles_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserRoles_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserRoles_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'usersByDefaultRole',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'users',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'users_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'users_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'usersByDefaultRole_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'users_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'users_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'users_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_bool_exp',
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
        name: 'authRoles_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'authRoles_aggregate_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authRoles',
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
        kind: 'OBJECT',
        name: 'authRoles_aggregate_fields',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'authRoles_max_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'authRoles_min_fields',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRoles_bool_exp',
        inputFields: [
          {
            name: '_and',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRoles_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_not',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRoles_bool_exp',
              ofType: null
            }
          },
          {
            name: '_or',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRoles_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'role',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'userRoles',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_bool_exp',
              ofType: null
            }
          },
          {
            name: 'userRoles_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_aggregate_bool_exp',
              ofType: null
            }
          },
          {
            name: 'usersByDefaultRole',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_bool_exp',
              ofType: null
            }
          },
          {
            name: 'usersByDefaultRole_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_aggregate_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authRoles_constraint',
        enumValues: [
          {
            name: 'roles_pkey'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRoles_insert_input',
        inputFields: [
          {
            name: 'role',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'userRoles',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_arr_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'usersByDefaultRole',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_arr_rel_insert_input',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authRoles_max_fields',
        fields: [
          {
            name: 'role',
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
        kind: 'OBJECT',
        name: 'authRoles_min_fields',
        fields: [
          {
            name: 'role',
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
        kind: 'OBJECT',
        name: 'authRoles_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authRoles',
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
        name: 'authRoles_obj_rel_insert_input',
        inputFields: [
          {
            name: 'data',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authRoles_insert_input',
                ofType: null
              }
            }
          },
          {
            name: 'on_conflict',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRoles_on_conflict',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRoles_on_conflict',
        inputFields: [
          {
            name: 'constraint',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'authRoles_constraint',
                ofType: null
              }
            }
          },
          {
            name: 'update_columns',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'ENUM',
                    name: 'authRoles_update_column',
                    ofType: null
                  }
                }
              }
            },
            defaultValue: '[]'
          },
          {
            name: 'where',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRoles_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRoles_order_by',
        inputFields: [
          {
            name: 'role',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'userRoles_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_aggregate_order_by',
              ofType: null
            }
          },
          {
            name: 'usersByDefaultRole_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_aggregate_order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRoles_pk_columns_input',
        inputFields: [
          {
            name: 'role',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authRoles_select_column',
        enumValues: [
          {
            name: 'role'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRoles_set_input',
        inputFields: [
          {
            name: 'role',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRoles_stream_cursor_input',
        inputFields: [
          {
            name: 'initial_value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authRoles_stream_cursor_value_input',
                ofType: null
              }
            }
          },
          {
            name: 'ordering',
            type: {
              kind: 'ENUM',
              name: 'cursor_ordering',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRoles_stream_cursor_value_input',
        inputFields: [
          {
            name: 'role',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authRoles_update_column',
        enumValues: [
          {
            name: 'role'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authRoles_updates',
        inputFields: [
          {
            name: '_set',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRoles_set_input',
              ofType: null
            }
          },
          {
            name: 'where',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authRoles_bool_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserProviders',
        fields: [
          {
            name: 'accessToken',
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
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'provider',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authProviders',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'providerId',
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
            name: 'providerUserId',
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
            name: 'refreshToken',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'user',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'users',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'authUserProviders_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'authUserProviders_aggregate_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserProviders',
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
        name: 'authUserProviders_aggregate_bool_exp',
        inputFields: [
          {
            name: 'count',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_aggregate_bool_exp_count',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserProviders_aggregate_bool_exp_count',
        inputFields: [
          {
            name: 'arguments',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'ENUM',
                  name: 'authUserProviders_select_column',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'distinct',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'filter',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_bool_exp',
              ofType: null
            }
          },
          {
            name: 'predicate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'Int_comparison_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserProviders_aggregate_fields',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'authUserProviders_max_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'authUserProviders_min_fields',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserProviders_aggregate_order_by',
        inputFields: [
          {
            name: 'count',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'max',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_max_order_by',
              ofType: null
            }
          },
          {
            name: 'min',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_min_order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserProviders_arr_rel_insert_input',
        inputFields: [
          {
            name: 'data',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserProviders_insert_input',
                    ofType: null
                  }
                }
              }
            }
          },
          {
            name: 'on_conflict',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_on_conflict',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserProviders_bool_exp',
        inputFields: [
          {
            name: '_and',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_not',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_bool_exp',
              ofType: null
            }
          },
          {
            name: '_or',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'accessToken',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'provider',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviders_bool_exp',
              ofType: null
            }
          },
          {
            name: 'providerId',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'providerUserId',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_bool_exp',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authUserProviders_constraint',
        enumValues: [
          {
            name: 'user_providers_pkey'
          },
          {
            name: 'user_providers_provider_id_provider_user_id_key'
          },
          {
            name: 'user_providers_user_id_provider_id_key'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserProviders_insert_input',
        inputFields: [
          {
            name: 'accessToken',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'provider',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviders_obj_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'providerId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'providerUserId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_obj_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserProviders_max_fields',
        fields: [
          {
            name: 'accessToken',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'providerId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'providerUserId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserProviders_max_order_by',
        inputFields: [
          {
            name: 'accessToken',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'providerId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'providerUserId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserProviders_min_fields',
        fields: [
          {
            name: 'accessToken',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'providerId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'providerUserId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserProviders_min_order_by',
        inputFields: [
          {
            name: 'accessToken',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'providerId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'providerUserId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserProviders_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserProviders',
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
        name: 'authUserProviders_on_conflict',
        inputFields: [
          {
            name: 'constraint',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'authUserProviders_constraint',
                ofType: null
              }
            }
          },
          {
            name: 'update_columns',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'ENUM',
                    name: 'authUserProviders_update_column',
                    ofType: null
                  }
                }
              }
            },
            defaultValue: '[]'
          },
          {
            name: 'where',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserProviders_order_by',
        inputFields: [
          {
            name: 'accessToken',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'provider',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authProviders_order_by',
              ofType: null
            }
          },
          {
            name: 'providerId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'providerUserId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_order_by',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserProviders_pk_columns_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authUserProviders_select_column',
        enumValues: [
          {
            name: 'accessToken'
          },
          {
            name: 'createdAt'
          },
          {
            name: 'id'
          },
          {
            name: 'providerId'
          },
          {
            name: 'providerUserId'
          },
          {
            name: 'refreshToken'
          },
          {
            name: 'updatedAt'
          },
          {
            name: 'userId'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserProviders_set_input',
        inputFields: [
          {
            name: 'accessToken',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'providerId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'providerUserId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserProviders_stream_cursor_input',
        inputFields: [
          {
            name: 'initial_value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authUserProviders_stream_cursor_value_input',
                ofType: null
              }
            }
          },
          {
            name: 'ordering',
            type: {
              kind: 'ENUM',
              name: 'cursor_ordering',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserProviders_stream_cursor_value_input',
        inputFields: [
          {
            name: 'accessToken',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'providerId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'providerUserId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'refreshToken',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authUserProviders_update_column',
        enumValues: [
          {
            name: 'accessToken'
          },
          {
            name: 'createdAt'
          },
          {
            name: 'id'
          },
          {
            name: 'providerId'
          },
          {
            name: 'providerUserId'
          },
          {
            name: 'refreshToken'
          },
          {
            name: 'updatedAt'
          },
          {
            name: 'userId'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserProviders_updates',
        inputFields: [
          {
            name: '_set',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_set_input',
              ofType: null
            }
          },
          {
            name: 'where',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authUserProviders_bool_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserRoles',
        fields: [
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'role',
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
            name: 'roleByRole',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authRoles',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'user',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'users',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'authUserRoles_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'authUserRoles_aggregate_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserRoles',
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
        name: 'authUserRoles_aggregate_bool_exp',
        inputFields: [
          {
            name: 'count',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_aggregate_bool_exp_count',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserRoles_aggregate_bool_exp_count',
        inputFields: [
          {
            name: 'arguments',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'ENUM',
                  name: 'authUserRoles_select_column',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'distinct',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'filter',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_bool_exp',
              ofType: null
            }
          },
          {
            name: 'predicate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'Int_comparison_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserRoles_aggregate_fields',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'authUserRoles_max_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'authUserRoles_min_fields',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserRoles_aggregate_order_by',
        inputFields: [
          {
            name: 'count',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'max',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_max_order_by',
              ofType: null
            }
          },
          {
            name: 'min',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_min_order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserRoles_arr_rel_insert_input',
        inputFields: [
          {
            name: 'data',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserRoles_insert_input',
                    ofType: null
                  }
                }
              }
            }
          },
          {
            name: 'on_conflict',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_on_conflict',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserRoles_bool_exp',
        inputFields: [
          {
            name: '_and',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_not',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_bool_exp',
              ofType: null
            }
          },
          {
            name: '_or',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'role',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'roleByRole',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRoles_bool_exp',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_bool_exp',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authUserRoles_constraint',
        enumValues: [
          {
            name: 'user_roles_pkey'
          },
          {
            name: 'user_roles_user_id_role_key'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserRoles_insert_input',
        inputFields: [
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'role',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'roleByRole',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRoles_obj_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_obj_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserRoles_max_fields',
        fields: [
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'role',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserRoles_max_order_by',
        inputFields: [
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'role',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserRoles_min_fields',
        fields: [
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'role',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserRoles_min_order_by',
        inputFields: [
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'role',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserRoles_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserRoles',
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
        name: 'authUserRoles_on_conflict',
        inputFields: [
          {
            name: 'constraint',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'authUserRoles_constraint',
                ofType: null
              }
            }
          },
          {
            name: 'update_columns',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'ENUM',
                    name: 'authUserRoles_update_column',
                    ofType: null
                  }
                }
              }
            },
            defaultValue: '[]'
          },
          {
            name: 'where',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserRoles_order_by',
        inputFields: [
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'role',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'roleByRole',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRoles_order_by',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_order_by',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserRoles_pk_columns_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authUserRoles_select_column',
        enumValues: [
          {
            name: 'createdAt'
          },
          {
            name: 'id'
          },
          {
            name: 'role'
          },
          {
            name: 'userId'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserRoles_set_input',
        inputFields: [
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'role',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserRoles_stream_cursor_input',
        inputFields: [
          {
            name: 'initial_value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authUserRoles_stream_cursor_value_input',
                ofType: null
              }
            }
          },
          {
            name: 'ordering',
            type: {
              kind: 'ENUM',
              name: 'cursor_ordering',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserRoles_stream_cursor_value_input',
        inputFields: [
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'role',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authUserRoles_update_column',
        enumValues: [
          {
            name: 'createdAt'
          },
          {
            name: 'id'
          },
          {
            name: 'role'
          },
          {
            name: 'userId'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserRoles_updates',
        inputFields: [
          {
            name: '_set',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_set_input',
              ofType: null
            }
          },
          {
            name: 'where',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authUserRoles_bool_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys',
        fields: [
          {
            name: 'counter',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'bigint',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'credentialId',
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
            name: 'credentialPublicKey',
            type: {
              kind: 'SCALAR',
              name: 'bytea',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'nickname',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'transports',
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
            name: 'user',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'users',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_aggregate_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserSecurityKeys',
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
        name: 'authUserSecurityKeys_aggregate_bool_exp',
        inputFields: [
          {
            name: 'count',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_aggregate_bool_exp_count',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_aggregate_bool_exp_count',
        inputFields: [
          {
            name: 'arguments',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'ENUM',
                  name: 'authUserSecurityKeys_select_column',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'distinct',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'filter',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_bool_exp',
              ofType: null
            }
          },
          {
            name: 'predicate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'Int_comparison_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys_aggregate_fields',
        fields: [
          {
            name: 'avg',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_avg_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserSecurityKeys_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_max_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_min_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'stddev',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_stddev_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'stddev_pop',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_stddev_pop_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'stddev_samp',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_stddev_samp_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'sum',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_sum_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'var_pop',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_var_pop_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'var_samp',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_var_samp_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'variance',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_variance_fields',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_aggregate_order_by',
        inputFields: [
          {
            name: 'avg',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_avg_order_by',
              ofType: null
            }
          },
          {
            name: 'count',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'max',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_max_order_by',
              ofType: null
            }
          },
          {
            name: 'min',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_min_order_by',
              ofType: null
            }
          },
          {
            name: 'stddev',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_stddev_order_by',
              ofType: null
            }
          },
          {
            name: 'stddev_pop',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_stddev_pop_order_by',
              ofType: null
            }
          },
          {
            name: 'stddev_samp',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_stddev_samp_order_by',
              ofType: null
            }
          },
          {
            name: 'sum',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_sum_order_by',
              ofType: null
            }
          },
          {
            name: 'var_pop',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_var_pop_order_by',
              ofType: null
            }
          },
          {
            name: 'var_samp',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_var_samp_order_by',
              ofType: null
            }
          },
          {
            name: 'variance',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_variance_order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_arr_rel_insert_input',
        inputFields: [
          {
            name: 'data',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserSecurityKeys_insert_input',
                    ofType: null
                  }
                }
              }
            }
          },
          {
            name: 'on_conflict',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_on_conflict',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys_avg_fields',
        fields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_avg_order_by',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_bool_exp',
        inputFields: [
          {
            name: '_and',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_not',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_bool_exp',
              ofType: null
            }
          },
          {
            name: '_or',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'counter',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'bigint_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'credentialId',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'credentialPublicKey',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'bytea_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'nickname',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'transports',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_bool_exp',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authUserSecurityKeys_constraint',
        enumValues: [
          {
            name: 'user_security_key_credential_id_key'
          },
          {
            name: 'user_security_keys_pkey'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_inc_input',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'bigint',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_insert_input',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'bigint',
              ofType: null
            }
          },
          {
            name: 'credentialId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'credentialPublicKey',
            type: {
              kind: 'SCALAR',
              name: 'bytea',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'nickname',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'transports',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_obj_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys_max_fields',
        fields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'bigint',
              ofType: null
            },
            args: []
          },
          {
            name: 'credentialId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'nickname',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'transports',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_max_order_by',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'credentialId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'nickname',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'transports',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys_min_fields',
        fields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'bigint',
              ofType: null
            },
            args: []
          },
          {
            name: 'credentialId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'nickname',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'transports',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_min_order_by',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'credentialId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'nickname',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'transports',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserSecurityKeys',
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
        name: 'authUserSecurityKeys_on_conflict',
        inputFields: [
          {
            name: 'constraint',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'authUserSecurityKeys_constraint',
                ofType: null
              }
            }
          },
          {
            name: 'update_columns',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'ENUM',
                    name: 'authUserSecurityKeys_update_column',
                    ofType: null
                  }
                }
              }
            },
            defaultValue: '[]'
          },
          {
            name: 'where',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_order_by',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'credentialId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'credentialPublicKey',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'nickname',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'transports',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_order_by',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_pk_columns_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authUserSecurityKeys_select_column',
        enumValues: [
          {
            name: 'counter'
          },
          {
            name: 'credentialId'
          },
          {
            name: 'credentialPublicKey'
          },
          {
            name: 'id'
          },
          {
            name: 'nickname'
          },
          {
            name: 'transports'
          },
          {
            name: 'userId'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_set_input',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'bigint',
              ofType: null
            }
          },
          {
            name: 'credentialId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'credentialPublicKey',
            type: {
              kind: 'SCALAR',
              name: 'bytea',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'nickname',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'transports',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys_stddev_fields',
        fields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_stddev_order_by',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys_stddev_pop_fields',
        fields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_stddev_pop_order_by',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys_stddev_samp_fields',
        fields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_stddev_samp_order_by',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_stream_cursor_input',
        inputFields: [
          {
            name: 'initial_value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authUserSecurityKeys_stream_cursor_value_input',
                ofType: null
              }
            }
          },
          {
            name: 'ordering',
            type: {
              kind: 'ENUM',
              name: 'cursor_ordering',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_stream_cursor_value_input',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'bigint',
              ofType: null
            }
          },
          {
            name: 'credentialId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'credentialPublicKey',
            type: {
              kind: 'SCALAR',
              name: 'bytea',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'nickname',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'transports',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys_sum_fields',
        fields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'bigint',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_sum_order_by',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'authUserSecurityKeys_update_column',
        enumValues: [
          {
            name: 'counter'
          },
          {
            name: 'credentialId'
          },
          {
            name: 'credentialPublicKey'
          },
          {
            name: 'id'
          },
          {
            name: 'nickname'
          },
          {
            name: 'transports'
          },
          {
            name: 'userId'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_updates',
        inputFields: [
          {
            name: '_inc',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_inc_input',
              ofType: null
            }
          },
          {
            name: '_set',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_set_input',
              ofType: null
            }
          },
          {
            name: 'where',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'authUserSecurityKeys_bool_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys_var_pop_fields',
        fields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_var_pop_order_by',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys_var_samp_fields',
        fields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_var_samp_order_by',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'authUserSecurityKeys_variance_fields',
        fields: [
          {
            name: 'counter',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'authUserSecurityKeys_variance_order_by',
        inputFields: [
          {
            name: 'counter',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'SCALAR',
        name: 'bigint'
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'bigint_comparison_exp',
        inputFields: [
          {
            name: '_eq',
            type: {
              kind: 'SCALAR',
              name: 'bigint',
              ofType: null
            }
          },
          {
            name: '_gt',
            type: {
              kind: 'SCALAR',
              name: 'bigint',
              ofType: null
            }
          },
          {
            name: '_gte',
            type: {
              kind: 'SCALAR',
              name: 'bigint',
              ofType: null
            }
          },
          {
            name: '_in',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'bigint',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_is_null',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_lt',
            type: {
              kind: 'SCALAR',
              name: 'bigint',
              ofType: null
            }
          },
          {
            name: '_lte',
            type: {
              kind: 'SCALAR',
              name: 'bigint',
              ofType: null
            }
          },
          {
            name: '_neq',
            type: {
              kind: 'SCALAR',
              name: 'bigint',
              ofType: null
            }
          },
          {
            name: '_nin',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'bigint',
                  ofType: null
                }
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'buckets',
        fields: [
          {
            name: 'cacheControl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'downloadExpiration',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'files',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'files',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'files_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'files_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'files_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'files_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'files_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'files_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'id',
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
            name: 'maxUploadFileSize',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'presignedUrlsEnabled',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'buckets_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'buckets_aggregate_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'buckets',
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
        kind: 'OBJECT',
        name: 'buckets_aggregate_fields',
        fields: [
          {
            name: 'avg',
            type: {
              kind: 'OBJECT',
              name: 'buckets_avg_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'buckets_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'buckets_max_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'buckets_min_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'stddev',
            type: {
              kind: 'OBJECT',
              name: 'buckets_stddev_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'stddev_pop',
            type: {
              kind: 'OBJECT',
              name: 'buckets_stddev_pop_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'stddev_samp',
            type: {
              kind: 'OBJECT',
              name: 'buckets_stddev_samp_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'sum',
            type: {
              kind: 'OBJECT',
              name: 'buckets_sum_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'var_pop',
            type: {
              kind: 'OBJECT',
              name: 'buckets_var_pop_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'var_samp',
            type: {
              kind: 'OBJECT',
              name: 'buckets_var_samp_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'variance',
            type: {
              kind: 'OBJECT',
              name: 'buckets_variance_fields',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'buckets_avg_fields',
        fields: [
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'buckets_bool_exp',
        inputFields: [
          {
            name: '_and',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'buckets_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_not',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'buckets_bool_exp',
              ofType: null
            }
          },
          {
            name: '_or',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'buckets_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'cacheControl',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'downloadExpiration',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'Int_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'files',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_bool_exp',
              ofType: null
            }
          },
          {
            name: 'files_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_aggregate_bool_exp',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'Int_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'Int_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'presignedUrlsEnabled',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'Boolean_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'buckets_constraint',
        enumValues: [
          {
            name: 'buckets_pkey'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'buckets_inc_input',
        inputFields: [
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'buckets_insert_input',
        inputFields: [
          {
            name: 'cacheControl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'files',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_arr_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'presignedUrlsEnabled',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'buckets_max_fields',
        fields: [
          {
            name: 'cacheControl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            },
            args: []
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'buckets_min_fields',
        fields: [
          {
            name: 'cacheControl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            },
            args: []
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'buckets_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'buckets',
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
        name: 'buckets_obj_rel_insert_input',
        inputFields: [
          {
            name: 'data',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'buckets_insert_input',
                ofType: null
              }
            }
          },
          {
            name: 'on_conflict',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'buckets_on_conflict',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'buckets_on_conflict',
        inputFields: [
          {
            name: 'constraint',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'buckets_constraint',
                ofType: null
              }
            }
          },
          {
            name: 'update_columns',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'ENUM',
                    name: 'buckets_update_column',
                    ofType: null
                  }
                }
              }
            },
            defaultValue: '[]'
          },
          {
            name: 'where',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'buckets_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'buckets_order_by',
        inputFields: [
          {
            name: 'cacheControl',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'downloadExpiration',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'files_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_aggregate_order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'presignedUrlsEnabled',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'buckets_pk_columns_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'buckets_select_column',
        enumValues: [
          {
            name: 'cacheControl'
          },
          {
            name: 'createdAt'
          },
          {
            name: 'downloadExpiration'
          },
          {
            name: 'id'
          },
          {
            name: 'maxUploadFileSize'
          },
          {
            name: 'minUploadFileSize'
          },
          {
            name: 'presignedUrlsEnabled'
          },
          {
            name: 'updatedAt'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'buckets_set_input',
        inputFields: [
          {
            name: 'cacheControl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'presignedUrlsEnabled',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'buckets_stddev_fields',
        fields: [
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'buckets_stddev_pop_fields',
        fields: [
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'buckets_stddev_samp_fields',
        fields: [
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'buckets_stream_cursor_input',
        inputFields: [
          {
            name: 'initial_value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'buckets_stream_cursor_value_input',
                ofType: null
              }
            }
          },
          {
            name: 'ordering',
            type: {
              kind: 'ENUM',
              name: 'cursor_ordering',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'buckets_stream_cursor_value_input',
        inputFields: [
          {
            name: 'cacheControl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'presignedUrlsEnabled',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'buckets_sum_fields',
        fields: [
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            },
            args: []
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            },
            args: []
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'ENUM',
        name: 'buckets_update_column',
        enumValues: [
          {
            name: 'cacheControl'
          },
          {
            name: 'createdAt'
          },
          {
            name: 'downloadExpiration'
          },
          {
            name: 'id'
          },
          {
            name: 'maxUploadFileSize'
          },
          {
            name: 'minUploadFileSize'
          },
          {
            name: 'presignedUrlsEnabled'
          },
          {
            name: 'updatedAt'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'buckets_updates',
        inputFields: [
          {
            name: '_inc',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'buckets_inc_input',
              ofType: null
            }
          },
          {
            name: '_set',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'buckets_set_input',
              ofType: null
            }
          },
          {
            name: 'where',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'buckets_bool_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'buckets_var_pop_fields',
        fields: [
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'buckets_var_samp_fields',
        fields: [
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'buckets_variance_fields',
        fields: [
          {
            name: 'downloadExpiration',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'maxUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          },
          {
            name: 'minUploadFileSize',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'SCALAR',
        name: 'bytea'
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'bytea_comparison_exp',
        inputFields: [
          {
            name: '_eq',
            type: {
              kind: 'SCALAR',
              name: 'bytea',
              ofType: null
            }
          },
          {
            name: '_gt',
            type: {
              kind: 'SCALAR',
              name: 'bytea',
              ofType: null
            }
          },
          {
            name: '_gte',
            type: {
              kind: 'SCALAR',
              name: 'bytea',
              ofType: null
            }
          },
          {
            name: '_in',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'bytea',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_is_null',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_lt',
            type: {
              kind: 'SCALAR',
              name: 'bytea',
              ofType: null
            }
          },
          {
            name: '_lte',
            type: {
              kind: 'SCALAR',
              name: 'bytea',
              ofType: null
            }
          },
          {
            name: '_neq',
            type: {
              kind: 'SCALAR',
              name: 'bytea',
              ofType: null
            }
          },
          {
            name: '_nin',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'bytea',
                  ofType: null
                }
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'categories',
        fields: [
          {
            name: 'comment',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'value',
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
        kind: 'OBJECT',
        name: 'categories_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'categories_aggregate_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'categories',
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
        kind: 'OBJECT',
        name: 'categories_aggregate_fields',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'categories_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'categories_max_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'categories_min_fields',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'categories_bool_exp',
        inputFields: [
          {
            name: '_and',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'categories_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_not',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'categories_bool_exp',
              ofType: null
            }
          },
          {
            name: '_or',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'categories_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'comment',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'value',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'categories_constraint',
        enumValues: [
          {
            name: 'categories_pkey'
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'categories_enum',
        enumValues: [
          {
            name: 'essay'
          },
          {
            name: 'novel'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'categories_enum_comparison_exp',
        inputFields: [
          {
            name: '_eq',
            type: {
              kind: 'ENUM',
              name: 'categories_enum',
              ofType: null
            }
          },
          {
            name: '_in',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'ENUM',
                  name: 'categories_enum',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_is_null',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_neq',
            type: {
              kind: 'ENUM',
              name: 'categories_enum',
              ofType: null
            }
          },
          {
            name: '_nin',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'ENUM',
                  name: 'categories_enum',
                  ofType: null
                }
              }
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'categories_insert_input',
        inputFields: [
          {
            name: 'comment',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'value',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'categories_max_fields',
        fields: [
          {
            name: 'comment',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'value',
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
        kind: 'OBJECT',
        name: 'categories_min_fields',
        fields: [
          {
            name: 'comment',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'value',
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
        kind: 'OBJECT',
        name: 'categories_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'categories',
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
        name: 'categories_on_conflict',
        inputFields: [
          {
            name: 'constraint',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'categories_constraint',
                ofType: null
              }
            }
          },
          {
            name: 'update_columns',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'ENUM',
                    name: 'categories_update_column',
                    ofType: null
                  }
                }
              }
            },
            defaultValue: '[]'
          },
          {
            name: 'where',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'categories_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'categories_order_by',
        inputFields: [
          {
            name: 'comment',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'value',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'categories_pk_columns_input',
        inputFields: [
          {
            name: 'value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'categories_select_column',
        enumValues: [
          {
            name: 'comment'
          },
          {
            name: 'value'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'categories_set_input',
        inputFields: [
          {
            name: 'comment',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'value',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'categories_stream_cursor_input',
        inputFields: [
          {
            name: 'initial_value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'categories_stream_cursor_value_input',
                ofType: null
              }
            }
          },
          {
            name: 'ordering',
            type: {
              kind: 'ENUM',
              name: 'cursor_ordering',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'categories_stream_cursor_value_input',
        inputFields: [
          {
            name: 'comment',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'value',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'categories_update_column',
        enumValues: [
          {
            name: 'comment'
          },
          {
            name: 'value'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'categories_updates',
        inputFields: [
          {
            name: '_set',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'categories_set_input',
              ofType: null
            }
          },
          {
            name: 'where',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'categories_bool_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'SCALAR',
        name: 'citext'
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'citext_comparison_exp',
        inputFields: [
          {
            name: '_eq',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_gt',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_gte',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_ilike',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_in',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'citext',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_iregex',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_is_null',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_like',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_lt',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_lte',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_neq',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_nilike',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_nin',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'citext',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_niregex',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_nlike',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_nregex',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_nsimilar',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_regex',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: '_similar',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'cursor_ordering',
        enumValues: [
          {
            name: 'ASC'
          },
          {
            name: 'DESC'
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'files',
        fields: [
          {
            name: 'bucket',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'buckets',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'bucketId',
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
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'etag',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'isUploaded',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            },
            args: []
          },
          {
            name: 'mimeType',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
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
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'uploadedByUserId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'files_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'files_aggregate_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'files',
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
        name: 'files_aggregate_bool_exp',
        inputFields: [
          {
            name: 'bool_and',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_aggregate_bool_exp_bool_and',
              ofType: null
            }
          },
          {
            name: 'bool_or',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_aggregate_bool_exp_bool_or',
              ofType: null
            }
          },
          {
            name: 'count',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_aggregate_bool_exp_count',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_aggregate_bool_exp_bool_and',
        inputFields: [
          {
            name: 'arguments',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns',
                ofType: null
              }
            }
          },
          {
            name: 'distinct',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'filter',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_bool_exp',
              ofType: null
            }
          },
          {
            name: 'predicate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'Boolean_comparison_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_aggregate_bool_exp_bool_or',
        inputFields: [
          {
            name: 'arguments',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns',
                ofType: null
              }
            }
          },
          {
            name: 'distinct',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'filter',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_bool_exp',
              ofType: null
            }
          },
          {
            name: 'predicate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'Boolean_comparison_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_aggregate_bool_exp_count',
        inputFields: [
          {
            name: 'arguments',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'ENUM',
                  name: 'files_select_column',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'distinct',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'filter',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_bool_exp',
              ofType: null
            }
          },
          {
            name: 'predicate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'Int_comparison_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'files_aggregate_fields',
        fields: [
          {
            name: 'avg',
            type: {
              kind: 'OBJECT',
              name: 'files_avg_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'files_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'files_max_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'files_min_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'stddev',
            type: {
              kind: 'OBJECT',
              name: 'files_stddev_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'stddev_pop',
            type: {
              kind: 'OBJECT',
              name: 'files_stddev_pop_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'stddev_samp',
            type: {
              kind: 'OBJECT',
              name: 'files_stddev_samp_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'sum',
            type: {
              kind: 'OBJECT',
              name: 'files_sum_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'var_pop',
            type: {
              kind: 'OBJECT',
              name: 'files_var_pop_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'var_samp',
            type: {
              kind: 'OBJECT',
              name: 'files_var_samp_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'variance',
            type: {
              kind: 'OBJECT',
              name: 'files_variance_fields',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_aggregate_order_by',
        inputFields: [
          {
            name: 'avg',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_avg_order_by',
              ofType: null
            }
          },
          {
            name: 'count',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'max',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_max_order_by',
              ofType: null
            }
          },
          {
            name: 'min',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_min_order_by',
              ofType: null
            }
          },
          {
            name: 'stddev',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_stddev_order_by',
              ofType: null
            }
          },
          {
            name: 'stddev_pop',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_stddev_pop_order_by',
              ofType: null
            }
          },
          {
            name: 'stddev_samp',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_stddev_samp_order_by',
              ofType: null
            }
          },
          {
            name: 'sum',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_sum_order_by',
              ofType: null
            }
          },
          {
            name: 'var_pop',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_var_pop_order_by',
              ofType: null
            }
          },
          {
            name: 'var_samp',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_var_samp_order_by',
              ofType: null
            }
          },
          {
            name: 'variance',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_variance_order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_arr_rel_insert_input',
        inputFields: [
          {
            name: 'data',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'files_insert_input',
                    ofType: null
                  }
                }
              }
            }
          },
          {
            name: 'on_conflict',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_on_conflict',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'files_avg_fields',
        fields: [
          {
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_avg_order_by',
        inputFields: [
          {
            name: 'size',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_bool_exp',
        inputFields: [
          {
            name: '_and',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_not',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_bool_exp',
              ofType: null
            }
          },
          {
            name: '_or',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'bucket',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'buckets_bool_exp',
              ofType: null
            }
          },
          {
            name: 'bucketId',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'etag',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'isUploaded',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'Boolean_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'mimeType',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'name',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'size',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'Int_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'uploadedByUserId',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'files_constraint',
        enumValues: [
          {
            name: 'files_pkey'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_inc_input',
        inputFields: [
          {
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_insert_input',
        inputFields: [
          {
            name: 'bucket',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'buckets_obj_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'bucketId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'etag',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'isUploaded',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'mimeType',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'uploadedByUserId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'files_max_fields',
        fields: [
          {
            name: 'bucketId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'etag',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'mimeType',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
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
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'uploadedByUserId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_max_order_by',
        inputFields: [
          {
            name: 'bucketId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'etag',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'mimeType',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'name',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'size',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'uploadedByUserId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'files_min_fields',
        fields: [
          {
            name: 'bucketId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'etag',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'mimeType',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
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
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'uploadedByUserId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_min_order_by',
        inputFields: [
          {
            name: 'bucketId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'etag',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'mimeType',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'name',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'size',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'uploadedByUserId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'files_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'files',
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
        name: 'files_on_conflict',
        inputFields: [
          {
            name: 'constraint',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'files_constraint',
                ofType: null
              }
            }
          },
          {
            name: 'update_columns',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'ENUM',
                    name: 'files_update_column',
                    ofType: null
                  }
                }
              }
            },
            defaultValue: '[]'
          },
          {
            name: 'where',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_order_by',
        inputFields: [
          {
            name: 'bucket',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'buckets_order_by',
              ofType: null
            }
          },
          {
            name: 'bucketId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'etag',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'isUploaded',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'mimeType',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'name',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'size',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'uploadedByUserId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_pk_columns_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'files_select_column',
        enumValues: [
          {
            name: 'bucketId'
          },
          {
            name: 'createdAt'
          },
          {
            name: 'etag'
          },
          {
            name: 'id'
          },
          {
            name: 'isUploaded'
          },
          {
            name: 'mimeType'
          },
          {
            name: 'name'
          },
          {
            name: 'size'
          },
          {
            name: 'updatedAt'
          },
          {
            name: 'uploadedByUserId'
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns',
        enumValues: [
          {
            name: 'isUploaded'
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns',
        enumValues: [
          {
            name: 'isUploaded'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_set_input',
        inputFields: [
          {
            name: 'bucketId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'etag',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'isUploaded',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'mimeType',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'uploadedByUserId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'files_stddev_fields',
        fields: [
          {
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_stddev_order_by',
        inputFields: [
          {
            name: 'size',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'files_stddev_pop_fields',
        fields: [
          {
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_stddev_pop_order_by',
        inputFields: [
          {
            name: 'size',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'files_stddev_samp_fields',
        fields: [
          {
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_stddev_samp_order_by',
        inputFields: [
          {
            name: 'size',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_stream_cursor_input',
        inputFields: [
          {
            name: 'initial_value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'files_stream_cursor_value_input',
                ofType: null
              }
            }
          },
          {
            name: 'ordering',
            type: {
              kind: 'ENUM',
              name: 'cursor_ordering',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_stream_cursor_value_input',
        inputFields: [
          {
            name: 'bucketId',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'etag',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'isUploaded',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'mimeType',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'uploadedByUserId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'files_sum_fields',
        fields: [
          {
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_sum_order_by',
        inputFields: [
          {
            name: 'size',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'files_update_column',
        enumValues: [
          {
            name: 'bucketId'
          },
          {
            name: 'createdAt'
          },
          {
            name: 'etag'
          },
          {
            name: 'id'
          },
          {
            name: 'isUploaded'
          },
          {
            name: 'mimeType'
          },
          {
            name: 'name'
          },
          {
            name: 'size'
          },
          {
            name: 'updatedAt'
          },
          {
            name: 'uploadedByUserId'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_updates',
        inputFields: [
          {
            name: '_inc',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_inc_input',
              ofType: null
            }
          },
          {
            name: '_set',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'files_set_input',
              ofType: null
            }
          },
          {
            name: 'where',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'files_bool_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'files_var_pop_fields',
        fields: [
          {
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_var_pop_order_by',
        inputFields: [
          {
            name: 'size',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'files_var_samp_fields',
        fields: [
          {
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_var_samp_order_by',
        inputFields: [
          {
            name: 'size',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'files_variance_fields',
        fields: [
          {
            name: 'size',
            type: {
              kind: 'SCALAR',
              name: 'Float',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'files_variance_order_by',
        inputFields: [
          {
            name: 'size',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'SCALAR',
        name: 'jsonb'
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'jsonb_cast_exp',
        inputFields: [
          {
            name: 'String',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'jsonb_comparison_exp',
        inputFields: [
          {
            name: '_cast',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'jsonb_cast_exp',
              ofType: null
            }
          },
          {
            name: '_contained_in',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          },
          {
            name: '_contains',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          },
          {
            name: '_eq',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          },
          {
            name: '_gt',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          },
          {
            name: '_gte',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          },
          {
            name: '_has_key',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: '_has_keys_all',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_has_keys_any',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_in',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'jsonb',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_is_null',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_lt',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          },
          {
            name: '_lte',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          },
          {
            name: '_neq',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          },
          {
            name: '_nin',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'jsonb',
                  ofType: null
                }
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'mutation_root',
        fields: [
          {
            name: 'deleteAuthProvider',
            type: {
              kind: 'OBJECT',
              name: 'authProviders',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteAuthProviderRequest',
            type: {
              kind: 'OBJECT',
              name: 'authProviderRequests',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteAuthProviderRequests',
            type: {
              kind: 'OBJECT',
              name: 'authProviderRequests_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authProviderRequests_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteAuthProviders',
            type: {
              kind: 'OBJECT',
              name: 'authProviders_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authProviders_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteAuthRefreshToken',
            type: {
              kind: 'OBJECT',
              name: 'authRefreshTokens',
              ofType: null
            },
            args: [
              {
                name: 'refreshToken',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteAuthRefreshTokens',
            type: {
              kind: 'OBJECT',
              name: 'authRefreshTokens_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authRefreshTokens_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteAuthRole',
            type: {
              kind: 'OBJECT',
              name: 'authRoles',
              ofType: null
            },
            args: [
              {
                name: 'role',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteAuthRoles',
            type: {
              kind: 'OBJECT',
              name: 'authRoles_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authRoles_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteAuthUserProvider',
            type: {
              kind: 'OBJECT',
              name: 'authUserProviders',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteAuthUserProviders',
            type: {
              kind: 'OBJECT',
              name: 'authUserProviders_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserProviders_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteAuthUserRole',
            type: {
              kind: 'OBJECT',
              name: 'authUserRoles',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteAuthUserRoles',
            type: {
              kind: 'OBJECT',
              name: 'authUserRoles_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserRoles_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteAuthUserSecurityKey',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteAuthUserSecurityKeys',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserSecurityKeys_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteBucket',
            type: {
              kind: 'OBJECT',
              name: 'buckets',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteBuckets',
            type: {
              kind: 'OBJECT',
              name: 'buckets_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'buckets_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteFile',
            type: {
              kind: 'OBJECT',
              name: 'files',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteFiles',
            type: {
              kind: 'OBJECT',
              name: 'files_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'files_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteTodo',
            type: {
              kind: 'OBJECT',
              name: 'todos',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteTodos',
            type: {
              kind: 'OBJECT',
              name: 'todos_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'todos_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteUser',
            type: {
              kind: 'OBJECT',
              name: 'users',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'deleteUsers',
            type: {
              kind: 'OBJECT',
              name: 'users_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'users_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'delete_categories',
            type: {
              kind: 'OBJECT',
              name: 'categories_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'categories_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'delete_categories_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'categories',
              ofType: null
            },
            args: [
              {
                name: 'value',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'insertAuthProvider',
            type: {
              kind: 'OBJECT',
              name: 'authProviders',
              ofType: null
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authProviders_insert_input',
                    ofType: null
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviders_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertAuthProviderRequest',
            type: {
              kind: 'OBJECT',
              name: 'authProviderRequests',
              ofType: null
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authProviderRequests_insert_input',
                    ofType: null
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertAuthProviderRequests',
            type: {
              kind: 'OBJECT',
              name: 'authProviderRequests_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authProviderRequests_insert_input',
                        ofType: null
                      }
                    }
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertAuthProviders',
            type: {
              kind: 'OBJECT',
              name: 'authProviders_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authProviders_insert_input',
                        ofType: null
                      }
                    }
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviders_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertAuthRefreshToken',
            type: {
              kind: 'OBJECT',
              name: 'authRefreshTokens',
              ofType: null
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authRefreshTokens_insert_input',
                    ofType: null
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRefreshTokens_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertAuthRefreshTokens',
            type: {
              kind: 'OBJECT',
              name: 'authRefreshTokens_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authRefreshTokens_insert_input',
                        ofType: null
                      }
                    }
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRefreshTokens_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertAuthRole',
            type: {
              kind: 'OBJECT',
              name: 'authRoles',
              ofType: null
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authRoles_insert_input',
                    ofType: null
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRoles_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertAuthRoles',
            type: {
              kind: 'OBJECT',
              name: 'authRoles_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authRoles_insert_input',
                        ofType: null
                      }
                    }
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRoles_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertAuthUserProvider',
            type: {
              kind: 'OBJECT',
              name: 'authUserProviders',
              ofType: null
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserProviders_insert_input',
                    ofType: null
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertAuthUserProviders',
            type: {
              kind: 'OBJECT',
              name: 'authUserProviders_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authUserProviders_insert_input',
                        ofType: null
                      }
                    }
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertAuthUserRole',
            type: {
              kind: 'OBJECT',
              name: 'authUserRoles',
              ofType: null
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserRoles_insert_input',
                    ofType: null
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertAuthUserRoles',
            type: {
              kind: 'OBJECT',
              name: 'authUserRoles_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authUserRoles_insert_input',
                        ofType: null
                      }
                    }
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertAuthUserSecurityKey',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys',
              ofType: null
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserSecurityKeys_insert_input',
                    ofType: null
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertAuthUserSecurityKeys',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authUserSecurityKeys_insert_input',
                        ofType: null
                      }
                    }
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertBucket',
            type: {
              kind: 'OBJECT',
              name: 'buckets',
              ofType: null
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'buckets_insert_input',
                    ofType: null
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'buckets_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertBuckets',
            type: {
              kind: 'OBJECT',
              name: 'buckets_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'buckets_insert_input',
                        ofType: null
                      }
                    }
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'buckets_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertFile',
            type: {
              kind: 'OBJECT',
              name: 'files',
              ofType: null
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'files_insert_input',
                    ofType: null
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertFiles',
            type: {
              kind: 'OBJECT',
              name: 'files_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'files_insert_input',
                        ofType: null
                      }
                    }
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertTodo',
            type: {
              kind: 'OBJECT',
              name: 'todos',
              ofType: null
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'todos_insert_input',
                    ofType: null
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'todos_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertTodos',
            type: {
              kind: 'OBJECT',
              name: 'todos_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'todos_insert_input',
                        ofType: null
                      }
                    }
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'todos_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertUser',
            type: {
              kind: 'OBJECT',
              name: 'users',
              ofType: null
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'users_insert_input',
                    ofType: null
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insertUsers',
            type: {
              kind: 'OBJECT',
              name: 'users_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'users_insert_input',
                        ofType: null
                      }
                    }
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insert_categories',
            type: {
              kind: 'OBJECT',
              name: 'categories_mutation_response',
              ofType: null
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'categories_insert_input',
                        ofType: null
                      }
                    }
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'categories_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'insert_categories_one',
            type: {
              kind: 'OBJECT',
              name: 'categories',
              ofType: null
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'categories_insert_input',
                    ofType: null
                  }
                }
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'categories_on_conflict',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'updateAuthProvider',
            type: {
              kind: 'OBJECT',
              name: 'authProviders',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviders_set_input',
                  ofType: null
                }
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authProviders_pk_columns_input',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateAuthProviderRequest',
            type: {
              kind: 'OBJECT',
              name: 'authProviderRequests',
              ofType: null
            },
            args: [
              {
                name: '_append',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_append_input',
                  ofType: null
                }
              },
              {
                name: '_delete_at_path',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_delete_at_path_input',
                  ofType: null
                }
              },
              {
                name: '_delete_elem',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_delete_elem_input',
                  ofType: null
                }
              },
              {
                name: '_delete_key',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_delete_key_input',
                  ofType: null
                }
              },
              {
                name: '_prepend',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_prepend_input',
                  ofType: null
                }
              },
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_set_input',
                  ofType: null
                }
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authProviderRequests_pk_columns_input',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateAuthProviderRequests',
            type: {
              kind: 'OBJECT',
              name: 'authProviderRequests_mutation_response',
              ofType: null
            },
            args: [
              {
                name: '_append',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_append_input',
                  ofType: null
                }
              },
              {
                name: '_delete_at_path',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_delete_at_path_input',
                  ofType: null
                }
              },
              {
                name: '_delete_elem',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_delete_elem_input',
                  ofType: null
                }
              },
              {
                name: '_delete_key',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_delete_key_input',
                  ofType: null
                }
              },
              {
                name: '_prepend',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_prepend_input',
                  ofType: null
                }
              },
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_set_input',
                  ofType: null
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authProviderRequests_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateAuthProviders',
            type: {
              kind: 'OBJECT',
              name: 'authProviders_mutation_response',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviders_set_input',
                  ofType: null
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authProviders_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateAuthRefreshToken',
            type: {
              kind: 'OBJECT',
              name: 'authRefreshTokens',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRefreshTokens_set_input',
                  ofType: null
                }
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authRefreshTokens_pk_columns_input',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateAuthRefreshTokens',
            type: {
              kind: 'OBJECT',
              name: 'authRefreshTokens_mutation_response',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRefreshTokens_set_input',
                  ofType: null
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authRefreshTokens_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateAuthRole',
            type: {
              kind: 'OBJECT',
              name: 'authRoles',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRoles_set_input',
                  ofType: null
                }
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authRoles_pk_columns_input',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateAuthRoles',
            type: {
              kind: 'OBJECT',
              name: 'authRoles_mutation_response',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRoles_set_input',
                  ofType: null
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authRoles_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateAuthUserProvider',
            type: {
              kind: 'OBJECT',
              name: 'authUserProviders',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_set_input',
                  ofType: null
                }
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserProviders_pk_columns_input',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateAuthUserProviders',
            type: {
              kind: 'OBJECT',
              name: 'authUserProviders_mutation_response',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_set_input',
                  ofType: null
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserProviders_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateAuthUserRole',
            type: {
              kind: 'OBJECT',
              name: 'authUserRoles',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_set_input',
                  ofType: null
                }
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserRoles_pk_columns_input',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateAuthUserRoles',
            type: {
              kind: 'OBJECT',
              name: 'authUserRoles_mutation_response',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_set_input',
                  ofType: null
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserRoles_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateAuthUserSecurityKey',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys',
              ofType: null
            },
            args: [
              {
                name: '_inc',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_inc_input',
                  ofType: null
                }
              },
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_set_input',
                  ofType: null
                }
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserSecurityKeys_pk_columns_input',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateAuthUserSecurityKeys',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys_mutation_response',
              ofType: null
            },
            args: [
              {
                name: '_inc',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_inc_input',
                  ofType: null
                }
              },
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_set_input',
                  ofType: null
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'authUserSecurityKeys_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateBucket',
            type: {
              kind: 'OBJECT',
              name: 'buckets',
              ofType: null
            },
            args: [
              {
                name: '_inc',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'buckets_inc_input',
                  ofType: null
                }
              },
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'buckets_set_input',
                  ofType: null
                }
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'buckets_pk_columns_input',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateBuckets',
            type: {
              kind: 'OBJECT',
              name: 'buckets_mutation_response',
              ofType: null
            },
            args: [
              {
                name: '_inc',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'buckets_inc_input',
                  ofType: null
                }
              },
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'buckets_set_input',
                  ofType: null
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'buckets_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateFile',
            type: {
              kind: 'OBJECT',
              name: 'files',
              ofType: null
            },
            args: [
              {
                name: '_inc',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_inc_input',
                  ofType: null
                }
              },
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_set_input',
                  ofType: null
                }
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'files_pk_columns_input',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateFiles',
            type: {
              kind: 'OBJECT',
              name: 'files_mutation_response',
              ofType: null
            },
            args: [
              {
                name: '_inc',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_inc_input',
                  ofType: null
                }
              },
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_set_input',
                  ofType: null
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'files_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateTodo',
            type: {
              kind: 'OBJECT',
              name: 'todos',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'todos_set_input',
                  ofType: null
                }
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'todos_pk_columns_input',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateTodos',
            type: {
              kind: 'OBJECT',
              name: 'todos_mutation_response',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'todos_set_input',
                  ofType: null
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'todos_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateUser',
            type: {
              kind: 'OBJECT',
              name: 'users',
              ofType: null
            },
            args: [
              {
                name: '_append',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_append_input',
                  ofType: null
                }
              },
              {
                name: '_delete_at_path',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_delete_at_path_input',
                  ofType: null
                }
              },
              {
                name: '_delete_elem',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_delete_elem_input',
                  ofType: null
                }
              },
              {
                name: '_delete_key',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_delete_key_input',
                  ofType: null
                }
              },
              {
                name: '_prepend',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_prepend_input',
                  ofType: null
                }
              },
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_set_input',
                  ofType: null
                }
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'users_pk_columns_input',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'updateUsers',
            type: {
              kind: 'OBJECT',
              name: 'users_mutation_response',
              ofType: null
            },
            args: [
              {
                name: '_append',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_append_input',
                  ofType: null
                }
              },
              {
                name: '_delete_at_path',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_delete_at_path_input',
                  ofType: null
                }
              },
              {
                name: '_delete_elem',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_delete_elem_input',
                  ofType: null
                }
              },
              {
                name: '_delete_key',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_delete_key_input',
                  ofType: null
                }
              },
              {
                name: '_prepend',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_prepend_input',
                  ofType: null
                }
              },
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_set_input',
                  ofType: null
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'users_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'update_authProviderRequests_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'authProviderRequests_mutation_response',
                ofType: null
              }
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authProviderRequests_updates',
                        ofType: null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: 'update_authProviders_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'authProviders_mutation_response',
                ofType: null
              }
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authProviders_updates',
                        ofType: null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: 'update_authRefreshTokens_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'authRefreshTokens_mutation_response',
                ofType: null
              }
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authRefreshTokens_updates',
                        ofType: null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: 'update_authRoles_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'authRoles_mutation_response',
                ofType: null
              }
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authRoles_updates',
                        ofType: null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: 'update_authUserProviders_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserProviders_mutation_response',
                ofType: null
              }
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authUserProviders_updates',
                        ofType: null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: 'update_authUserRoles_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserRoles_mutation_response',
                ofType: null
              }
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authUserRoles_updates',
                        ofType: null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: 'update_authUserSecurityKeys_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserSecurityKeys_mutation_response',
                ofType: null
              }
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'authUserSecurityKeys_updates',
                        ofType: null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: 'update_buckets_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'buckets_mutation_response',
                ofType: null
              }
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'buckets_updates',
                        ofType: null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: 'update_categories',
            type: {
              kind: 'OBJECT',
              name: 'categories_mutation_response',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'categories_set_input',
                  ofType: null
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'categories_bool_exp',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'update_categories_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'categories',
              ofType: null
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'categories_set_input',
                  ofType: null
                }
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'categories_pk_columns_input',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'update_categories_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'categories_mutation_response',
                ofType: null
              }
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'categories_updates',
                        ofType: null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: 'update_files_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'files_mutation_response',
                ofType: null
              }
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'files_updates',
                        ofType: null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: 'update_todos_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'todos_mutation_response',
                ofType: null
              }
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'todos_updates',
                        ofType: null
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: 'update_users_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'users_mutation_response',
                ofType: null
              }
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'INPUT_OBJECT',
                        name: 'users_updates',
                        ofType: null
                      }
                    }
                  }
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: 'ENUM',
        name: 'order_by',
        enumValues: [
          {
            name: 'asc'
          },
          {
            name: 'asc_nulls_first'
          },
          {
            name: 'asc_nulls_last'
          },
          {
            name: 'desc'
          },
          {
            name: 'desc_nulls_first'
          },
          {
            name: 'desc_nulls_last'
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'query_root',
        fields: [
          {
            name: 'authProvider',
            type: {
              kind: 'OBJECT',
              name: 'authProviders',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authProviderRequest',
            type: {
              kind: 'OBJECT',
              name: 'authProviderRequests',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authProviderRequests',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authProviderRequests',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authProviderRequests_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authProviderRequests_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authProviderRequestsAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authProviderRequests_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authProviderRequests_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authProviderRequests_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authProviders',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authProviders',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authProviders_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviders_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authProvidersAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authProviders_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authProviders_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviders_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authRefreshToken',
            type: {
              kind: 'OBJECT',
              name: 'authRefreshTokens',
              ofType: null
            },
            args: [
              {
                name: 'refreshToken',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authRefreshTokens',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authRefreshTokens',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authRefreshTokens_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authRefreshTokens_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRefreshTokens_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authRefreshTokensAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authRefreshTokens_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authRefreshTokens_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authRefreshTokens_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRefreshTokens_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authRole',
            type: {
              kind: 'OBJECT',
              name: 'authRoles',
              ofType: null
            },
            args: [
              {
                name: 'role',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authRoles',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authRoles',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authRoles_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authRolesAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authRoles_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authRoles_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserProvider',
            type: {
              kind: 'OBJECT',
              name: 'authUserProviders',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authUserProviders',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserProviders',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserProviders_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserProvidersAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserProviders_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserProviders_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserRole',
            type: {
              kind: 'OBJECT',
              name: 'authUserRoles',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authUserRoles',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserRoles',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserRoles_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserRolesAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserRoles_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserRoles_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserSecurityKey',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authUserSecurityKeys',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserSecurityKeys',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserSecurityKeys_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserSecurityKeys_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserSecurityKeysAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserSecurityKeys_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserSecurityKeys_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserSecurityKeys_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'bucket',
            type: {
              kind: 'OBJECT',
              name: 'buckets',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'buckets',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'buckets',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'buckets_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'buckets_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'buckets_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'bucketsAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'buckets_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'buckets_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'buckets_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'buckets_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'categories',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'categories',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'categories_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'categories_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'categories_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'categories_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'categories_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'categories_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'categories_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'categories_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'categories_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'categories',
              ofType: null
            },
            args: [
              {
                name: 'value',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'file',
            type: {
              kind: 'OBJECT',
              name: 'files',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'files',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'files',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'files_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'files_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'filesAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'files_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'files_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'files_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'todo',
            type: {
              kind: 'OBJECT',
              name: 'todos',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'todos',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'todos',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'todos_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'todos_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'todos_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'todosAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'todos_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'todos_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'todos_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'todos_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'user',
            type: {
              kind: 'OBJECT',
              name: 'users',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'users',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'users',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'users_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'users_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'usersAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'users_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'users_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'users_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_bool_exp',
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
        name: 'subscription_root',
        fields: [
          {
            name: 'authProvider',
            type: {
              kind: 'OBJECT',
              name: 'authProviders',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authProviderRequest',
            type: {
              kind: 'OBJECT',
              name: 'authProviderRequests',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authProviderRequests',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authProviderRequests',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authProviderRequests_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authProviderRequests_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authProviderRequestsAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authProviderRequests_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authProviderRequests_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authProviderRequests_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authProviderRequests_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authProviderRequests',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null
                  }
                }
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authProviderRequests_stream_cursor_input',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviderRequests_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authProviders',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authProviders',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authProviders_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviders_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authProvidersAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authProviders_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authProviders_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviders_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authProviders_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authProviders',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null
                  }
                }
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authProviders_stream_cursor_input',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authProviders_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authRefreshToken',
            type: {
              kind: 'OBJECT',
              name: 'authRefreshTokens',
              ofType: null
            },
            args: [
              {
                name: 'refreshToken',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authRefreshTokens',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authRefreshTokens',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authRefreshTokens_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authRefreshTokens_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRefreshTokens_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authRefreshTokensAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authRefreshTokens_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authRefreshTokens_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authRefreshTokens_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRefreshTokens_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authRefreshTokens_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authRefreshTokens',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null
                  }
                }
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authRefreshTokens_stream_cursor_input',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRefreshTokens_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authRole',
            type: {
              kind: 'OBJECT',
              name: 'authRoles',
              ofType: null
            },
            args: [
              {
                name: 'role',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authRoles',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authRoles',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authRoles_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authRolesAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authRoles_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authRoles_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authRoles_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authRoles',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null
                  }
                }
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authRoles_stream_cursor_input',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserProvider',
            type: {
              kind: 'OBJECT',
              name: 'authUserProviders',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authUserProviders',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserProviders',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserProviders_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserProvidersAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserProviders_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserProviders_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserProviders_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserProviders',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null
                  }
                }
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserProviders_stream_cursor_input',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserRole',
            type: {
              kind: 'OBJECT',
              name: 'authUserRoles',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authUserRoles',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserRoles',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserRoles_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserRolesAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserRoles_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserRoles_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserRoles_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserRoles',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null
                  }
                }
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserRoles_stream_cursor_input',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserSecurityKey',
            type: {
              kind: 'OBJECT',
              name: 'authUserSecurityKeys',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'authUserSecurityKeys',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserSecurityKeys',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserSecurityKeys_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserSecurityKeys_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserSecurityKeysAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserSecurityKeys_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserSecurityKeys_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserSecurityKeys_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'authUserSecurityKeys_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserSecurityKeys',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null
                  }
                }
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserSecurityKeys_stream_cursor_input',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'bucket',
            type: {
              kind: 'OBJECT',
              name: 'buckets',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'buckets',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'buckets',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'buckets_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'buckets_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'buckets_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'bucketsAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'buckets_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'buckets_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'buckets_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'buckets_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'buckets_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'buckets',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null
                  }
                }
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'buckets_stream_cursor_input',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'buckets_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'categories',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'categories',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'categories_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'categories_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'categories_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'categories_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'categories_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'categories_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'categories_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'categories_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'categories_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'categories',
              ofType: null
            },
            args: [
              {
                name: 'value',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'categories_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'categories',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null
                  }
                }
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'categories_stream_cursor_input',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'categories_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'file',
            type: {
              kind: 'OBJECT',
              name: 'files',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'files',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'files',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'files_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'files_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'filesAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'files_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'files_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'files_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'files_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'files',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null
                  }
                }
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'files_stream_cursor_input',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'files_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'todo',
            type: {
              kind: 'OBJECT',
              name: 'todos',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'todos',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'todos',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'todos_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'todos_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'todos_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'todosAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'todos_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'todos_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'todos_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'todos_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'todos_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'todos',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null
                  }
                }
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'todos_stream_cursor_input',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'todos_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'user',
            type: {
              kind: 'OBJECT',
              name: 'users',
              ofType: null
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'uuid',
                    ofType: null
                  }
                }
              }
            ]
          },
          {
            name: 'users',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'users',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'users_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'users_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'usersAggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'users_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'users_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'users_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'users_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'users',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null
                  }
                }
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'users_stream_cursor_input',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_bool_exp',
                  ofType: null
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: 'SCALAR',
        name: 'timestamptz'
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'timestamptz_comparison_exp',
        inputFields: [
          {
            name: '_eq',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: '_gt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: '_gte',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: '_in',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'timestamptz',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_is_null',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_lt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: '_lte',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: '_neq',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: '_nin',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'timestamptz',
                  ofType: null
                }
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'todos',
        fields: [
          {
            name: 'category',
            type: {
              kind: 'ENUM',
              name: 'categories_enum',
              ofType: null
            },
            args: []
          },
          {
            name: 'contents',
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
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'user',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'users',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'todos_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'todos_aggregate_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'todos',
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
        kind: 'OBJECT',
        name: 'todos_aggregate_fields',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'todos_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'todos_max_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'todos_min_fields',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'todos_bool_exp',
        inputFields: [
          {
            name: '_and',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'todos_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_not',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'todos_bool_exp',
              ofType: null
            }
          },
          {
            name: '_or',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'todos_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'category',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'categories_enum_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'contents',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_bool_exp',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'todos_constraint',
        enumValues: [
          {
            name: 'todos_pkey'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'todos_insert_input',
        inputFields: [
          {
            name: 'category',
            type: {
              kind: 'ENUM',
              name: 'categories_enum',
              ofType: null
            }
          },
          {
            name: 'contents',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_obj_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'todos_max_fields',
        fields: [
          {
            name: 'contents',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'todos_min_fields',
        fields: [
          {
            name: 'contents',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'OBJECT',
        name: 'todos_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'todos',
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
        name: 'todos_on_conflict',
        inputFields: [
          {
            name: 'constraint',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'todos_constraint',
                ofType: null
              }
            }
          },
          {
            name: 'update_columns',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'ENUM',
                    name: 'todos_update_column',
                    ofType: null
                  }
                }
              }
            },
            defaultValue: '[]'
          },
          {
            name: 'where',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'todos_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'todos_order_by',
        inputFields: [
          {
            name: 'category',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'contents',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'user',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_order_by',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'todos_pk_columns_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'todos_select_column',
        enumValues: [
          {
            name: 'category'
          },
          {
            name: 'contents'
          },
          {
            name: 'createdAt'
          },
          {
            name: 'id'
          },
          {
            name: 'updatedAt'
          },
          {
            name: 'userId'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'todos_set_input',
        inputFields: [
          {
            name: 'category',
            type: {
              kind: 'ENUM',
              name: 'categories_enum',
              ofType: null
            }
          },
          {
            name: 'contents',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'todos_stream_cursor_input',
        inputFields: [
          {
            name: 'initial_value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'todos_stream_cursor_value_input',
                ofType: null
              }
            }
          },
          {
            name: 'ordering',
            type: {
              kind: 'ENUM',
              name: 'cursor_ordering',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'todos_stream_cursor_value_input',
        inputFields: [
          {
            name: 'category',
            type: {
              kind: 'ENUM',
              name: 'categories_enum',
              ofType: null
            }
          },
          {
            name: 'contents',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'todos_update_column',
        enumValues: [
          {
            name: 'category'
          },
          {
            name: 'contents'
          },
          {
            name: 'createdAt'
          },
          {
            name: 'id'
          },
          {
            name: 'updatedAt'
          },
          {
            name: 'userId'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'todos_updates',
        inputFields: [
          {
            name: '_set',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'todos_set_input',
              ofType: null
            }
          },
          {
            name: 'where',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'todos_bool_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'users',
        fields: [
          {
            name: 'activeMfaType',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'avatarUrl',
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
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'currentChallenge',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'defaultRole',
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
            name: 'defaultRoleByRole',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authRoles',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'disabled',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'displayName',
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
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            },
            args: []
          },
          {
            name: 'emailVerified',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'isAnonymous',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'lastSeen',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'locale',
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
            name: 'metadata',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            },
            args: [
              {
                name: 'path',
                type: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'newEmail',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            },
            args: []
          },
          {
            name: 'otpHash',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'otpHashExpiresAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'otpMethodLastUsed',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'passwordHash',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'phoneNumber',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'phoneNumberVerified',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'refreshTokens',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authRefreshTokens',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authRefreshTokens_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authRefreshTokens_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRefreshTokens_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'refreshTokens_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authRefreshTokens_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authRefreshTokens_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authRefreshTokens_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authRefreshTokens_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'roles',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserRoles',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserRoles_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'roles_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserRoles_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserRoles_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserRoles_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserRoles_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'securityKeys',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserSecurityKeys',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserSecurityKeys_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserSecurityKeys_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'securityKeys_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserSecurityKeys_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserSecurityKeys_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserSecurityKeys_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserSecurityKeys_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'ticket',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'ticketExpiresAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'totpSecret',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'timestamptz',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'userProviders',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'authUserProviders',
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserProviders_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_bool_exp',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'userProviders_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'authUserProviders_aggregate',
                ofType: null
              }
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'authUserProviders_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null
                }
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'INPUT_OBJECT',
                      name: 'authUserProviders_order_by',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'where',
                type: {
                  kind: 'INPUT_OBJECT',
                  name: 'authUserProviders_bool_exp',
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
        name: 'users_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'users_aggregate_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'users',
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
        name: 'users_aggregate_bool_exp',
        inputFields: [
          {
            name: 'bool_and',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_aggregate_bool_exp_bool_and',
              ofType: null
            }
          },
          {
            name: 'bool_or',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_aggregate_bool_exp_bool_or',
              ofType: null
            }
          },
          {
            name: 'count',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_aggregate_bool_exp_count',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_aggregate_bool_exp_bool_and',
        inputFields: [
          {
            name: 'arguments',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns',
                ofType: null
              }
            }
          },
          {
            name: 'distinct',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'filter',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_bool_exp',
              ofType: null
            }
          },
          {
            name: 'predicate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'Boolean_comparison_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_aggregate_bool_exp_bool_or',
        inputFields: [
          {
            name: 'arguments',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns',
                ofType: null
              }
            }
          },
          {
            name: 'distinct',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'filter',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_bool_exp',
              ofType: null
            }
          },
          {
            name: 'predicate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'Boolean_comparison_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_aggregate_bool_exp_count',
        inputFields: [
          {
            name: 'arguments',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'ENUM',
                  name: 'users_select_column',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'distinct',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'filter',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_bool_exp',
              ofType: null
            }
          },
          {
            name: 'predicate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'Int_comparison_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'users_aggregate_fields',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'ENUM',
                      name: 'users_select_column',
                      ofType: null
                    }
                  }
                }
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null
                }
              }
            ]
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'users_max_fields',
              ofType: null
            },
            args: []
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'users_min_fields',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_aggregate_order_by',
        inputFields: [
          {
            name: 'count',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'max',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_max_order_by',
              ofType: null
            }
          },
          {
            name: 'min',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_min_order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_append_input',
        inputFields: [
          {
            name: 'metadata',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_arr_rel_insert_input',
        inputFields: [
          {
            name: 'data',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'INPUT_OBJECT',
                    name: 'users_insert_input',
                    ofType: null
                  }
                }
              }
            }
          },
          {
            name: 'on_conflict',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_on_conflict',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_bool_exp',
        inputFields: [
          {
            name: '_and',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_not',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_bool_exp',
              ofType: null
            }
          },
          {
            name: '_or',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'INPUT_OBJECT',
                  name: 'users_bool_exp',
                  ofType: null
                }
              }
            }
          },
          {
            name: 'activeMfaType',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'avatarUrl',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'currentChallenge',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'defaultRole',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'defaultRoleByRole',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRoles_bool_exp',
              ofType: null
            }
          },
          {
            name: 'disabled',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'Boolean_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'displayName',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'email',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'citext_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'emailVerified',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'Boolean_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'uuid_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'isAnonymous',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'Boolean_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'lastSeen',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'locale',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'metadata',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'jsonb_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'newEmail',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'citext_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'otpHash',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'otpHashExpiresAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'otpMethodLastUsed',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'passwordHash',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'phoneNumber',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'phoneNumberVerified',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'Boolean_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'refreshTokens',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRefreshTokens_bool_exp',
              ofType: null
            }
          },
          {
            name: 'refreshTokens_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRefreshTokens_aggregate_bool_exp',
              ofType: null
            }
          },
          {
            name: 'roles',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_bool_exp',
              ofType: null
            }
          },
          {
            name: 'roles_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_aggregate_bool_exp',
              ofType: null
            }
          },
          {
            name: 'securityKeys',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_bool_exp',
              ofType: null
            }
          },
          {
            name: 'securityKeys_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_aggregate_bool_exp',
              ofType: null
            }
          },
          {
            name: 'ticket',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'ticketExpiresAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'totpSecret',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'String_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'timestamptz_comparison_exp',
              ofType: null
            }
          },
          {
            name: 'userProviders',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_bool_exp',
              ofType: null
            }
          },
          {
            name: 'userProviders_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_aggregate_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'users_constraint',
        enumValues: [
          {
            name: 'users_email_key'
          },
          {
            name: 'users_phone_number_key'
          },
          {
            name: 'users_pkey'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_delete_at_path_input',
        inputFields: [
          {
            name: 'metadata',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null
                }
              }
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_delete_elem_input',
        inputFields: [
          {
            name: 'metadata',
            type: {
              kind: 'SCALAR',
              name: 'Int',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_delete_key_input',
        inputFields: [
          {
            name: 'metadata',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_insert_input',
        inputFields: [
          {
            name: 'activeMfaType',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'avatarUrl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'currentChallenge',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'defaultRole',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'defaultRoleByRole',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRoles_obj_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'disabled',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'displayName',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: 'emailVerified',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'isAnonymous',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'lastSeen',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'locale',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'metadata',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          },
          {
            name: 'newEmail',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: 'otpHash',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'otpHashExpiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'otpMethodLastUsed',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'passwordHash',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'phoneNumber',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'phoneNumberVerified',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'refreshTokens',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRefreshTokens_arr_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'roles',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_arr_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'securityKeys',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_arr_rel_insert_input',
              ofType: null
            }
          },
          {
            name: 'ticket',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'ticketExpiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'totpSecret',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'userProviders',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_arr_rel_insert_input',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'users_max_fields',
        fields: [
          {
            name: 'activeMfaType',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'avatarUrl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'currentChallenge',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'defaultRole',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'displayName',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'lastSeen',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'locale',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'newEmail',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            },
            args: []
          },
          {
            name: 'otpHash',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'otpHashExpiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'otpMethodLastUsed',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'passwordHash',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'phoneNumber',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'ticket',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'ticketExpiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'totpSecret',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_max_order_by',
        inputFields: [
          {
            name: 'activeMfaType',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'avatarUrl',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'currentChallenge',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'defaultRole',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'displayName',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'email',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'lastSeen',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'locale',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'newEmail',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'otpHash',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'otpHashExpiresAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'otpMethodLastUsed',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'passwordHash',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'phoneNumber',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'ticket',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'ticketExpiresAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'totpSecret',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'users_min_fields',
        fields: [
          {
            name: 'activeMfaType',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'avatarUrl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'currentChallenge',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'defaultRole',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'displayName',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            },
            args: []
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            },
            args: []
          },
          {
            name: 'lastSeen',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'locale',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'newEmail',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            },
            args: []
          },
          {
            name: 'otpHash',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'otpHashExpiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'otpMethodLastUsed',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'passwordHash',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'phoneNumber',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'ticket',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'ticketExpiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          },
          {
            name: 'totpSecret',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            },
            args: []
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_min_order_by',
        inputFields: [
          {
            name: 'activeMfaType',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'avatarUrl',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'currentChallenge',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'defaultRole',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'displayName',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'email',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'lastSeen',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'locale',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'newEmail',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'otpHash',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'otpHashExpiresAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'otpMethodLastUsed',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'passwordHash',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'phoneNumber',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'ticket',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'ticketExpiresAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'totpSecret',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'OBJECT',
        name: 'users_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null
              }
            },
            args: []
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'users',
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
        name: 'users_obj_rel_insert_input',
        inputFields: [
          {
            name: 'data',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'users_insert_input',
                ofType: null
              }
            }
          },
          {
            name: 'on_conflict',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_on_conflict',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_on_conflict',
        inputFields: [
          {
            name: 'constraint',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'ENUM',
                name: 'users_constraint',
                ofType: null
              }
            }
          },
          {
            name: 'update_columns',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'ENUM',
                    name: 'users_update_column',
                    ofType: null
                  }
                }
              }
            },
            defaultValue: '[]'
          },
          {
            name: 'where',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_bool_exp',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_order_by',
        inputFields: [
          {
            name: 'activeMfaType',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'avatarUrl',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'currentChallenge',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'defaultRole',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'defaultRoleByRole',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRoles_order_by',
              ofType: null
            }
          },
          {
            name: 'disabled',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'displayName',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'email',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'emailVerified',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'isAnonymous',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'lastSeen',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'locale',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'metadata',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'newEmail',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'otpHash',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'otpHashExpiresAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'otpMethodLastUsed',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'passwordHash',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'phoneNumber',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'phoneNumberVerified',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'refreshTokens_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authRefreshTokens_aggregate_order_by',
              ofType: null
            }
          },
          {
            name: 'roles_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserRoles_aggregate_order_by',
              ofType: null
            }
          },
          {
            name: 'securityKeys_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserSecurityKeys_aggregate_order_by',
              ofType: null
            }
          },
          {
            name: 'ticket',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'ticketExpiresAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'totpSecret',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'ENUM',
              name: 'order_by',
              ofType: null
            }
          },
          {
            name: 'userProviders_aggregate',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'authUserProviders_aggregate_order_by',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_pk_columns_input',
        inputFields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'uuid',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_prepend_input',
        inputFields: [
          {
            name: 'metadata',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'users_select_column',
        enumValues: [
          {
            name: 'activeMfaType'
          },
          {
            name: 'avatarUrl'
          },
          {
            name: 'createdAt'
          },
          {
            name: 'currentChallenge'
          },
          {
            name: 'defaultRole'
          },
          {
            name: 'disabled'
          },
          {
            name: 'displayName'
          },
          {
            name: 'email'
          },
          {
            name: 'emailVerified'
          },
          {
            name: 'id'
          },
          {
            name: 'isAnonymous'
          },
          {
            name: 'lastSeen'
          },
          {
            name: 'locale'
          },
          {
            name: 'metadata'
          },
          {
            name: 'newEmail'
          },
          {
            name: 'otpHash'
          },
          {
            name: 'otpHashExpiresAt'
          },
          {
            name: 'otpMethodLastUsed'
          },
          {
            name: 'passwordHash'
          },
          {
            name: 'phoneNumber'
          },
          {
            name: 'phoneNumberVerified'
          },
          {
            name: 'ticket'
          },
          {
            name: 'ticketExpiresAt'
          },
          {
            name: 'totpSecret'
          },
          {
            name: 'updatedAt'
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns',
        enumValues: [
          {
            name: 'disabled'
          },
          {
            name: 'emailVerified'
          },
          {
            name: 'isAnonymous'
          },
          {
            name: 'phoneNumberVerified'
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns',
        enumValues: [
          {
            name: 'disabled'
          },
          {
            name: 'emailVerified'
          },
          {
            name: 'isAnonymous'
          },
          {
            name: 'phoneNumberVerified'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_set_input',
        inputFields: [
          {
            name: 'activeMfaType',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'avatarUrl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'currentChallenge',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'defaultRole',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'disabled',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'displayName',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: 'emailVerified',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'isAnonymous',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'lastSeen',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'locale',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'metadata',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          },
          {
            name: 'newEmail',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: 'otpHash',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'otpHashExpiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'otpMethodLastUsed',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'passwordHash',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'phoneNumber',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'phoneNumberVerified',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'ticket',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'ticketExpiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'totpSecret',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_stream_cursor_input',
        inputFields: [
          {
            name: 'initial_value',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'users_stream_cursor_value_input',
                ofType: null
              }
            }
          },
          {
            name: 'ordering',
            type: {
              kind: 'ENUM',
              name: 'cursor_ordering',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_stream_cursor_value_input',
        inputFields: [
          {
            name: 'activeMfaType',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'avatarUrl',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'currentChallenge',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'defaultRole',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'disabled',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'displayName',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: 'emailVerified',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: 'isAnonymous',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'lastSeen',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'locale',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'metadata',
            type: {
              kind: 'SCALAR',
              name: 'jsonb',
              ofType: null
            }
          },
          {
            name: 'newEmail',
            type: {
              kind: 'SCALAR',
              name: 'citext',
              ofType: null
            }
          },
          {
            name: 'otpHash',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'otpHashExpiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'otpMethodLastUsed',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'passwordHash',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'phoneNumber',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'phoneNumberVerified',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: 'ticket',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'ticketExpiresAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          },
          {
            name: 'totpSecret',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null
            }
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'timestamptz',
              ofType: null
            }
          }
        ]
      },
      {
        kind: 'ENUM',
        name: 'users_update_column',
        enumValues: [
          {
            name: 'activeMfaType'
          },
          {
            name: 'avatarUrl'
          },
          {
            name: 'createdAt'
          },
          {
            name: 'currentChallenge'
          },
          {
            name: 'defaultRole'
          },
          {
            name: 'disabled'
          },
          {
            name: 'displayName'
          },
          {
            name: 'email'
          },
          {
            name: 'emailVerified'
          },
          {
            name: 'id'
          },
          {
            name: 'isAnonymous'
          },
          {
            name: 'lastSeen'
          },
          {
            name: 'locale'
          },
          {
            name: 'metadata'
          },
          {
            name: 'newEmail'
          },
          {
            name: 'otpHash'
          },
          {
            name: 'otpHashExpiresAt'
          },
          {
            name: 'otpMethodLastUsed'
          },
          {
            name: 'passwordHash'
          },
          {
            name: 'phoneNumber'
          },
          {
            name: 'phoneNumberVerified'
          },
          {
            name: 'ticket'
          },
          {
            name: 'ticketExpiresAt'
          },
          {
            name: 'totpSecret'
          },
          {
            name: 'updatedAt'
          }
        ]
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'users_updates',
        inputFields: [
          {
            name: '_append',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_append_input',
              ofType: null
            }
          },
          {
            name: '_delete_at_path',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_delete_at_path_input',
              ofType: null
            }
          },
          {
            name: '_delete_elem',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_delete_elem_input',
              ofType: null
            }
          },
          {
            name: '_delete_key',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_delete_key_input',
              ofType: null
            }
          },
          {
            name: '_prepend',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_prepend_input',
              ofType: null
            }
          },
          {
            name: '_set',
            type: {
              kind: 'INPUT_OBJECT',
              name: 'users_set_input',
              ofType: null
            }
          },
          {
            name: 'where',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'INPUT_OBJECT',
                name: 'users_bool_exp',
                ofType: null
              }
            }
          }
        ]
      },
      {
        kind: 'SCALAR',
        name: 'uuid'
      },
      {
        kind: 'INPUT_OBJECT',
        name: 'uuid_comparison_exp',
        inputFields: [
          {
            name: '_eq',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: '_gt',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: '_gte',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: '_in',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'uuid',
                  ofType: null
                }
              }
            }
          },
          {
            name: '_is_null',
            type: {
              kind: 'SCALAR',
              name: 'Boolean',
              ofType: null
            }
          },
          {
            name: '_lt',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: '_lte',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: '_neq',
            type: {
              kind: 'SCALAR',
              name: 'uuid',
              ofType: null
            }
          },
          {
            name: '_nin',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'SCALAR',
                  name: 'uuid',
                  ofType: null
                }
              }
            }
          }
        ]
      },
      {
        kind: 'SCALAR',
        name: 'Any'
      }
    ],
    directives: []
  }
} as const
