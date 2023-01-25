export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: number;
  bytea: string;
  citext: string;
  jsonb: JSONValue;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export type AuthProviderRequests_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'provider_requests_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export type AuthProviderRequests_Select_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'options';

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export type AuthProviderRequests_Update_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'options';

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export type AuthProviders_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'providers_pkey';

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export type AuthProviders_Select_Column =
  /** column name */
  | 'id';

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export type AuthProviders_Update_Column =
  /** column name */
  | 'id';

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  refreshToken: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  refreshToken?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export type AuthRefreshTokens_Constraint =
  /** unique or primary key constraint on columns "refresh_token" */
  | 'refresh_tokens_pkey';

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'expiresAt'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'expiresAt'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'userId';

export type AuthRefreshTokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export type AuthRoles_Constraint =
  /** unique or primary key constraint on columns "role" */
  | 'roles_pkey';

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export type AuthRoles_Select_Column =
  /** column name */
  | 'role';

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export type AuthRoles_Update_Column =
  /** column name */
  | 'role';

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export type AuthUserProviders_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'user_providers_pkey'
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  | 'user_providers_provider_id_provider_user_id_key'
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  | 'user_providers_user_id_provider_id_key';

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export type AuthUserProviders_Select_Column =
  /** column name */
  | 'accessToken'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'providerId'
  /** column name */
  | 'providerUserId'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export type AuthUserProviders_Update_Column =
  /** column name */
  | 'accessToken'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'providerId'
  /** column name */
  | 'providerUserId'
  /** column name */
  | 'refreshToken'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export type AuthUserRoles_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'user_roles_pkey'
  /** unique or primary key constraint on columns "user_id", "role" */
  | 'user_roles_user_id_role_key';

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export type AuthUserRoles_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'role'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export type AuthUserRoles_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'role'
  /** column name */
  | 'userId';

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint'];
  credentialId: Scalars['String'];
  credentialPublicKey?: Maybe<Scalars['bytea']>;
  id: Scalars['uuid'];
  nickname?: Maybe<Scalars['String']>;
  transports: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Constraint =
  /** unique or primary key constraint on columns "credential_id" */
  | 'user_security_key_credential_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'user_security_keys_pkey';

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Select_Column =
  /** column name */
  | 'counter'
  /** column name */
  | 'credentialId'
  /** column name */
  | 'credentialPublicKey'
  /** column name */
  | 'id'
  /** column name */
  | 'nickname'
  /** column name */
  | 'transports'
  /** column name */
  | 'userId';

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Update_Column =
  /** column name */
  | 'counter'
  /** column name */
  | 'credentialId'
  /** column name */
  | 'credentialPublicKey'
  /** column name */
  | 'id'
  /** column name */
  | 'nickname'
  /** column name */
  | 'transports'
  /** column name */
  | 'userId';

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export type Buckets_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'buckets_pkey';

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export type Buckets_Select_Column =
  /** column name */
  | 'cacheControl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'downloadExpiration'
  /** column name */
  | 'id'
  /** column name */
  | 'maxUploadFileSize'
  /** column name */
  | 'minUploadFileSize'
  /** column name */
  | 'presignedUrlsEnabled'
  /** column name */
  | 'updatedAt';

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export type Buckets_Update_Column =
  /** column name */
  | 'cacheControl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'downloadExpiration'
  /** column name */
  | 'id'
  /** column name */
  | 'maxUploadFileSize'
  /** column name */
  | 'minUploadFileSize'
  /** column name */
  | 'presignedUrlsEnabled'
  /** column name */
  | 'updatedAt';

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  comment?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export type Categories_Constraint =
  /** unique or primary key constraint on columns "value" */
  | 'categories_pkey';

export type Categories_Enum =
  /** whatev */
  | 'essay'
  /** Novels */
  | 'novel';

/** Boolean expression to compare columns of type "categories_enum". All fields are combined with logical 'AND'. */
export type Categories_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Categories_Enum>;
  _in?: InputMaybe<Array<Categories_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Categories_Enum>;
  _nin?: InputMaybe<Array<Categories_Enum>>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "categories" */
export type Categories_Select_Column =
  /** column name */
  | 'comment'
  /** column name */
  | 'value';

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "categories" */
export type Categories_Update_Column =
  /** column name */
  | 'comment'
  /** column name */
  | 'value';

export type Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

export type Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export type Files_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'files_pkey';

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export type Files_Select_Column =
  /** column name */
  | 'bucketId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'etag'
  /** column name */
  | 'id'
  /** column name */
  | 'isUploaded'
  /** column name */
  | 'mimeType'
  /** column name */
  | 'name'
  /** column name */
  | 'size'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'uploadedByUserId';

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export type Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'isUploaded';

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export type Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'isUploaded';

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export type Files_Update_Column =
  /** column name */
  | 'bucketId'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'etag'
  /** column name */
  | 'id'
  /** column name */
  | 'isUploaded'
  /** column name */
  | 'mimeType'
  /** column name */
  | 'name'
  /** column name */
  | 'size'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'uploadedByUserId';

