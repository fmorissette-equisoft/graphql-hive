import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { ProjectManager } from './providers/project-manager';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const projectModule = createModule({
  id: 'project',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [ProjectManager],
});
