import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { OIDCIntegrationsProvider } from './providers/oidc-integrations.provider';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const oidcIntegrationsModule = createModule({
  id: 'oidc-integrations',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [OIDCIntegrationsProvider],
});
