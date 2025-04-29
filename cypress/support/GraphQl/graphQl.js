import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let graphqlQuery;
let responseBody;

Given('I have a GraphQL API endpoint', () => {
  //  In a real test, this might involve checking that the server is running.
  //  For this example, we'll just log it.
  cy.log('GraphQL API endpoint is available');
});

Given('I have a mutation to create a location', () => {
  graphqlQuery = `
    mutation CreateLocation($location: LocationInput!) {
      createLocation(location: $location) {
        id
        name
        address
      }
    }
  `;
  cy.log('GraphQL mutation for creating a location is defined');
});

Given('the mutation payload contains location details with name {string} and address {string}', (name, address) => {
  //  This step definition now captures the name and address from the feature file.
  graphqlQuery = `
    mutation CreateLocation($location: LocationInput!) {
      createLocation(location: $location) {
        id
        name
        address
      }
    }
  `;
  cy.wrap({ name, address }).as('locationDetails'); // Store for use in the When step.
  cy.log(`Mutation payload contains location details: Name - ${name}, Address - ${address}`);
});


When('I send a POST request to the GraphQL endpoint with the mutation', () => {
  //  Use cy.get('@locationDetails').then() to access the stored values.

  cy.get('@locationDetails').then((locationDetails) => {
    cy.request({
      method: 'POST',
      url: 'https://rahulshettyacademy.com/gq/graphql', //  GraphQL endpoint
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        query: graphqlQuery,
        variables: {  //  Use the variables in the request
          location: {
            name: locationDetails.name,
            address: locationDetails.address,
          },
        },
      },
      log: true,
    }).then((response) => {
      responseBody = response.body; // Store the response for later assertions
      cy.log('GraphQL response received');
    });
  });
});

Then('the response status code should be {int}', (statusCode) => {
  //  Use the status code from the feature file.
  expect(Cypress.lastResponse.status).to.eq(statusCode);
});

Then('the response body should contain data', () => {
  expect(responseBody).to.have.property('data');
});

Then('the data should have a {string} property', (propertyName) => {
  //  Use the property name from the feature file.
  expect(responseBody.data).to.have.property(propertyName);
});

Then('the {string} property should have an {string} property', (parentProperty, childProperty) => {
  //  Use the property names from the feature file.
  expect(responseBody.data[parentProperty]).to.have.property(childProperty);
});

Then('the {string} property should have the correct name and address', (parentProperty) => {
  cy.get('@locationDetails').then((locationDetails) => {
    expect(responseBody.data[parentProperty].name).to.equal(locationDetails.name);
    expect(responseBody.data[parentProperty].address).to.equal(locationDetails.address);
  });
});
