import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { RateLimitProvider } from './providers/rate-limit.provider';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const rateLimitModule = createModule({
  id: 'rate-limit',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [RateLimitProvider],
});
