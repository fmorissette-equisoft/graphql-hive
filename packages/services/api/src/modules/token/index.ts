import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { TokenManager } from './providers/token-manager';
import { TokenStorage } from './providers/token-storage';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const tokenModule = createModule({
  id: 'token',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [TokenManager, TokenStorage],
});
