import { gql } from '@apollo/client';

const CREATE_EVENT = gql`
  mutation CreateEvent(
    $name: String!
    $when: String!
    $where: String!
    $description: String!
  ) {
    createEvent(
      name: $name
      when: $when
      where: $where
      description: $description
    ) {
      id
      name
      when
      where
      description
    }
  }
`;

export { CREATE_EVENT };
