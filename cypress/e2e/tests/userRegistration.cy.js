import { faker } from '@faker-js/faker';
import { homePage } from '../../pages/homePage';
import { registerPage } from '../../pages/registerPage';

describe('User Registration', () => {
  let user;

  before(() => {
    user = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: 'Test@123'
    };
    cy.writeFile('cypress/fixtures/user.json', user);
  });

  it('registers a user', () => {
    cy.intercept('POST', '/api/createAccount').as('register');
    homePage.visit();
    homePage.goToSignupLogin();
    registerPage.fillSignupForm(user);
    cy.wait('@register').its('response.statusCode').should('eq', 200);
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    homePage.isLoggedIn(user.name);
  });
});
