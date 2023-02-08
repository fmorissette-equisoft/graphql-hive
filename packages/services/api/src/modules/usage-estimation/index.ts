import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { UsageEstimationProvider } from './providers/usage-estimation.provider';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const usageEstimationModule = createModule({
  id: 'usage-estimation',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [UsageEstimationProvider],
});
