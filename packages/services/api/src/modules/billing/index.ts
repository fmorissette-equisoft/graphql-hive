import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { BillingProvider } from './providers/billing.provider';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const billingModule = createModule({
  id: 'billing',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [BillingProvider],
});
