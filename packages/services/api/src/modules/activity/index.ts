import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { ActivityManager } from './providers/activity-manager';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const activityModule = createModule({
  id: 'activity',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [ActivityManager],
});
