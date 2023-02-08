import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { AdminManager } from './providers/admin-manager';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const adminModule = createModule({
  id: 'admin',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [AdminManager],
});
