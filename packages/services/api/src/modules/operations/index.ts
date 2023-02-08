import path from 'path';
import { fileURLToPath } from 'url';
import { createModule } from 'graphql-modules';
import { ClickHouse } from './providers/clickhouse-client';
import { OperationsManager } from './providers/operations-manager';
import { OperationsReader } from './providers/operations-reader';
import { resolvers } from './resolvers';
import typeDefs from './module.graphql';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const operationsModule = createModule({
  id: 'operations',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers: [OperationsManager, OperationsReader, ClickHouse],
});
