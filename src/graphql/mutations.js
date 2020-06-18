/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createManufacturer = /* GraphQL */ `
  mutation CreateManufacturer(
    $input: CreateManufacturerInput!
    $condition: ModelManufacturerConditionInput
  ) {
    createManufacturer(input: $input, condition: $condition) {
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
export const updateManufacturer = /* GraphQL */ `
  mutation UpdateManufacturer(
    $input: UpdateManufacturerInput!
    $condition: ModelManufacturerConditionInput
  ) {
    updateManufacturer(input: $input, condition: $condition) {
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
export const deleteManufacturer = /* GraphQL */ `
  mutation DeleteManufacturer(
    $input: DeleteManufacturerInput!
    $condition: ModelManufacturerConditionInput
  ) {
    deleteManufacturer(input: $input, condition: $condition) {
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
