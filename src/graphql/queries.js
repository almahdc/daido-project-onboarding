/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getManufacturer = /* GraphQL */ `
  query GetManufacturer($id: ID!) {
    getManufacturer(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listManufacturers = /* GraphQL */ `
  query ListManufacturers(
    $filter: ModelManufacturerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManufacturers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
