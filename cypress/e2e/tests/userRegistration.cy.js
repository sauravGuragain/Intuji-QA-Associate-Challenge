import { faker } from '@faker-js/faker';
import { homePage } from '../../pages/homePage';
import { registerPage } from '../../pages/registerPage';

describe('User Registration', () => {
  let user;

  before(() => {
    user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: 'Test@123'
    };
    cy.writeFile('cypress/fixtures/user.json', user);
  });

  it('registers a user', () => {
    homePage.visit();
    homePage.goToSignupLogin();
    registerPage.fillSignupForm(user);
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa=\"continue-button\"]').click();
    homePage.isLoggedIn(user.name);
  });
});
