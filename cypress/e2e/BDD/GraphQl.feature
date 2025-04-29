# Feature: GraphQL Location Creation
#   As a developer
#   I want to create a new location using the GraphQL API
#   So that I can manage location data

#   Scenario: Successfully create a new location and retrieve its ID
#     Given I have a GraphQL API endpoint
#     And I have a mutation to create a location
#     And the mutation payload contains location details with name "Telangana" and address "East"
#     When I send a POST request to the GraphQL endpoint with the mutation
#     Then the response status code should be 200
#     And the response body should contain data
#     And the data should have a "createLocation" property
#     And the "createLocation" property should have an "id" property
#     And the "createLocation" property should have the correct name and address
        
