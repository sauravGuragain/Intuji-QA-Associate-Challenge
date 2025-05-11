class CheckoutPage {
  fillComment(comment) {
    cy.get('[name="message"]').type(comment);
  }
  placeOrder() {
    cy.contains('Place Order').click();
  }
  fillPaymentDetails(card) {
    cy.get('[data-qa="name-on-card"]').type(card.name);
    cy.get('[data-qa="card-number"]').type(card.number);
    cy.get('[data-qa="cvc"]').type(card.cvc);
    cy.get('[data-qa="expiry-month"]').type(card.expiryMonth);
    cy.get('[data-qa="expiry-year"]').type(card.expiryYear);
  }
  confirmOrder() {
    cy.get('[data-qa="pay-button"]').click();
  }
  verifyOrderConfirmation() {
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
  }
}
export const checkoutPage = new CheckoutPage();
