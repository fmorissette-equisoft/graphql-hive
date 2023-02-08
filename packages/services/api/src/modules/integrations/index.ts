import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { GitHubIntegrationManager } from './providers/github-integration-manager';
import { SlackIntegrationManager } from './providers/slack-integration-manager';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const integrationsModule = createModule({
  id: 'integrations',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [SlackIntegrationManager, GitHubIntegrationManager],
});
