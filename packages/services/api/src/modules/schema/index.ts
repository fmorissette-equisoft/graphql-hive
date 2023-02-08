import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { Inspector } from './providers/inspector';
import { models } from './providers/models';
import { orchestrators } from './providers/orchestrators';
import { RegistryChecks } from './providers/registry-checks';
import { SchemaHelper } from './providers/schema-helper';
import { SchemaManager } from './providers/schema-manager';
import { SchemaPublisher } from './providers/schema-publisher';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const schemaModule = createModule({
  id: 'schema',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [
    SchemaManager,
    SchemaPublisher,
    Inspector,
    SchemaHelper,
    RegistryChecks,
    ...orchestrators,
    ...models,
  ],
});
