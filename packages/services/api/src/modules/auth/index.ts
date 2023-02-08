import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { AuthManager } from './providers/auth-manager';
import { OrganizationAccess } from './providers/organization-access';
import { ProjectAccess } from './providers/project-access';
import { TargetAccess } from './providers/target-access';
import { ApiTokenProvider } from './providers/tokens';
import { UserManager } from './providers/user-manager';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const authModule = createModule({
  id: 'auth',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [
    AuthManager,
    UserManager,
    ApiTokenProvider,
    OrganizationAccess,
    ProjectAccess,
    TargetAccess,
  ],
});
