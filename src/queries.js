import gql from "graphql-tag";

export const GET_NOTES = gql`
  {
    notes @client {
      id
    }
  }
`;