export type Files_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "todos" */
  deleteTodo?: Maybe<Todos>;
  /** delete data from the table: "todos" */
  deleteTodos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insertTodo?: Maybe<Todos>;
  /** insert data into the table: "todos" */
  insertTodos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "todos" */
  updateTodo?: Maybe<Todos>;
  /** update data of the table: "todos" */
  updateTodos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update multiples rows of table: "todos" */
  update_todos_many?: Maybe<Array<Maybe<Todos_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTodoArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTodoArgs = {
  object: Todos_Insert_Input;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTodoArgs = {
  _set?: InputMaybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTodosArgs = {
  _set?: InputMaybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_ManyArgs = {
  updates: Array<Todos_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todo?: Maybe<Todos>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todosAggregate: Todos_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootTodoArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Query_RootTodosAggregateArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "todos" using primary key columns */
  todo?: Maybe<Todos>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todosAggregate: Todos_Aggregate;
  /** fetch data from the table in a streaming manner: "todos" */
  todos_stream: Array<Todos>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootTodoArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodosAggregateArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Todos_Stream_Cursor_Input>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos';
  category?: Maybe<Categories_Enum>;
  contents: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename?: 'todos_aggregate';
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename?: 'todos_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
};


/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Todos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: InputMaybe<Array<Todos_Bool_Exp>>;
  _not?: InputMaybe<Todos_Bool_Exp>;
  _or?: InputMaybe<Array<Todos_Bool_Exp>>;
  category?: InputMaybe<Categories_Enum_Comparison_Exp>;
  contents?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export type Todos_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'todos_pkey';

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  category?: InputMaybe<Categories_Enum>;
  contents?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: 'todos_max_fields';
  contents?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: 'todos_min_fields';
  contents?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on_conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns?: Array<Todos_Update_Column>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

/** Ordering options when selecting data from "todos". */
export type Todos_Order_By = {
  category?: InputMaybe<Order_By>;
  contents?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todos */
export type Todos_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "todos" */
export type Todos_Select_Column =
  /** column name */
  | 'category'
  /** column name */
  | 'contents'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  category?: InputMaybe<Categories_Enum>;
  contents?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "todos" */
export type Todos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Todos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Todos_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Categories_Enum>;
  contents?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "todos" */
export type Todos_Update_Column =
  /** column name */
  | 'category'
  /** column name */
  | 'contents'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'id'
  /** column name */
  | 'updatedAt'
  /** column name */
  | 'userId';

export type Todos_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export type Users_Constraint =
  /** unique or primary key constraint on columns "email" */
  | 'users_email_key'
  /** unique or primary key constraint on columns "phone_number" */
  | 'users_phone_number_key'
  /** unique or primary key constraint on columns "id" */
  | 'users_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export type Users_Select_Column =
  /** column name */
  | 'activeMfaType'
  /** column name */
  | 'avatarUrl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'currentChallenge'
  /** column name */
  | 'defaultRole'
  /** column name */
  | 'disabled'
  /** column name */
  | 'displayName'
  /** column name */
  | 'email'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'id'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'lastSeen'
  /** column name */
  | 'locale'
  /** column name */
  | 'metadata'
  /** column name */
  | 'newEmail'
  /** column name */
  | 'otpHash'
  /** column name */
  | 'otpHashExpiresAt'
  /** column name */
  | 'otpMethodLastUsed'
  /** column name */
  | 'passwordHash'
  /** column name */
  | 'phoneNumber'
  /** column name */
  | 'phoneNumberVerified'
  /** column name */
  | 'ticket'
  /** column name */
  | 'ticketExpiresAt'
  /** column name */
  | 'totpSecret'
  /** column name */
  | 'updatedAt';

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export type Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'disabled'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'phoneNumberVerified';

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export type Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'disabled'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'phoneNumberVerified';

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export type Users_Update_Column =
  /** column name */
  | 'activeMfaType'
  /** column name */
  | 'avatarUrl'
  /** column name */
  | 'createdAt'
  /** column name */
  | 'currentChallenge'
  /** column name */
  | 'defaultRole'
  /** column name */
  | 'disabled'
  /** column name */
  | 'displayName'
  /** column name */
  | 'email'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'id'
  /** column name */
  | 'isAnonymous'
  /** column name */
  | 'lastSeen'
  /** column name */
  | 'locale'
  /** column name */
  | 'metadata'
  /** column name */
  | 'newEmail'
  /** column name */
  | 'otpHash'
  /** column name */
  | 'otpHashExpiresAt'
  /** column name */
  | 'otpMethodLastUsed'
  /** column name */
  | 'passwordHash'
  /** column name */
  | 'phoneNumber'
  /** column name */
  | 'phoneNumberVerified'
  /** column name */
  | 'ticket'
  /** column name */
  | 'ticketExpiresAt'
  /** column name */
  | 'totpSecret'
  /** column name */
  | 'updatedAt';

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};


export default {
  introspection: {
    "__schema": {
      "queryType": {
        "name": "query_root"
      },
      "mutationType": {
        "name": "mutation_root"
      },
      "subscriptionType": {
        "name": "subscription_root"
      },
      "types": [
        {
          "kind": "OBJECT",
          "name": "authProviderRequests",
          "fields": [
            {
              "name": "id",
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
              "name": "options",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": [
                {
                  "name": "path",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviderRequests_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviderRequests",
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
          "kind": "OBJECT",
          "name": "authProviderRequests_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviderRequests_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "authProviderRequests_constraint",
          "enumValues": [
            {
              "name": "provider_requests_pkey"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authProviderRequests_max_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviderRequests_min_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviderRequests_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
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
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviderRequests",
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
          "kind": "ENUM",
          "name": "authProviderRequests_select_column",
          "enumValues": [
            {
              "name": "id"
            },
            {
              "name": "options"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authProviderRequests_update_column",
          "enumValues": [
            {
              "name": "id"
            },
            {
              "name": "options"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authProviders",
          "fields": [
            {
              "name": "id",
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
              "name": "userProviders",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "userProviders_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserProviders_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviders_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviders",
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
          "kind": "OBJECT",
          "name": "authProviders_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "authProviders_constraint",
          "enumValues": [
            {
              "name": "providers_pkey"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authProviders_max_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviders_min_fields",
          "fields": [
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authProviders_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
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
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviders",
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
          "kind": "ENUM",
          "name": "authProviders_select_column",
          "enumValues": [
            {
              "name": "id"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authProviders_update_column",
          "enumValues": [
            {
              "name": "id"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authRefreshTokens",
          "fields": [
            {
              "name": "createdAt",
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
              "name": "expiresAt",
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
              "name": "refreshToken",
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
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "userId",
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
          "name": "authRefreshTokens_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRefreshTokens",
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
          "kind": "OBJECT",
          "name": "authRefreshTokens_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "authRefreshTokens_constraint",
          "enumValues": [
            {
              "name": "refresh_tokens_pkey"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authRefreshTokens_max_fields",
          "fields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "expiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authRefreshTokens_min_fields",
          "fields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "expiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authRefreshTokens_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
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
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRefreshTokens",
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
          "kind": "ENUM",
          "name": "authRefreshTokens_select_column",
          "enumValues": [
            {
              "name": "createdAt"
            },
            {
              "name": "expiresAt"
            },
            {
              "name": "refreshToken"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authRefreshTokens_update_column",
          "enumValues": [
            {
              "name": "createdAt"
            },
            {
              "name": "expiresAt"
            },
            {
              "name": "refreshToken"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authRoles",
          "fields": [
            {
              "name": "role",
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
              "name": "userRoles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "userRoles_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserRoles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "usersByDefaultRole",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "usersByDefaultRole_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authRoles_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRoles",
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
          "kind": "OBJECT",
          "name": "authRoles_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "authRoles_constraint",
          "enumValues": [
            {
              "name": "roles_pkey"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authRoles_max_fields",
          "fields": [
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authRoles_min_fields",
          "fields": [
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authRoles_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
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
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRoles",
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
          "kind": "ENUM",
          "name": "authRoles_select_column",
          "enumValues": [
            {
              "name": "role"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authRoles_update_column",
          "enumValues": [
            {
              "name": "role"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserProviders",
          "fields": [
            {
              "name": "accessToken",
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
              "name": "createdAt",
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
              "name": "id",
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
              "name": "provider",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviders",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "providerId",
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
              "name": "providerUserId",
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
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "updatedAt",
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
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "userId",
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
          "name": "authUserProviders_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
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
          "kind": "OBJECT",
          "name": "authUserProviders_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "authUserProviders_constraint",
          "enumValues": [
            {
              "name": "user_providers_pkey"
            },
            {
              "name": "user_providers_provider_id_provider_user_id_key"
            },
            {
              "name": "user_providers_user_id_provider_id_key"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserProviders_max_fields",
          "fields": [
            {
              "name": "accessToken",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "providerId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "providerUserId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserProviders_min_fields",
          "fields": [
            {
              "name": "accessToken",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "providerId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "providerUserId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "refreshToken",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserProviders_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
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
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
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
          "kind": "ENUM",
          "name": "authUserProviders_select_column",
          "enumValues": [
            {
              "name": "accessToken"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "id"
            },
            {
              "name": "providerId"
            },
            {
              "name": "providerUserId"
            },
            {
              "name": "refreshToken"
            },
            {
              "name": "updatedAt"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authUserProviders_update_column",
          "enumValues": [
            {
              "name": "accessToken"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "id"
            },
            {
              "name": "providerId"
            },
            {
              "name": "providerUserId"
            },
            {
              "name": "refreshToken"
            },
            {
              "name": "updatedAt"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserRoles",
          "fields": [
            {
              "name": "createdAt",
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
              "name": "id",
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
              "name": "role",
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
              "name": "roleByRole",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRoles",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "userId",
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
          "name": "authUserRoles_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
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
          "kind": "OBJECT",
          "name": "authUserRoles_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "authUserRoles_constraint",
          "enumValues": [
            {
              "name": "user_roles_pkey"
            },
            {
              "name": "user_roles_user_id_role_key"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserRoles_max_fields",
          "fields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserRoles_min_fields",
          "fields": [
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "role",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserRoles_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
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
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
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
          "kind": "ENUM",
          "name": "authUserRoles_select_column",
          "enumValues": [
            {
              "name": "createdAt"
            },
            {
              "name": "id"
            },
            {
              "name": "role"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "authUserRoles_update_column",
          "enumValues": [
            {
              "name": "createdAt"
            },
            {
              "name": "id"
            },
            {
              "name": "role"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys",
          "fields": [
            {
              "name": "counter",
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
              "name": "credentialId",
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
              "name": "credentialPublicKey",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
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
              "name": "nickname",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "transports",
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
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "userId",
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
          "name": "authUserSecurityKeys_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserSecurityKeys",
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
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_aggregate_fields",
          "fields": [
            {
              "name": "avg",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_avg_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_min_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_stddev_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev_pop",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_stddev_pop_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev_samp",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_stddev_samp_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "sum",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_sum_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "var_pop",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_var_pop_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "var_samp",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_var_samp_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "variance",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_variance_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_avg_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "authUserSecurityKeys_constraint",
          "enumValues": [
            {
              "name": "user_security_key_credential_id_key"
            },
            {
              "name": "user_security_keys_pkey"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_max_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "credentialId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "nickname",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "transports",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_min_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "credentialId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "nickname",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "transports",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
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
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserSecurityKeys",
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
          "kind": "ENUM",
          "name": "authUserSecurityKeys_select_column",
          "enumValues": [
            {
              "name": "counter"
            },
            {
              "name": "credentialId"
            },
            {
              "name": "credentialPublicKey"
            },
            {
              "name": "id"
            },
            {
              "name": "nickname"
            },
            {
              "name": "transports"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_stddev_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_stddev_pop_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_stddev_samp_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_sum_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "authUserSecurityKeys_update_column",
          "enumValues": [
            {
              "name": "counter"
            },
            {
              "name": "credentialId"
            },
            {
              "name": "credentialPublicKey"
            },
            {
              "name": "id"
            },
            {
              "name": "nickname"
            },
            {
              "name": "transports"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_var_pop_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_var_samp_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "authUserSecurityKeys_variance_fields",
          "fields": [
            {
              "name": "counter",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "buckets",
          "fields": [
            {
              "name": "cacheControl",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "createdAt",
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
              "name": "downloadExpiration",
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
              "name": "files",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "files",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "files_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "files_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "files_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "files_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "id",
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
              "name": "maxUploadFileSize",
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
              "name": "minUploadFileSize",
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
              "name": "presignedUrlsEnabled",
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
              "name": "updatedAt",
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
          "name": "buckets_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "buckets",
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
          "kind": "OBJECT",
          "name": "buckets_aggregate_fields",
          "fields": [
            {
              "name": "avg",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_avg_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "buckets_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_min_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_stddev_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev_pop",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_stddev_pop_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev_samp",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_stddev_samp_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "sum",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_sum_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "var_pop",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_var_pop_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "var_samp",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_var_samp_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "variance",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_variance_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "buckets_avg_fields",
          "fields": [
            {
              "name": "downloadExpiration",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "maxUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "minUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "buckets_constraint",
          "enumValues": [
            {
              "name": "buckets_pkey"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "buckets_max_fields",
          "fields": [
            {
              "name": "cacheControl",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "downloadExpiration",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "maxUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "minUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "buckets_min_fields",
          "fields": [
            {
              "name": "cacheControl",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "downloadExpiration",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "maxUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "minUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "buckets_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
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
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "buckets",
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
          "kind": "ENUM",
          "name": "buckets_select_column",
          "enumValues": [
            {
              "name": "cacheControl"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "downloadExpiration"
            },
            {
              "name": "id"
            },
            {
              "name": "maxUploadFileSize"
            },
            {
              "name": "minUploadFileSize"
            },
            {
              "name": "presignedUrlsEnabled"
            },
            {
              "name": "updatedAt"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "buckets_stddev_fields",
          "fields": [
            {
              "name": "downloadExpiration",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "maxUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "minUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "buckets_stddev_pop_fields",
          "fields": [
            {
              "name": "downloadExpiration",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "maxUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "minUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "buckets_stddev_samp_fields",
          "fields": [
            {
              "name": "downloadExpiration",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "maxUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "minUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "buckets_sum_fields",
          "fields": [
            {
              "name": "downloadExpiration",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "maxUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "minUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "buckets_update_column",
          "enumValues": [
            {
              "name": "cacheControl"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "downloadExpiration"
            },
            {
              "name": "id"
            },
            {
              "name": "maxUploadFileSize"
            },
            {
              "name": "minUploadFileSize"
            },
            {
              "name": "presignedUrlsEnabled"
            },
            {
              "name": "updatedAt"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "buckets_var_pop_fields",
          "fields": [
            {
              "name": "downloadExpiration",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "maxUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "minUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "buckets_var_samp_fields",
          "fields": [
            {
              "name": "downloadExpiration",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "maxUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "minUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "buckets_variance_fields",
          "fields": [
            {
              "name": "downloadExpiration",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "maxUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "minUploadFileSize",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "categories",
          "fields": [
            {
              "name": "comment",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
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
          "name": "categories_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "categories_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "categories",
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
          "kind": "OBJECT",
          "name": "categories_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "categories_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "categories_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "categories_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "categories_constraint",
          "enumValues": [
            {
              "name": "categories_pkey"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "categories_enum",
          "enumValues": [
            {
              "name": "essay"
            },
            {
              "name": "novel"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "categories_max_fields",
          "fields": [
            {
              "name": "comment",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "value",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "categories_min_fields",
          "fields": [
            {
              "name": "comment",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "value",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "categories_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
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
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "categories",
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
          "kind": "ENUM",
          "name": "categories_select_column",
          "enumValues": [
            {
              "name": "comment"
            },
            {
              "name": "value"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "categories_update_column",
          "enumValues": [
            {
              "name": "comment"
            },
            {
              "name": "value"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "cursor_ordering",
          "enumValues": [
            {
              "name": "ASC"
            },
            {
              "name": "DESC"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "files",
          "fields": [
            {
              "name": "bucket",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "buckets",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "bucketId",
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
              "name": "createdAt",
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
              "name": "etag",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
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
              "name": "isUploaded",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "mimeType",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "size",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "updatedAt",
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
              "name": "uploadedByUserId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "files_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "files_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "files",
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
          "kind": "OBJECT",
          "name": "files_aggregate_fields",
          "fields": [
            {
              "name": "avg",
              "type": {
                "kind": "OBJECT",
                "name": "files_avg_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "files_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "files_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "files_min_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev",
              "type": {
                "kind": "OBJECT",
                "name": "files_stddev_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev_pop",
              "type": {
                "kind": "OBJECT",
                "name": "files_stddev_pop_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "stddev_samp",
              "type": {
                "kind": "OBJECT",
                "name": "files_stddev_samp_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "sum",
              "type": {
                "kind": "OBJECT",
                "name": "files_sum_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "var_pop",
              "type": {
                "kind": "OBJECT",
                "name": "files_var_pop_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "var_samp",
              "type": {
                "kind": "OBJECT",
                "name": "files_var_samp_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "variance",
              "type": {
                "kind": "OBJECT",
                "name": "files_variance_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "files_avg_fields",
          "fields": [
            {
              "name": "size",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "files_constraint",
          "enumValues": [
            {
              "name": "files_pkey"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "files_max_fields",
          "fields": [
            {
              "name": "bucketId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "etag",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "mimeType",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "size",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "uploadedByUserId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "files_min_fields",
          "fields": [
            {
              "name": "bucketId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "etag",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "mimeType",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "name",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "size",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "uploadedByUserId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "files_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
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
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "files",
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
          "kind": "ENUM",
          "name": "files_select_column",
          "enumValues": [
            {
              "name": "bucketId"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "etag"
            },
            {
              "name": "id"
            },
            {
              "name": "isUploaded"
            },
            {
              "name": "mimeType"
            },
            {
              "name": "name"
            },
            {
              "name": "size"
            },
            {
              "name": "updatedAt"
            },
            {
              "name": "uploadedByUserId"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "files_select_column_files_aggregate_bool_exp_bool_and_arguments_columns",
          "enumValues": [
            {
              "name": "isUploaded"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "files_select_column_files_aggregate_bool_exp_bool_or_arguments_columns",
          "enumValues": [
            {
              "name": "isUploaded"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "files_stddev_fields",
          "fields": [
            {
              "name": "size",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "files_stddev_pop_fields",
          "fields": [
            {
              "name": "size",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "files_stddev_samp_fields",
          "fields": [
            {
              "name": "size",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "files_sum_fields",
          "fields": [
            {
              "name": "size",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "files_update_column",
          "enumValues": [
            {
              "name": "bucketId"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "etag"
            },
            {
              "name": "id"
            },
            {
              "name": "isUploaded"
            },
            {
              "name": "mimeType"
            },
            {
              "name": "name"
            },
            {
              "name": "size"
            },
            {
              "name": "updatedAt"
            },
            {
              "name": "uploadedByUserId"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "files_var_pop_fields",
          "fields": [
            {
              "name": "size",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "files_var_samp_fields",
          "fields": [
            {
              "name": "size",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "files_variance_fields",
          "fields": [
            {
              "name": "size",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "mutation_root",
          "fields": [
            {
              "name": "deleteAuthProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthProviderRequest",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthProviderRequests",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthProviders",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthRefreshToken",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens",
                "ofType": null
              },
              "args": [
                {
                  "name": "refreshToken",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthRefreshTokens",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthRole",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "role",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthRoles",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthUserProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthUserProviders",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthUserRole",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthUserRoles",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthUserSecurityKey",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteAuthUserSecurityKeys",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteBucket",
              "type": {
                "kind": "OBJECT",
                "name": "buckets",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteBuckets",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteFile",
              "type": {
                "kind": "OBJECT",
                "name": "files",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteFiles",
              "type": {
                "kind": "OBJECT",
                "name": "files_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteTodo",
              "type": {
                "kind": "OBJECT",
                "name": "todos",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteTodos",
              "type": {
                "kind": "OBJECT",
                "name": "todos_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteUser",
              "type": {
                "kind": "OBJECT",
                "name": "users",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "deleteUsers",
              "type": {
                "kind": "OBJECT",
                "name": "users_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "delete_categories",
              "type": {
                "kind": "OBJECT",
                "name": "categories_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "delete_categories_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "categories",
                "ofType": null
              },
              "args": [
                {
                  "name": "value",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "insertAuthProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertAuthProviderRequest",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertAuthProviderRequests",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertAuthProviders",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertAuthRefreshToken",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertAuthRefreshTokens",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertAuthRole",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertAuthRoles",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertAuthUserProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertAuthUserProviders",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertAuthUserRole",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertAuthUserRoles",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertAuthUserSecurityKey",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertAuthUserSecurityKeys",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertBucket",
              "type": {
                "kind": "OBJECT",
                "name": "buckets",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertBuckets",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertFile",
              "type": {
                "kind": "OBJECT",
                "name": "files",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertFiles",
              "type": {
                "kind": "OBJECT",
                "name": "files_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertTodo",
              "type": {
                "kind": "OBJECT",
                "name": "todos",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertTodos",
              "type": {
                "kind": "OBJECT",
                "name": "todos_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertUser",
              "type": {
                "kind": "OBJECT",
                "name": "users",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insertUsers",
              "type": {
                "kind": "OBJECT",
                "name": "users_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insert_categories",
              "type": {
                "kind": "OBJECT",
                "name": "categories_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "objects",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "insert_categories_one",
              "type": {
                "kind": "OBJECT",
                "name": "categories",
                "ofType": null
              },
              "args": [
                {
                  "name": "object",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "on_conflict",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "updateAuthProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthProviderRequest",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests",
                "ofType": null
              },
              "args": [
                {
                  "name": "_append",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_delete_at_path",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_delete_elem",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_delete_key",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_prepend",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthProviderRequests",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_append",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_delete_at_path",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_delete_elem",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_delete_key",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_prepend",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthProviders",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthRefreshToken",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthRefreshTokens",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthRole",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthRoles",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthUserProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthUserProviders",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthUserRole",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthUserRoles",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthUserSecurityKey",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys",
                "ofType": null
              },
              "args": [
                {
                  "name": "_inc",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateAuthUserSecurityKeys",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_inc",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateBucket",
              "type": {
                "kind": "OBJECT",
                "name": "buckets",
                "ofType": null
              },
              "args": [
                {
                  "name": "_inc",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateBuckets",
              "type": {
                "kind": "OBJECT",
                "name": "buckets_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_inc",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateFile",
              "type": {
                "kind": "OBJECT",
                "name": "files",
                "ofType": null
              },
              "args": [
                {
                  "name": "_inc",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateFiles",
              "type": {
                "kind": "OBJECT",
                "name": "files_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_inc",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateTodo",
              "type": {
                "kind": "OBJECT",
                "name": "todos",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateTodos",
              "type": {
                "kind": "OBJECT",
                "name": "todos_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateUser",
              "type": {
                "kind": "OBJECT",
                "name": "users",
                "ofType": null
              },
              "args": [
                {
                  "name": "_append",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_delete_at_path",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_delete_elem",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_delete_key",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_prepend",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "updateUsers",
              "type": {
                "kind": "OBJECT",
                "name": "users_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_append",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_delete_at_path",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_delete_elem",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_delete_key",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_prepend",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authProviderRequests_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviderRequests_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authProviders_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviders_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authRefreshTokens_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRefreshTokens_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authRoles_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRoles_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authUserProviders_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserProviders_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authUserRoles_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserRoles_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_authUserSecurityKeys_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserSecurityKeys_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_buckets_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "buckets_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_categories",
              "type": {
                "kind": "OBJECT",
                "name": "categories_mutation_response",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "update_categories_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "categories",
                "ofType": null
              },
              "args": [
                {
                  "name": "_set",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "pk_columns",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "update_categories_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "categories_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_files_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "files_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_todos_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "todos_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "name": "update_users_many",
              "type": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users_mutation_response",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "updates",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "NON_NULL",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "Any"
                        }
                      }
                    }
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "order_by",
          "enumValues": [
            {
              "name": "asc"
            },
            {
              "name": "asc_nulls_first"
            },
            {
              "name": "asc_nulls_last"
            },
            {
              "name": "desc"
            },
            {
              "name": "desc_nulls_first"
            },
            {
              "name": "desc_nulls_last"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "query_root",
          "fields": [
            {
              "name": "authProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authProviderRequest",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authProviderRequests",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviderRequests",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviderRequests_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authProviderRequestsAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviderRequests_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviderRequests_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authProviders",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authProvidersAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviders_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authRefreshToken",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens",
                "ofType": null
              },
              "args": [
                {
                  "name": "refreshToken",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authRefreshTokens",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRefreshTokens",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authRefreshTokensAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRefreshTokens_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authRole",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "role",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authRoles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authRolesAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRoles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authUserProviders",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserProvidersAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserProviders_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserRole",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authUserRoles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserRolesAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserRoles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKey",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKeys",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserSecurityKeys",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKeysAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserSecurityKeys_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "bucket",
              "type": {
                "kind": "OBJECT",
                "name": "buckets",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "buckets",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "buckets",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "buckets_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "bucketsAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "buckets_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "buckets_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "categories",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "categories",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "categories_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "categories_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "categories_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "categories_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "categories_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "categories",
                "ofType": null
              },
              "args": [
                {
                  "name": "value",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "file",
              "type": {
                "kind": "OBJECT",
                "name": "files",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "files",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "files",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "files_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "filesAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "files_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "files_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "todo",
              "type": {
                "kind": "OBJECT",
                "name": "todos",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "todos",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "todos",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "todos_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "todosAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "todos_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "todos_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "user",
              "type": {
                "kind": "OBJECT",
                "name": "users",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "users",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "usersAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "subscription_root",
          "fields": [
            {
              "name": "authProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authProviderRequest",
              "type": {
                "kind": "OBJECT",
                "name": "authProviderRequests",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authProviderRequests",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviderRequests",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviderRequests_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authProviderRequestsAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviderRequests_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviderRequests_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authProviderRequests_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviderRequests",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authProviders",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authProvidersAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authProviders_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authProviders_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authRefreshToken",
              "type": {
                "kind": "OBJECT",
                "name": "authRefreshTokens",
                "ofType": null
              },
              "args": [
                {
                  "name": "refreshToken",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authRefreshTokens",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRefreshTokens",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authRefreshTokensAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRefreshTokens_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authRefreshTokens_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRefreshTokens",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authRole",
              "type": {
                "kind": "OBJECT",
                "name": "authRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "role",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authRoles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authRolesAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRoles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authRoles_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserProvider",
              "type": {
                "kind": "OBJECT",
                "name": "authUserProviders",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authUserProviders",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserProvidersAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserProviders_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserProviders_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserRole",
              "type": {
                "kind": "OBJECT",
                "name": "authUserRoles",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authUserRoles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserRolesAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserRoles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserRoles_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKey",
              "type": {
                "kind": "OBJECT",
                "name": "authUserSecurityKeys",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKeys",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserSecurityKeys",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKeysAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserSecurityKeys_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "authUserSecurityKeys_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserSecurityKeys",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "bucket",
              "type": {
                "kind": "OBJECT",
                "name": "buckets",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "buckets",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "buckets",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "buckets_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "bucketsAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "buckets_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "buckets_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "buckets_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "buckets",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "categories",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "categories",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "categories_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "categories_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "categories_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "categories_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "categories_by_pk",
              "type": {
                "kind": "OBJECT",
                "name": "categories",
                "ofType": null
              },
              "args": [
                {
                  "name": "value",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "categories_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "categories",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "file",
              "type": {
                "kind": "OBJECT",
                "name": "files",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "files",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "files",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "files_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "filesAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "files_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "files_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "files_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "files",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "todo",
              "type": {
                "kind": "OBJECT",
                "name": "todos",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "todos",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "todos",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "todos_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "todosAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "todos_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "todos_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "todos_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "todos",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "user",
              "type": {
                "kind": "OBJECT",
                "name": "users",
                "ofType": null
              },
              "args": [
                {
                  "name": "id",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              ]
            },
            {
              "name": "users",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "usersAggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "users_stream",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "batch_size",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                },
                {
                  "name": "cursor",
                  "type": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "LIST",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "todos",
          "fields": [
            {
              "name": "category",
              "type": {
                "kind": "ENUM",
                "name": "categories_enum",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "contents",
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
              "name": "createdAt",
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
              "name": "id",
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
              "name": "updatedAt",
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
              "name": "user",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "users",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "userId",
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
          "name": "todos_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "todos_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "todos",
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
          "kind": "OBJECT",
          "name": "todos_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "todos_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "todos_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "todos_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "todos_constraint",
          "enumValues": [
            {
              "name": "todos_pkey"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "todos_max_fields",
          "fields": [
            {
              "name": "contents",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "todos_min_fields",
          "fields": [
            {
              "name": "contents",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "userId",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "todos_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
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
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "todos",
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
          "kind": "ENUM",
          "name": "todos_select_column",
          "enumValues": [
            {
              "name": "category"
            },
            {
              "name": "contents"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "id"
            },
            {
              "name": "updatedAt"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "todos_update_column",
          "enumValues": [
            {
              "name": "category"
            },
            {
              "name": "contents"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "id"
            },
            {
              "name": "updatedAt"
            },
            {
              "name": "userId"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "users",
          "fields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "avatarUrl",
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
              "name": "createdAt",
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
              "name": "currentChallenge",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "defaultRole",
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
              "name": "defaultRoleByRole",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRoles",
                  "ofType": null
                }
              },
              "args": []
            },
            {
              "name": "disabled",
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
              "name": "displayName",
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
              "name": "email",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "emailVerified",
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
              "name": "id",
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
              "name": "isAnonymous",
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
              "name": "lastSeen",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "locale",
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
              "name": "metadata",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": [
                {
                  "name": "path",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "otpHashExpiresAt",
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
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "phoneNumberVerified",
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
              "name": "refreshTokens",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authRefreshTokens",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "refreshTokens_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authRefreshTokens_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authRefreshTokens_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "roles",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserRoles",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "roles_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserRoles_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserRoles_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "securityKeys",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserSecurityKeys",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "securityKeys_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserSecurityKeys_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserSecurityKeys_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "ticket",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "ticketExpiresAt",
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
              "name": "totpSecret",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "updatedAt",
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
              "name": "userProviders",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "authUserProviders",
                      "ofType": null
                    }
                  }
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "userProviders_aggregate",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "authUserProviders_aggregate",
                  "ofType": null
                }
              },
              "args": [
                {
                  "name": "distinct_on",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "authUserProviders_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "limit",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "offset",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                },
                {
                  "name": "order_by",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                },
                {
                  "name": "where",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "users_aggregate",
          "fields": [
            {
              "name": "aggregate",
              "type": {
                "kind": "OBJECT",
                "name": "users_aggregate_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "nodes",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
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
          "kind": "OBJECT",
          "name": "users_aggregate_fields",
          "fields": [
            {
              "name": "count",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              "args": [
                {
                  "name": "columns",
                  "type": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "users_select_column",
                        "ofType": null
                      }
                    }
                  }
                },
                {
                  "name": "distinct",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              ]
            },
            {
              "name": "max",
              "type": {
                "kind": "OBJECT",
                "name": "users_max_fields",
                "ofType": null
              },
              "args": []
            },
            {
              "name": "min",
              "type": {
                "kind": "OBJECT",
                "name": "users_min_fields",
                "ofType": null
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "ENUM",
          "name": "users_constraint",
          "enumValues": [
            {
              "name": "users_email_key"
            },
            {
              "name": "users_phone_number_key"
            },
            {
              "name": "users_pkey"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "users_max_fields",
          "fields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "displayName",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "email",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "locale",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "ticket",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "users_min_fields",
          "fields": [
            {
              "name": "activeMfaType",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "avatarUrl",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "createdAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "currentChallenge",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "defaultRole",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "displayName",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "email",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "id",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "lastSeen",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "locale",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "newEmail",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "otpHash",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "otpHashExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "otpMethodLastUsed",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "passwordHash",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "phoneNumber",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "ticket",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "ticketExpiresAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "totpSecret",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            },
            {
              "name": "updatedAt",
              "type": {
                "kind": "SCALAR",
                "name": "Any"
              },
              "args": []
            }
          ],
          "interfaces": []
        },
        {
          "kind": "OBJECT",
          "name": "users_mutation_response",
          "fields": [
            {
              "name": "affected_rows",
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
              "name": "returning",
              "type": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "users",
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
          "kind": "ENUM",
          "name": "users_select_column",
          "enumValues": [
            {
              "name": "activeMfaType"
            },
            {
              "name": "avatarUrl"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "currentChallenge"
            },
            {
              "name": "defaultRole"
            },
            {
              "name": "disabled"
            },
            {
              "name": "displayName"
            },
            {
              "name": "email"
            },
            {
              "name": "emailVerified"
            },
            {
              "name": "id"
            },
            {
              "name": "isAnonymous"
            },
            {
              "name": "lastSeen"
            },
            {
              "name": "locale"
            },
            {
              "name": "metadata"
            },
            {
              "name": "newEmail"
            },
            {
              "name": "otpHash"
            },
            {
              "name": "otpHashExpiresAt"
            },
            {
              "name": "otpMethodLastUsed"
            },
            {
              "name": "passwordHash"
            },
            {
              "name": "phoneNumber"
            },
            {
              "name": "phoneNumberVerified"
            },
            {
              "name": "ticket"
            },
            {
              "name": "ticketExpiresAt"
            },
            {
              "name": "totpSecret"
            },
            {
              "name": "updatedAt"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "users_select_column_users_aggregate_bool_exp_bool_and_arguments_columns",
          "enumValues": [
            {
              "name": "disabled"
            },
            {
              "name": "emailVerified"
            },
            {
              "name": "isAnonymous"
            },
            {
              "name": "phoneNumberVerified"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "users_select_column_users_aggregate_bool_exp_bool_or_arguments_columns",
          "enumValues": [
            {
              "name": "disabled"
            },
            {
              "name": "emailVerified"
            },
            {
              "name": "isAnonymous"
            },
            {
              "name": "phoneNumberVerified"
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "users_update_column",
          "enumValues": [
            {
              "name": "activeMfaType"
            },
            {
              "name": "avatarUrl"
            },
            {
              "name": "createdAt"
            },
            {
              "name": "currentChallenge"
            },
            {
              "name": "defaultRole"
            },
            {
              "name": "disabled"
            },
            {
              "name": "displayName"
            },
            {
              "name": "email"
            },
            {
              "name": "emailVerified"
            },
            {
              "name": "id"
            },
            {
              "name": "isAnonymous"
            },
            {
              "name": "lastSeen"
            },
            {
              "name": "locale"
            },
            {
              "name": "metadata"
            },
            {
              "name": "newEmail"
            },
            {
              "name": "otpHash"
            },
            {
              "name": "otpHashExpiresAt"
            },
            {
              "name": "otpMethodLastUsed"
            },
            {
              "name": "passwordHash"
            },
            {
              "name": "phoneNumber"
            },
            {
              "name": "phoneNumberVerified"
            },
            {
              "name": "ticket"
            },
            {
              "name": "ticketExpiresAt"
            },
            {
              "name": "totpSecret"
            },
            {
              "name": "updatedAt"
            }
          ]
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
    Boolean_Comparison_Exp: Boolean_Comparison_Exp,
    Int_Comparison_Exp: Int_Comparison_Exp,
    String_Comparison_Exp: String_Comparison_Exp,
    AuthProviderRequests: AuthProviderRequests,
    AuthProviderRequestsOptionsArgs: AuthProviderRequestsOptionsArgs,
    AuthProviderRequests_Aggregate: AuthProviderRequests_Aggregate,
    AuthProviderRequests_Aggregate_Fields: AuthProviderRequests_Aggregate_Fields,
    AuthProviderRequests_Aggregate_FieldsCountArgs: AuthProviderRequests_Aggregate_FieldsCountArgs,
    AuthProviderRequests_Append_Input: AuthProviderRequests_Append_Input,
    AuthProviderRequests_Bool_Exp: AuthProviderRequests_Bool_Exp,
    AuthProviderRequests_Delete_At_Path_Input: AuthProviderRequests_Delete_At_Path_Input,
    AuthProviderRequests_Delete_Elem_Input: AuthProviderRequests_Delete_Elem_Input,
    AuthProviderRequests_Delete_Key_Input: AuthProviderRequests_Delete_Key_Input,
    AuthProviderRequests_Insert_Input: AuthProviderRequests_Insert_Input,
    AuthProviderRequests_Max_Fields: AuthProviderRequests_Max_Fields,
    AuthProviderRequests_Min_Fields: AuthProviderRequests_Min_Fields,
    AuthProviderRequests_Mutation_Response: AuthProviderRequests_Mutation_Response,
    AuthProviderRequests_On_Conflict: AuthProviderRequests_On_Conflict,
    AuthProviderRequests_Order_By: AuthProviderRequests_Order_By,
    AuthProviderRequests_Pk_Columns_Input: AuthProviderRequests_Pk_Columns_Input,
    AuthProviderRequests_Prepend_Input: AuthProviderRequests_Prepend_Input,
    AuthProviderRequests_Set_Input: AuthProviderRequests_Set_Input,
    AuthProviderRequests_Stream_Cursor_Input: AuthProviderRequests_Stream_Cursor_Input,
    AuthProviderRequests_Stream_Cursor_Value_Input: AuthProviderRequests_Stream_Cursor_Value_Input,
    AuthProviderRequests_Updates: AuthProviderRequests_Updates,
    AuthProviders: AuthProviders,
    AuthProvidersUserProvidersArgs: AuthProvidersUserProvidersArgs,
    AuthProvidersUserProviders_AggregateArgs: AuthProvidersUserProviders_AggregateArgs,
    AuthProviders_Aggregate: AuthProviders_Aggregate,
    AuthProviders_Aggregate_Fields: AuthProviders_Aggregate_Fields,
    AuthProviders_Aggregate_FieldsCountArgs: AuthProviders_Aggregate_FieldsCountArgs,
    AuthProviders_Bool_Exp: AuthProviders_Bool_Exp,
    AuthProviders_Insert_Input: AuthProviders_Insert_Input,
    AuthProviders_Max_Fields: AuthProviders_Max_Fields,
    AuthProviders_Min_Fields: AuthProviders_Min_Fields,
    AuthProviders_Mutation_Response: AuthProviders_Mutation_Response,
    AuthProviders_Obj_Rel_Insert_Input: AuthProviders_Obj_Rel_Insert_Input,
    AuthProviders_On_Conflict: AuthProviders_On_Conflict,
    AuthProviders_Order_By: AuthProviders_Order_By,
    AuthProviders_Pk_Columns_Input: AuthProviders_Pk_Columns_Input,
    AuthProviders_Set_Input: AuthProviders_Set_Input,
    AuthProviders_Stream_Cursor_Input: AuthProviders_Stream_Cursor_Input,
    AuthProviders_Stream_Cursor_Value_Input: AuthProviders_Stream_Cursor_Value_Input,
    AuthProviders_Updates: AuthProviders_Updates,
    AuthRefreshTokens: AuthRefreshTokens,
    AuthRefreshTokens_Aggregate: AuthRefreshTokens_Aggregate,
    AuthRefreshTokens_Aggregate_Bool_Exp: AuthRefreshTokens_Aggregate_Bool_Exp,
    AuthRefreshTokens_Aggregate_Bool_Exp_Count: AuthRefreshTokens_Aggregate_Bool_Exp_Count,
    AuthRefreshTokens_Aggregate_Fields: AuthRefreshTokens_Aggregate_Fields,
    AuthRefreshTokens_Aggregate_FieldsCountArgs: AuthRefreshTokens_Aggregate_FieldsCountArgs,
    AuthRefreshTokens_Aggregate_Order_By: AuthRefreshTokens_Aggregate_Order_By,
    AuthRefreshTokens_Arr_Rel_Insert_Input: AuthRefreshTokens_Arr_Rel_Insert_Input,
    AuthRefreshTokens_Bool_Exp: AuthRefreshTokens_Bool_Exp,
    AuthRefreshTokens_Insert_Input: AuthRefreshTokens_Insert_Input,
    AuthRefreshTokens_Max_Fields: AuthRefreshTokens_Max_Fields,
    AuthRefreshTokens_Max_Order_By: AuthRefreshTokens_Max_Order_By,
    AuthRefreshTokens_Min_Fields: AuthRefreshTokens_Min_Fields,
    AuthRefreshTokens_Min_Order_By: AuthRefreshTokens_Min_Order_By,
    AuthRefreshTokens_Mutation_Response: AuthRefreshTokens_Mutation_Response,
    AuthRefreshTokens_On_Conflict: AuthRefreshTokens_On_Conflict,
    AuthRefreshTokens_Order_By: AuthRefreshTokens_Order_By,
    AuthRefreshTokens_Pk_Columns_Input: AuthRefreshTokens_Pk_Columns_Input,
    AuthRefreshTokens_Set_Input: AuthRefreshTokens_Set_Input,
    AuthRefreshTokens_Stream_Cursor_Input: AuthRefreshTokens_Stream_Cursor_Input,
    AuthRefreshTokens_Stream_Cursor_Value_Input: AuthRefreshTokens_Stream_Cursor_Value_Input,
    AuthRefreshTokens_Updates: AuthRefreshTokens_Updates,
    AuthRoles: AuthRoles,
    AuthRolesUserRolesArgs: AuthRolesUserRolesArgs,
    AuthRolesUserRoles_AggregateArgs: AuthRolesUserRoles_AggregateArgs,
    AuthRolesUsersByDefaultRoleArgs: AuthRolesUsersByDefaultRoleArgs,
    AuthRolesUsersByDefaultRole_AggregateArgs: AuthRolesUsersByDefaultRole_AggregateArgs,
    AuthRoles_Aggregate: AuthRoles_Aggregate,
    AuthRoles_Aggregate_Fields: AuthRoles_Aggregate_Fields,
    AuthRoles_Aggregate_FieldsCountArgs: AuthRoles_Aggregate_FieldsCountArgs,
    AuthRoles_Bool_Exp: AuthRoles_Bool_Exp,
    AuthRoles_Insert_Input: AuthRoles_Insert_Input,
    AuthRoles_Max_Fields: AuthRoles_Max_Fields,
    AuthRoles_Min_Fields: AuthRoles_Min_Fields,
    AuthRoles_Mutation_Response: AuthRoles_Mutation_Response,
    AuthRoles_Obj_Rel_Insert_Input: AuthRoles_Obj_Rel_Insert_Input,
    AuthRoles_On_Conflict: AuthRoles_On_Conflict,
    AuthRoles_Order_By: AuthRoles_Order_By,
    AuthRoles_Pk_Columns_Input: AuthRoles_Pk_Columns_Input,
    AuthRoles_Set_Input: AuthRoles_Set_Input,
    AuthRoles_Stream_Cursor_Input: AuthRoles_Stream_Cursor_Input,
    AuthRoles_Stream_Cursor_Value_Input: AuthRoles_Stream_Cursor_Value_Input,
    AuthRoles_Updates: AuthRoles_Updates,
    AuthUserProviders: AuthUserProviders,
    AuthUserProviders_Aggregate: AuthUserProviders_Aggregate,
    AuthUserProviders_Aggregate_Bool_Exp: AuthUserProviders_Aggregate_Bool_Exp,
    AuthUserProviders_Aggregate_Bool_Exp_Count: AuthUserProviders_Aggregate_Bool_Exp_Count,
    AuthUserProviders_Aggregate_Fields: AuthUserProviders_Aggregate_Fields,
    AuthUserProviders_Aggregate_FieldsCountArgs: AuthUserProviders_Aggregate_FieldsCountArgs,
    AuthUserProviders_Aggregate_Order_By: AuthUserProviders_Aggregate_Order_By,
    AuthUserProviders_Arr_Rel_Insert_Input: AuthUserProviders_Arr_Rel_Insert_Input,
    AuthUserProviders_Bool_Exp: AuthUserProviders_Bool_Exp,
    AuthUserProviders_Insert_Input: AuthUserProviders_Insert_Input,
    AuthUserProviders_Max_Fields: AuthUserProviders_Max_Fields,
    AuthUserProviders_Max_Order_By: AuthUserProviders_Max_Order_By,
    AuthUserProviders_Min_Fields: AuthUserProviders_Min_Fields,
    AuthUserProviders_Min_Order_By: AuthUserProviders_Min_Order_By,
    AuthUserProviders_Mutation_Response: AuthUserProviders_Mutation_Response,
    AuthUserProviders_On_Conflict: AuthUserProviders_On_Conflict,
    AuthUserProviders_Order_By: AuthUserProviders_Order_By,
    AuthUserProviders_Pk_Columns_Input: AuthUserProviders_Pk_Columns_Input,
    AuthUserProviders_Set_Input: AuthUserProviders_Set_Input,
    AuthUserProviders_Stream_Cursor_Input: AuthUserProviders_Stream_Cursor_Input,
    AuthUserProviders_Stream_Cursor_Value_Input: AuthUserProviders_Stream_Cursor_Value_Input,
    AuthUserProviders_Updates: AuthUserProviders_Updates,
    AuthUserRoles: AuthUserRoles,
    AuthUserRoles_Aggregate: AuthUserRoles_Aggregate,
    AuthUserRoles_Aggregate_Bool_Exp: AuthUserRoles_Aggregate_Bool_Exp,
    AuthUserRoles_Aggregate_Bool_Exp_Count: AuthUserRoles_Aggregate_Bool_Exp_Count,
    AuthUserRoles_Aggregate_Fields: AuthUserRoles_Aggregate_Fields,
    AuthUserRoles_Aggregate_FieldsCountArgs: AuthUserRoles_Aggregate_FieldsCountArgs,
    AuthUserRoles_Aggregate_Order_By: AuthUserRoles_Aggregate_Order_By,
    AuthUserRoles_Arr_Rel_Insert_Input: AuthUserRoles_Arr_Rel_Insert_Input,
    AuthUserRoles_Bool_Exp: AuthUserRoles_Bool_Exp,
    AuthUserRoles_Insert_Input: AuthUserRoles_Insert_Input,
    AuthUserRoles_Max_Fields: AuthUserRoles_Max_Fields,
    AuthUserRoles_Max_Order_By: AuthUserRoles_Max_Order_By,
    AuthUserRoles_Min_Fields: AuthUserRoles_Min_Fields,
    AuthUserRoles_Min_Order_By: AuthUserRoles_Min_Order_By,
    AuthUserRoles_Mutation_Response: AuthUserRoles_Mutation_Response,
    AuthUserRoles_On_Conflict: AuthUserRoles_On_Conflict,
    AuthUserRoles_Order_By: AuthUserRoles_Order_By,
    AuthUserRoles_Pk_Columns_Input: AuthUserRoles_Pk_Columns_Input,
    AuthUserRoles_Set_Input: AuthUserRoles_Set_Input,
    AuthUserRoles_Stream_Cursor_Input: AuthUserRoles_Stream_Cursor_Input,
    AuthUserRoles_Stream_Cursor_Value_Input: AuthUserRoles_Stream_Cursor_Value_Input,
    AuthUserRoles_Updates: AuthUserRoles_Updates,
    AuthUserSecurityKeys: AuthUserSecurityKeys,
    AuthUserSecurityKeys_Aggregate: AuthUserSecurityKeys_Aggregate,
    AuthUserSecurityKeys_Aggregate_Bool_Exp: AuthUserSecurityKeys_Aggregate_Bool_Exp,
    AuthUserSecurityKeys_Aggregate_Bool_Exp_Count: AuthUserSecurityKeys_Aggregate_Bool_Exp_Count,
    AuthUserSecurityKeys_Aggregate_Fields: AuthUserSecurityKeys_Aggregate_Fields,
    AuthUserSecurityKeys_Aggregate_FieldsCountArgs: AuthUserSecurityKeys_Aggregate_FieldsCountArgs,
    AuthUserSecurityKeys_Aggregate_Order_By: AuthUserSecurityKeys_Aggregate_Order_By,
    AuthUserSecurityKeys_Arr_Rel_Insert_Input: AuthUserSecurityKeys_Arr_Rel_Insert_Input,
    AuthUserSecurityKeys_Avg_Fields: AuthUserSecurityKeys_Avg_Fields,
    AuthUserSecurityKeys_Avg_Order_By: AuthUserSecurityKeys_Avg_Order_By,
    AuthUserSecurityKeys_Bool_Exp: AuthUserSecurityKeys_Bool_Exp,
    AuthUserSecurityKeys_Inc_Input: AuthUserSecurityKeys_Inc_Input,
    AuthUserSecurityKeys_Insert_Input: AuthUserSecurityKeys_Insert_Input,
    AuthUserSecurityKeys_Max_Fields: AuthUserSecurityKeys_Max_Fields,
    AuthUserSecurityKeys_Max_Order_By: AuthUserSecurityKeys_Max_Order_By,
    AuthUserSecurityKeys_Min_Fields: AuthUserSecurityKeys_Min_Fields,
    AuthUserSecurityKeys_Min_Order_By: AuthUserSecurityKeys_Min_Order_By,
    AuthUserSecurityKeys_Mutation_Response: AuthUserSecurityKeys_Mutation_Response,
    AuthUserSecurityKeys_On_Conflict: AuthUserSecurityKeys_On_Conflict,
    AuthUserSecurityKeys_Order_By: AuthUserSecurityKeys_Order_By,
    AuthUserSecurityKeys_Pk_Columns_Input: AuthUserSecurityKeys_Pk_Columns_Input,
    AuthUserSecurityKeys_Set_Input: AuthUserSecurityKeys_Set_Input,
    AuthUserSecurityKeys_Stddev_Fields: AuthUserSecurityKeys_Stddev_Fields,
    AuthUserSecurityKeys_Stddev_Order_By: AuthUserSecurityKeys_Stddev_Order_By,
    AuthUserSecurityKeys_Stddev_Pop_Fields: AuthUserSecurityKeys_Stddev_Pop_Fields,
    AuthUserSecurityKeys_Stddev_Pop_Order_By: AuthUserSecurityKeys_Stddev_Pop_Order_By,
    AuthUserSecurityKeys_Stddev_Samp_Fields: AuthUserSecurityKeys_Stddev_Samp_Fields,
    AuthUserSecurityKeys_Stddev_Samp_Order_By: AuthUserSecurityKeys_Stddev_Samp_Order_By,
    AuthUserSecurityKeys_Stream_Cursor_Input: AuthUserSecurityKeys_Stream_Cursor_Input,
    AuthUserSecurityKeys_Stream_Cursor_Value_Input: AuthUserSecurityKeys_Stream_Cursor_Value_Input,
    AuthUserSecurityKeys_Sum_Fields: AuthUserSecurityKeys_Sum_Fields,
    AuthUserSecurityKeys_Sum_Order_By: AuthUserSecurityKeys_Sum_Order_By,
    AuthUserSecurityKeys_Updates: AuthUserSecurityKeys_Updates,
    AuthUserSecurityKeys_Var_Pop_Fields: AuthUserSecurityKeys_Var_Pop_Fields,
    AuthUserSecurityKeys_Var_Pop_Order_By: AuthUserSecurityKeys_Var_Pop_Order_By,
    AuthUserSecurityKeys_Var_Samp_Fields: AuthUserSecurityKeys_Var_Samp_Fields,
    AuthUserSecurityKeys_Var_Samp_Order_By: AuthUserSecurityKeys_Var_Samp_Order_By,
    AuthUserSecurityKeys_Variance_Fields: AuthUserSecurityKeys_Variance_Fields,
    AuthUserSecurityKeys_Variance_Order_By: AuthUserSecurityKeys_Variance_Order_By,
    Bigint_Comparison_Exp: Bigint_Comparison_Exp,
    Buckets: Buckets,
    BucketsFilesArgs: BucketsFilesArgs,
    BucketsFiles_AggregateArgs: BucketsFiles_AggregateArgs,
    Buckets_Aggregate: Buckets_Aggregate,
    Buckets_Aggregate_Fields: Buckets_Aggregate_Fields,
    Buckets_Aggregate_FieldsCountArgs: Buckets_Aggregate_FieldsCountArgs,
    Buckets_Avg_Fields: Buckets_Avg_Fields,
    Buckets_Bool_Exp: Buckets_Bool_Exp,
    Buckets_Inc_Input: Buckets_Inc_Input,
    Buckets_Insert_Input: Buckets_Insert_Input,
    Buckets_Max_Fields: Buckets_Max_Fields,
    Buckets_Min_Fields: Buckets_Min_Fields,
    Buckets_Mutation_Response: Buckets_Mutation_Response,
    Buckets_Obj_Rel_Insert_Input: Buckets_Obj_Rel_Insert_Input,
    Buckets_On_Conflict: Buckets_On_Conflict,
    Buckets_Order_By: Buckets_Order_By,
    Buckets_Pk_Columns_Input: Buckets_Pk_Columns_Input,
    Buckets_Set_Input: Buckets_Set_Input,
    Buckets_Stddev_Fields: Buckets_Stddev_Fields,
    Buckets_Stddev_Pop_Fields: Buckets_Stddev_Pop_Fields,
    Buckets_Stddev_Samp_Fields: Buckets_Stddev_Samp_Fields,
    Buckets_Stream_Cursor_Input: Buckets_Stream_Cursor_Input,
    Buckets_Stream_Cursor_Value_Input: Buckets_Stream_Cursor_Value_Input,
    Buckets_Sum_Fields: Buckets_Sum_Fields,
    Buckets_Updates: Buckets_Updates,
    Buckets_Var_Pop_Fields: Buckets_Var_Pop_Fields,
    Buckets_Var_Samp_Fields: Buckets_Var_Samp_Fields,
    Buckets_Variance_Fields: Buckets_Variance_Fields,
    Bytea_Comparison_Exp: Bytea_Comparison_Exp,
    Categories: Categories,
    Categories_Aggregate: Categories_Aggregate,
    Categories_Aggregate_Fields: Categories_Aggregate_Fields,
    Categories_Aggregate_FieldsCountArgs: Categories_Aggregate_FieldsCountArgs,
    Categories_Bool_Exp: Categories_Bool_Exp,
    Categories_Enum_Comparison_Exp: Categories_Enum_Comparison_Exp,
    Categories_Insert_Input: Categories_Insert_Input,
    Categories_Max_Fields: Categories_Max_Fields,
    Categories_Min_Fields: Categories_Min_Fields,
    Categories_Mutation_Response: Categories_Mutation_Response,
    Categories_On_Conflict: Categories_On_Conflict,
    Categories_Order_By: Categories_Order_By,
    Categories_Pk_Columns_Input: Categories_Pk_Columns_Input,
    Categories_Set_Input: Categories_Set_Input,
    Categories_Stream_Cursor_Input: Categories_Stream_Cursor_Input,
    Categories_Stream_Cursor_Value_Input: Categories_Stream_Cursor_Value_Input,
    Categories_Updates: Categories_Updates,
    Citext_Comparison_Exp: Citext_Comparison_Exp,
    Files: Files,
    Files_Aggregate: Files_Aggregate,
    Files_Aggregate_Bool_Exp: Files_Aggregate_Bool_Exp,
    Files_Aggregate_Bool_Exp_Bool_And: Files_Aggregate_Bool_Exp_Bool_And,
    Files_Aggregate_Bool_Exp_Bool_Or: Files_Aggregate_Bool_Exp_Bool_Or,
    Files_Aggregate_Bool_Exp_Count: Files_Aggregate_Bool_Exp_Count,
    Files_Aggregate_Fields: Files_Aggregate_Fields,
    Files_Aggregate_FieldsCountArgs: Files_Aggregate_FieldsCountArgs,
    Files_Aggregate_Order_By: Files_Aggregate_Order_By,
    Files_Arr_Rel_Insert_Input: Files_Arr_Rel_Insert_Input,
    Files_Avg_Fields: Files_Avg_Fields,
    Files_Avg_Order_By: Files_Avg_Order_By,
    Files_Bool_Exp: Files_Bool_Exp,
    Files_Inc_Input: Files_Inc_Input,
    Files_Insert_Input: Files_Insert_Input,
    Files_Max_Fields: Files_Max_Fields,
    Files_Max_Order_By: Files_Max_Order_By,
    Files_Min_Fields: Files_Min_Fields,
    Files_Min_Order_By: Files_Min_Order_By,
    Files_Mutation_Response: Files_Mutation_Response,
    Files_On_Conflict: Files_On_Conflict,
    Files_Order_By: Files_Order_By,
    Files_Pk_Columns_Input: Files_Pk_Columns_Input,
    Files_Set_Input: Files_Set_Input,
    Files_Stddev_Fields: Files_Stddev_Fields,
    Files_Stddev_Order_By: Files_Stddev_Order_By,
    Files_Stddev_Pop_Fields: Files_Stddev_Pop_Fields,
    Files_Stddev_Pop_Order_By: Files_Stddev_Pop_Order_By,
    Files_Stddev_Samp_Fields: Files_Stddev_Samp_Fields,
    Files_Stddev_Samp_Order_By: Files_Stddev_Samp_Order_By,
    Files_Stream_Cursor_Input: Files_Stream_Cursor_Input,
    Files_Stream_Cursor_Value_Input: Files_Stream_Cursor_Value_Input,
    Files_Sum_Fields: Files_Sum_Fields,
    Files_Sum_Order_By: Files_Sum_Order_By,
    Files_Updates: Files_Updates,
    Files_Var_Pop_Fields: Files_Var_Pop_Fields,
    Files_Var_Pop_Order_By: Files_Var_Pop_Order_By,
    Files_Var_Samp_Fields: Files_Var_Samp_Fields,
    Files_Var_Samp_Order_By: Files_Var_Samp_Order_By,
    Files_Variance_Fields: Files_Variance_Fields,
    Files_Variance_Order_By: Files_Variance_Order_By,
    Jsonb_Cast_Exp: Jsonb_Cast_Exp,
    Jsonb_Comparison_Exp: Jsonb_Comparison_Exp,
    Mutation_Root: Mutation_Root,
    Mutation_RootDeleteAuthProviderArgs: Mutation_RootDeleteAuthProviderArgs,
    Mutation_RootDeleteAuthProviderRequestArgs: Mutation_RootDeleteAuthProviderRequestArgs,
    Mutation_RootDeleteAuthProviderRequestsArgs: Mutation_RootDeleteAuthProviderRequestsArgs,
    Mutation_RootDeleteAuthProvidersArgs: Mutation_RootDeleteAuthProvidersArgs,
    Mutation_RootDeleteAuthRefreshTokenArgs: Mutation_RootDeleteAuthRefreshTokenArgs,
    Mutation_RootDeleteAuthRefreshTokensArgs: Mutation_RootDeleteAuthRefreshTokensArgs,
    Mutation_RootDeleteAuthRoleArgs: Mutation_RootDeleteAuthRoleArgs,
    Mutation_RootDeleteAuthRolesArgs: Mutation_RootDeleteAuthRolesArgs,
    Mutation_RootDeleteAuthUserProviderArgs: Mutation_RootDeleteAuthUserProviderArgs,
    Mutation_RootDeleteAuthUserProvidersArgs: Mutation_RootDeleteAuthUserProvidersArgs,
    Mutation_RootDeleteAuthUserRoleArgs: Mutation_RootDeleteAuthUserRoleArgs,
    Mutation_RootDeleteAuthUserRolesArgs: Mutation_RootDeleteAuthUserRolesArgs,
    Mutation_RootDeleteAuthUserSecurityKeyArgs: Mutation_RootDeleteAuthUserSecurityKeyArgs,
    Mutation_RootDeleteAuthUserSecurityKeysArgs: Mutation_RootDeleteAuthUserSecurityKeysArgs,
    Mutation_RootDeleteBucketArgs: Mutation_RootDeleteBucketArgs,
    Mutation_RootDeleteBucketsArgs: Mutation_RootDeleteBucketsArgs,
    Mutation_RootDeleteFileArgs: Mutation_RootDeleteFileArgs,
    Mutation_RootDeleteFilesArgs: Mutation_RootDeleteFilesArgs,
    Mutation_RootDeleteTodoArgs: Mutation_RootDeleteTodoArgs,
    Mutation_RootDeleteTodosArgs: Mutation_RootDeleteTodosArgs,
    Mutation_RootDeleteUserArgs: Mutation_RootDeleteUserArgs,
    Mutation_RootDeleteUsersArgs: Mutation_RootDeleteUsersArgs,
    Mutation_RootDelete_CategoriesArgs: Mutation_RootDelete_CategoriesArgs,
    Mutation_RootDelete_Categories_By_PkArgs: Mutation_RootDelete_Categories_By_PkArgs,
    Mutation_RootInsertAuthProviderArgs: Mutation_RootInsertAuthProviderArgs,
    Mutation_RootInsertAuthProviderRequestArgs: Mutation_RootInsertAuthProviderRequestArgs,
    Mutation_RootInsertAuthProviderRequestsArgs: Mutation_RootInsertAuthProviderRequestsArgs,
    Mutation_RootInsertAuthProvidersArgs: Mutation_RootInsertAuthProvidersArgs,
    Mutation_RootInsertAuthRefreshTokenArgs: Mutation_RootInsertAuthRefreshTokenArgs,
    Mutation_RootInsertAuthRefreshTokensArgs: Mutation_RootInsertAuthRefreshTokensArgs,
    Mutation_RootInsertAuthRoleArgs: Mutation_RootInsertAuthRoleArgs,
    Mutation_RootInsertAuthRolesArgs: Mutation_RootInsertAuthRolesArgs,
    Mutation_RootInsertAuthUserProviderArgs: Mutation_RootInsertAuthUserProviderArgs,
    Mutation_RootInsertAuthUserProvidersArgs: Mutation_RootInsertAuthUserProvidersArgs,
    Mutation_RootInsertAuthUserRoleArgs: Mutation_RootInsertAuthUserRoleArgs,
    Mutation_RootInsertAuthUserRolesArgs: Mutation_RootInsertAuthUserRolesArgs,
    Mutation_RootInsertAuthUserSecurityKeyArgs: Mutation_RootInsertAuthUserSecurityKeyArgs,
    Mutation_RootInsertAuthUserSecurityKeysArgs: Mutation_RootInsertAuthUserSecurityKeysArgs,
    Mutation_RootInsertBucketArgs: Mutation_RootInsertBucketArgs,
    Mutation_RootInsertBucketsArgs: Mutation_RootInsertBucketsArgs,
    Mutation_RootInsertFileArgs: Mutation_RootInsertFileArgs,
    Mutation_RootInsertFilesArgs: Mutation_RootInsertFilesArgs,
    Mutation_RootInsertTodoArgs: Mutation_RootInsertTodoArgs,
    Mutation_RootInsertTodosArgs: Mutation_RootInsertTodosArgs,
    Mutation_RootInsertUserArgs: Mutation_RootInsertUserArgs,
    Mutation_RootInsertUsersArgs: Mutation_RootInsertUsersArgs,
    Mutation_RootInsert_CategoriesArgs: Mutation_RootInsert_CategoriesArgs,
    Mutation_RootInsert_Categories_OneArgs: Mutation_RootInsert_Categories_OneArgs,
    Mutation_RootUpdateAuthProviderArgs: Mutation_RootUpdateAuthProviderArgs,
    Mutation_RootUpdateAuthProviderRequestArgs: Mutation_RootUpdateAuthProviderRequestArgs,
    Mutation_RootUpdateAuthProviderRequestsArgs: Mutation_RootUpdateAuthProviderRequestsArgs,
    Mutation_RootUpdateAuthProvidersArgs: Mutation_RootUpdateAuthProvidersArgs,
    Mutation_RootUpdateAuthRefreshTokenArgs: Mutation_RootUpdateAuthRefreshTokenArgs,
    Mutation_RootUpdateAuthRefreshTokensArgs: Mutation_RootUpdateAuthRefreshTokensArgs,
    Mutation_RootUpdateAuthRoleArgs: Mutation_RootUpdateAuthRoleArgs,
    Mutation_RootUpdateAuthRolesArgs: Mutation_RootUpdateAuthRolesArgs,
    Mutation_RootUpdateAuthUserProviderArgs: Mutation_RootUpdateAuthUserProviderArgs,
    Mutation_RootUpdateAuthUserProvidersArgs: Mutation_RootUpdateAuthUserProvidersArgs,
    Mutation_RootUpdateAuthUserRoleArgs: Mutation_RootUpdateAuthUserRoleArgs,
    Mutation_RootUpdateAuthUserRolesArgs: Mutation_RootUpdateAuthUserRolesArgs,
    Mutation_RootUpdateAuthUserSecurityKeyArgs: Mutation_RootUpdateAuthUserSecurityKeyArgs,
    Mutation_RootUpdateAuthUserSecurityKeysArgs: Mutation_RootUpdateAuthUserSecurityKeysArgs,
    Mutation_RootUpdateBucketArgs: Mutation_RootUpdateBucketArgs,
    Mutation_RootUpdateBucketsArgs: Mutation_RootUpdateBucketsArgs,
    Mutation_RootUpdateFileArgs: Mutation_RootUpdateFileArgs,
    Mutation_RootUpdateFilesArgs: Mutation_RootUpdateFilesArgs,
    Mutation_RootUpdateTodoArgs: Mutation_RootUpdateTodoArgs,
    Mutation_RootUpdateTodosArgs: Mutation_RootUpdateTodosArgs,
    Mutation_RootUpdateUserArgs: Mutation_RootUpdateUserArgs,
    Mutation_RootUpdateUsersArgs: Mutation_RootUpdateUsersArgs,
    Mutation_RootUpdate_AuthProviderRequests_ManyArgs: Mutation_RootUpdate_AuthProviderRequests_ManyArgs,
    Mutation_RootUpdate_AuthProviders_ManyArgs: Mutation_RootUpdate_AuthProviders_ManyArgs,
    Mutation_RootUpdate_AuthRefreshTokens_ManyArgs: Mutation_RootUpdate_AuthRefreshTokens_ManyArgs,
    Mutation_RootUpdate_AuthRoles_ManyArgs: Mutation_RootUpdate_AuthRoles_ManyArgs,
    Mutation_RootUpdate_AuthUserProviders_ManyArgs: Mutation_RootUpdate_AuthUserProviders_ManyArgs,
    Mutation_RootUpdate_AuthUserRoles_ManyArgs: Mutation_RootUpdate_AuthUserRoles_ManyArgs,
    Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs: Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs,
    Mutation_RootUpdate_Buckets_ManyArgs: Mutation_RootUpdate_Buckets_ManyArgs,
    Mutation_RootUpdate_CategoriesArgs: Mutation_RootUpdate_CategoriesArgs,
    Mutation_RootUpdate_Categories_By_PkArgs: Mutation_RootUpdate_Categories_By_PkArgs,
    Mutation_RootUpdate_Categories_ManyArgs: Mutation_RootUpdate_Categories_ManyArgs,
    Mutation_RootUpdate_Files_ManyArgs: Mutation_RootUpdate_Files_ManyArgs,
    Mutation_RootUpdate_Todos_ManyArgs: Mutation_RootUpdate_Todos_ManyArgs,
    Mutation_RootUpdate_Users_ManyArgs: Mutation_RootUpdate_Users_ManyArgs,
    Query_Root: Query_Root,
    Query_RootAuthProviderArgs: Query_RootAuthProviderArgs,
    Query_RootAuthProviderRequestArgs: Query_RootAuthProviderRequestArgs,
    Query_RootAuthProviderRequestsArgs: Query_RootAuthProviderRequestsArgs,
    Query_RootAuthProviderRequestsAggregateArgs: Query_RootAuthProviderRequestsAggregateArgs,
    Query_RootAuthProvidersArgs: Query_RootAuthProvidersArgs,
    Query_RootAuthProvidersAggregateArgs: Query_RootAuthProvidersAggregateArgs,
    Query_RootAuthRefreshTokenArgs: Query_RootAuthRefreshTokenArgs,
    Query_RootAuthRefreshTokensArgs: Query_RootAuthRefreshTokensArgs,
    Query_RootAuthRefreshTokensAggregateArgs: Query_RootAuthRefreshTokensAggregateArgs,
    Query_RootAuthRoleArgs: Query_RootAuthRoleArgs,
    Query_RootAuthRolesArgs: Query_RootAuthRolesArgs,
    Query_RootAuthRolesAggregateArgs: Query_RootAuthRolesAggregateArgs,
    Query_RootAuthUserProviderArgs: Query_RootAuthUserProviderArgs,
    Query_RootAuthUserProvidersArgs: Query_RootAuthUserProvidersArgs,
    Query_RootAuthUserProvidersAggregateArgs: Query_RootAuthUserProvidersAggregateArgs,
    Query_RootAuthUserRoleArgs: Query_RootAuthUserRoleArgs,
    Query_RootAuthUserRolesArgs: Query_RootAuthUserRolesArgs,
    Query_RootAuthUserRolesAggregateArgs: Query_RootAuthUserRolesAggregateArgs,
    Query_RootAuthUserSecurityKeyArgs: Query_RootAuthUserSecurityKeyArgs,
    Query_RootAuthUserSecurityKeysArgs: Query_RootAuthUserSecurityKeysArgs,
    Query_RootAuthUserSecurityKeysAggregateArgs: Query_RootAuthUserSecurityKeysAggregateArgs,
    Query_RootBucketArgs: Query_RootBucketArgs,
    Query_RootBucketsArgs: Query_RootBucketsArgs,
    Query_RootBucketsAggregateArgs: Query_RootBucketsAggregateArgs,
    Query_RootCategoriesArgs: Query_RootCategoriesArgs,
    Query_RootCategories_AggregateArgs: Query_RootCategories_AggregateArgs,
    Query_RootCategories_By_PkArgs: Query_RootCategories_By_PkArgs,
    Query_RootFileArgs: Query_RootFileArgs,
    Query_RootFilesArgs: Query_RootFilesArgs,
    Query_RootFilesAggregateArgs: Query_RootFilesAggregateArgs,
    Query_RootTodoArgs: Query_RootTodoArgs,
    Query_RootTodosArgs: Query_RootTodosArgs,
    Query_RootTodosAggregateArgs: Query_RootTodosAggregateArgs,
    Query_RootUserArgs: Query_RootUserArgs,
    Query_RootUsersArgs: Query_RootUsersArgs,
    Query_RootUsersAggregateArgs: Query_RootUsersAggregateArgs,
    Subscription_Root: Subscription_Root,
    Subscription_RootAuthProviderArgs: Subscription_RootAuthProviderArgs,
    Subscription_RootAuthProviderRequestArgs: Subscription_RootAuthProviderRequestArgs,
    Subscription_RootAuthProviderRequestsArgs: Subscription_RootAuthProviderRequestsArgs,
    Subscription_RootAuthProviderRequestsAggregateArgs: Subscription_RootAuthProviderRequestsAggregateArgs,
    Subscription_RootAuthProviderRequests_StreamArgs: Subscription_RootAuthProviderRequests_StreamArgs,
    Subscription_RootAuthProvidersArgs: Subscription_RootAuthProvidersArgs,
    Subscription_RootAuthProvidersAggregateArgs: Subscription_RootAuthProvidersAggregateArgs,
    Subscription_RootAuthProviders_StreamArgs: Subscription_RootAuthProviders_StreamArgs,
    Subscription_RootAuthRefreshTokenArgs: Subscription_RootAuthRefreshTokenArgs,
    Subscription_RootAuthRefreshTokensArgs: Subscription_RootAuthRefreshTokensArgs,
    Subscription_RootAuthRefreshTokensAggregateArgs: Subscription_RootAuthRefreshTokensAggregateArgs,
    Subscription_RootAuthRefreshTokens_StreamArgs: Subscription_RootAuthRefreshTokens_StreamArgs,
    Subscription_RootAuthRoleArgs: Subscription_RootAuthRoleArgs,
    Subscription_RootAuthRolesArgs: Subscription_RootAuthRolesArgs,
    Subscription_RootAuthRolesAggregateArgs: Subscription_RootAuthRolesAggregateArgs,
    Subscription_RootAuthRoles_StreamArgs: Subscription_RootAuthRoles_StreamArgs,
    Subscription_RootAuthUserProviderArgs: Subscription_RootAuthUserProviderArgs,
    Subscription_RootAuthUserProvidersArgs: Subscription_RootAuthUserProvidersArgs,
    Subscription_RootAuthUserProvidersAggregateArgs: Subscription_RootAuthUserProvidersAggregateArgs,
    Subscription_RootAuthUserProviders_StreamArgs: Subscription_RootAuthUserProviders_StreamArgs,
    Subscription_RootAuthUserRoleArgs: Subscription_RootAuthUserRoleArgs,
    Subscription_RootAuthUserRolesArgs: Subscription_RootAuthUserRolesArgs,
    Subscription_RootAuthUserRolesAggregateArgs: Subscription_RootAuthUserRolesAggregateArgs,
    Subscription_RootAuthUserRoles_StreamArgs: Subscription_RootAuthUserRoles_StreamArgs,
    Subscription_RootAuthUserSecurityKeyArgs: Subscription_RootAuthUserSecurityKeyArgs,
    Subscription_RootAuthUserSecurityKeysArgs: Subscription_RootAuthUserSecurityKeysArgs,
    Subscription_RootAuthUserSecurityKeysAggregateArgs: Subscription_RootAuthUserSecurityKeysAggregateArgs,
    Subscription_RootAuthUserSecurityKeys_StreamArgs: Subscription_RootAuthUserSecurityKeys_StreamArgs,
    Subscription_RootBucketArgs: Subscription_RootBucketArgs,
    Subscription_RootBucketsArgs: Subscription_RootBucketsArgs,
    Subscription_RootBucketsAggregateArgs: Subscription_RootBucketsAggregateArgs,
    Subscription_RootBuckets_StreamArgs: Subscription_RootBuckets_StreamArgs,
    Subscription_RootCategoriesArgs: Subscription_RootCategoriesArgs,
    Subscription_RootCategories_AggregateArgs: Subscription_RootCategories_AggregateArgs,
    Subscription_RootCategories_By_PkArgs: Subscription_RootCategories_By_PkArgs,
    Subscription_RootCategories_StreamArgs: Subscription_RootCategories_StreamArgs,
    Subscription_RootFileArgs: Subscription_RootFileArgs,
    Subscription_RootFilesArgs: Subscription_RootFilesArgs,
    Subscription_RootFilesAggregateArgs: Subscription_RootFilesAggregateArgs,
    Subscription_RootFiles_StreamArgs: Subscription_RootFiles_StreamArgs,
    Subscription_RootTodoArgs: Subscription_RootTodoArgs,
    Subscription_RootTodosArgs: Subscription_RootTodosArgs,
    Subscription_RootTodosAggregateArgs: Subscription_RootTodosAggregateArgs,
    Subscription_RootTodos_StreamArgs: Subscription_RootTodos_StreamArgs,
    Subscription_RootUserArgs: Subscription_RootUserArgs,
    Subscription_RootUsersArgs: Subscription_RootUsersArgs,
    Subscription_RootUsersAggregateArgs: Subscription_RootUsersAggregateArgs,
    Subscription_RootUsers_StreamArgs: Subscription_RootUsers_StreamArgs,
    Timestamptz_Comparison_Exp: Timestamptz_Comparison_Exp,
    Todos: Todos,
    Todos_Aggregate: Todos_Aggregate,
    Todos_Aggregate_Fields: Todos_Aggregate_Fields,
    Todos_Aggregate_FieldsCountArgs: Todos_Aggregate_FieldsCountArgs,
    Todos_Bool_Exp: Todos_Bool_Exp,
    Todos_Insert_Input: Todos_Insert_Input,
    Todos_Max_Fields: Todos_Max_Fields,
    Todos_Min_Fields: Todos_Min_Fields,
    Todos_Mutation_Response: Todos_Mutation_Response,
    Todos_On_Conflict: Todos_On_Conflict,
    Todos_Order_By: Todos_Order_By,
    Todos_Pk_Columns_Input: Todos_Pk_Columns_Input,
    Todos_Set_Input: Todos_Set_Input,
    Todos_Stream_Cursor_Input: Todos_Stream_Cursor_Input,
    Todos_Stream_Cursor_Value_Input: Todos_Stream_Cursor_Value_Input,
    Todos_Updates: Todos_Updates,
    Users: Users,
    UsersMetadataArgs: UsersMetadataArgs,
    UsersRefreshTokensArgs: UsersRefreshTokensArgs,
    UsersRefreshTokens_AggregateArgs: UsersRefreshTokens_AggregateArgs,
    UsersRolesArgs: UsersRolesArgs,
    UsersRoles_AggregateArgs: UsersRoles_AggregateArgs,
    UsersSecurityKeysArgs: UsersSecurityKeysArgs,
    UsersSecurityKeys_AggregateArgs: UsersSecurityKeys_AggregateArgs,
    UsersUserProvidersArgs: UsersUserProvidersArgs,
    UsersUserProviders_AggregateArgs: UsersUserProviders_AggregateArgs,
    Users_Aggregate: Users_Aggregate,
    Users_Aggregate_Bool_Exp: Users_Aggregate_Bool_Exp,
    Users_Aggregate_Bool_Exp_Bool_And: Users_Aggregate_Bool_Exp_Bool_And,
    Users_Aggregate_Bool_Exp_Bool_Or: Users_Aggregate_Bool_Exp_Bool_Or,
    Users_Aggregate_Bool_Exp_Count: Users_Aggregate_Bool_Exp_Count,
    Users_Aggregate_Fields: Users_Aggregate_Fields,
    Users_Aggregate_FieldsCountArgs: Users_Aggregate_FieldsCountArgs,
    Users_Aggregate_Order_By: Users_Aggregate_Order_By,
    Users_Append_Input: Users_Append_Input,
    Users_Arr_Rel_Insert_Input: Users_Arr_Rel_Insert_Input,
    Users_Bool_Exp: Users_Bool_Exp,
    Users_Delete_At_Path_Input: Users_Delete_At_Path_Input,
    Users_Delete_Elem_Input: Users_Delete_Elem_Input,
    Users_Delete_Key_Input: Users_Delete_Key_Input,
    Users_Insert_Input: Users_Insert_Input,
    Users_Max_Fields: Users_Max_Fields,
    Users_Max_Order_By: Users_Max_Order_By,
    Users_Min_Fields: Users_Min_Fields,
    Users_Min_Order_By: Users_Min_Order_By,
    Users_Mutation_Response: Users_Mutation_Response,
    Users_Obj_Rel_Insert_Input: Users_Obj_Rel_Insert_Input,
    Users_On_Conflict: Users_On_Conflict,
    Users_Order_By: Users_Order_By,
    Users_Pk_Columns_Input: Users_Pk_Columns_Input,
    Users_Prepend_Input: Users_Prepend_Input,
    Users_Set_Input: Users_Set_Input,
    Users_Stream_Cursor_Input: Users_Stream_Cursor_Input,
    Users_Stream_Cursor_Value_Input: Users_Stream_Cursor_Value_Input,
    Users_Updates: Users_Updates,
    Uuid_Comparison_Exp: Uuid_Comparison_Exp
  }
}