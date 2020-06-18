/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncManufacturers = /* GraphQL */ `
  query SyncManufacturers(
    $filter: ModelManufacturerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncManufacturers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getManufacturer = /* GraphQL */ `
  query GetManufacturer($id: ID!) {
    getManufacturer(id: $id) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
