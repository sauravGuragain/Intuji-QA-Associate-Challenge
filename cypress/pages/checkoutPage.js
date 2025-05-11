class CheckoutPage {
  // Click "Pay and Confirm Order" button
  clickPlaceOrder() {
    cy.get('button[data-qa="pay-button"]')  // Use the data-qa attribute for more reliable targeting
      .should('be.visible')
      .click();  // Clicking the button after it's visible
  }

  // Fill in card name
  enterCardName(cardName) {
    cy.get('input[name="name_on_card"]')
      .should('be.visible')
      .clear()
      .type(cardName);
  }

  // Fill in card number
  enterCardNumber(cardNumber) {
    cy.get('input[name="card_number"]')
      .should('be.visible')
      .clear()
      .type(cardNumber);
  }

  // Fill in expiry month
  enterExpiryMonth(expiryMonth) {
    cy.get('input[name="expiry_month"]')
      .should('be.visible')
      .clear()
      .type(expiryMonth);
  }

  // Fill in expiry year
  enterExpiryYear(expiryYear) {
    cy.get('input[name="expiry_year"]')
      .should('be.visible')
      .clear()
      .type(expiryYear);
  }

  // Fill in CVC
  enterCVC(cvc) {
    cy.get('input[name="cvc"]')
      .should('be.visible')
      .clear()
      .type(cvc);
  }

  // Verify the order confirmation
  verifyOrderConfirmation() {
    // Adjusted to check for the confirmation message and buttons
    cy.contains('Order Placed! ')
      .should('be.visible');
    
    // Verify that the 'Download Invoice' and 'Continue' buttons are visible
    cy.get('a[data-qa="download-invoice"]')
      .should('be.visible');
    
    cy.get('a[data-qa="continue-button"]')
      .should('be.visible');
  }
}

// Export the class as default
export default CheckoutPage;
