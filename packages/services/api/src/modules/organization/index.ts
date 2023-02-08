import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { OrganizationManager } from './providers/organization-manager';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const organizationModule = createModule({
  id: 'organization',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [OrganizationManager],
});
