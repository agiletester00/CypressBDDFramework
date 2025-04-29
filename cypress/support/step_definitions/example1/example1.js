import { Given,When,And,Then } from "@badeball/cypress-cucumber-preprocessor";
// import {Given,When, Then, Add} from'cypress-cucumber-preprocessor';

Given('I navigate to Google', () => {
  cy.visit('https://www.google.com')
})

Then('I validate the title', () => {
  cy.title().should('eq', 'Google')
})