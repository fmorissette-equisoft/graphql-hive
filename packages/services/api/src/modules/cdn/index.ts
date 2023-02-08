import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { CdnProvider } from './providers/cdn.provider';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const cdnModule = createModule({
  id: 'cdn',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [CdnProvider],
});
