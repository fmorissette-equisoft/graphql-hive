import { gql, DocumentType } from 'urql';
import { GraphQLTypeCard, GraphQLInputFields } from './common';

export const GraphQLInputObjectTypeComponent_TypeFragment = gql(/* GraphQL */ `
  fragment GraphQLInputObjectTypeComponent_TypeFragment on GraphQLInputObjectType {
    name
    description
    usage {
      ...SchemaExplorerUsageStats_UsageFragment
    }
    fields {
      ...GraphQLInputFields_InputFieldFragment
    }
  }
`);

export function GraphQLInputObjectTypeComponent(props: {
  type: DocumentType<typeof GraphQLInputObjectTypeComponent_TypeFragment>;
  totalRequests: number;
}) {
  return (
    <GraphQLTypeCard kind="input" name={props.type.name} description={props.type.description}>
      <GraphQLInputFields fields={props.type.fields} totalRequests={props.totalRequests} />
    </GraphQLTypeCard>
  );
}
