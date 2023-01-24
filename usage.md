## Nhost project

### Setup

#### Local application

- add the following parameter to `nhost/config.yaml`:

```yaml
generatedSchema: src/generated-schema.ts
```

- Run `nhost dev`. The file is updated automatically on every change

#### Cloud application

### Develop

- In `src/main.ts`:

```ts
import { NhostClient } from `@nhost/nhost-js`
import schema from './generated-schema.ts'

const nhost = new NhostClient({ subdomain: 'localhost', schema })

const users = await nhost.graphql.query.users()
```

## Non-nhost projects

### Setup

- Install the code generator

```sh
pnpm add graphql
pnpm add -D typescript
pnpm add -D @graphql-codegen/cli @graphql-codegen/nhost
```

- Create a `codegen.yaml` file:

```yaml
generates:
  ./src/generated-schema.ts:
    schema: https://myserver.com/graphql
    plugins:
      - @graphql-codegen/nhost
```

- Add a script to `package.json`:

```json
{
  "scripts": {
    "codegen": "graphql-codegen"
  }
}
```

- Run the code generator:

```sh
pnpm run codegen
```

### Develop

- In `src/main.ts`:

```ts
import Groq from `@nhost/groq`
import { GraphQLClient } from 'graphql-request'

import schema from './generated-schema.ts'

const groq = new Groq({ schema })
const document = groq.query.todos()

const client = new GraphQLClient('https://myserver.com/graphql')

const todos = await client.request(document)
```
