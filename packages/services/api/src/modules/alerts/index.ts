import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { SlackCommunicationAdapter } from './providers/adapters/slack';
import { WebhookCommunicationAdapter } from './providers/adapters/webhook';
import { AlertsManager } from './providers/alerts-manager';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const alertsModule = createModule({
  id: 'alerts',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [AlertsManager, SlackCommunicationAdapter, WebhookCommunicationAdapter],
});
