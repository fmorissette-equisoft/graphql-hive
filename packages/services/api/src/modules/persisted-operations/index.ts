import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { PersistedOperationManager } from './providers/persisted-operation-manager';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const persistedOperationModule = createModule({
  id: 'persisted-operations',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [PersistedOperationManager],
});
