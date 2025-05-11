import { faker } from '@faker-js/faker';
import { homePage } from '../../pages/homePage';
import { registerPage } from '../../pages/registerPage';

describe('User Registration & Session Handling', () => {
  let user;

  before(() => {
    user = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: 'Test@123'
    };
    cy.writeFile('cypress/fixtures/user.json', user);
  });

  // Define session setup logic separately for reuse
  const registerAndLogin = () => {
    homePage.visit();
    homePage.goToSignupLogin();

    registerPage.fillSignupForm(user);

    // Fallback wait if intercept doesn't catch
    cy.wait(5000);
    cy.contains('Account Created!').should('be.visible');

    cy.get('[data-qa="continue-button"]').click();
    homePage.isLoggedIn(user.name);
  };

  it('registers a new user and sets session', () => {
    cy.session('user-session', registerAndLogin); // first time session creation

    // Optionally validate something after session creation
    homePage.visit();
    cy.contains(`Logged in as ${user.name}`).should('be.visible');
  });

  it('uses stored session for further tests', () => {
    // Reuse the same setup function for restoring session
    cy.session('user-session', registerAndLogin);

    homePage.visit();
    cy.contains(`Logged in as ${user.name}`).should('be.visible');
  });
});
