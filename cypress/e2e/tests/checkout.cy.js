describe('Checkout Flow', () => {
  before(() => {
    cy.fixture('user').then((user) => {
      cy.login(user.email, user.password);
    });
    cy.visit('/view_cart');
    cy.contains('Proceed To Checkout').click();
  });
  it('enters payment and places order', () => {
    cy.get('[name=\"message\"]').type('Please deliver fast');
    cy.contains('Place Order').click();
    cy.get('[data-qa=\"name-on-card\"]').type('Test User');
    cy.get('[data-qa=\"card-number\"]').type('4242424242424242');
    cy.get('[data-qa=\"cvc\"]').type('123');
    cy.get('[data-qa=\"expiry-month\"]').type('12');
    cy.get('[data-qa=\"expiry-year\"]').type('2026');
    cy.get('[data-qa=\"pay-button\"]').click();
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
  });
});
