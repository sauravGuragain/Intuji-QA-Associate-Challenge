import 'cypress-commands';

Cypress.Commands.add("login", (email, password) => {
  cy.visit('/login');
  cy.get('[data-qa=\"login-email\"]').type(email);
  cy.get('[data-qa=\"login-password\"]').type(password);
  cy.get('[data-qa=\"login-button\"]').click();
});

Cypress.Commands.add("addToCart", (index = 1) => {
  cy.get(\.features_items .col-sm-4:nth-child(\)\).trigger('mouseover');
  cy.contains('Add to cart').click({ force: true });
  cy.contains('Continue Shopping').click();
});
