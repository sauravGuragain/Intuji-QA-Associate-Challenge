import 'cypress-commands';

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('addToCart', (index = 1) => {
  cy.get(.features_items .col-sm-4:nth-child()).trigger('mouseover');
  cy.contains('Add to cart').click({ force: true });
  cy.contains('Continue Shopping').click();
});

Cypress.Commands.add('verifyProduct', () => {
  cy.get('.product-information').within(() => {
    cy.contains('Availability').should('exist');
    cy.contains('Condition').should('exist');
    cy.contains('Brand').should('exist');
  });
});

Cypress.Commands.add('fillCheckoutForm', (card) => {
  cy.get('[data-qa="name-on-card"]').type(card.name);
  cy.get('[data-qa="card-number"]').type(card.number);
  cy.get('[data-qa="cvc"]').type(card.cvc);
  cy.get('[data-qa="expiry-month"]').type(card.expiryMonth);
  cy.get('[data-qa="expiry-year"]').type(card.expiryYear);
  cy.get('[data-qa="pay-button"]').click();
});
