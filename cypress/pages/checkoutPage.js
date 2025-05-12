class CheckoutPage {
  
  clickPlaceOrder() {
    cy.get('button[data-qa="pay-button"]')  
      .should('be.visible')
      .click();  
  }

  
  enterCardName(cardName) {
    cy.get('input[name="name_on_card"]')
      .should('be.visible')
      .clear()
      .type(cardName);
  }

  
  enterCardNumber(cardNumber) {
    cy.get('input[name="card_number"]')
      .should('be.visible')
      .clear()
      .type(cardNumber);
  }

  
  enterExpiryMonth(expiryMonth) {
    cy.get('input[name="expiry_month"]')
      .should('be.visible')
      .clear()
      .type(expiryMonth);
  }

  
  enterExpiryYear(expiryYear) {
    cy.get('input[name="expiry_year"]')
      .should('be.visible')
      .clear()
      .type(expiryYear);
  }

  
  enterCVC(cvc) {
    cy.get('input[name="cvc"]')
      .should('be.visible')
      .clear()
      .type(cvc);
  }

  
  verifyOrderConfirmation() {
    
    cy.contains('Order Placed!').should('be.visible');

    
    cy.contains('a.btn.btn-default.check_out', 'Download Invoice').should('be.visible');

    
    cy.get('a[data-qa="continue-button"]').should('be.visible');
  }
}


export default CheckoutPage;
