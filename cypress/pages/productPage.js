class ProductPage {
  addToCartByProductName(productName) {
    
    cy.get('.productinfo')
      .contains(productName)
      .parents('.productinfo')
      .within(() => {
        cy.contains('Add to cart').click();
      });

    
    cy.contains('Continue Shopping', { timeout: 5000 }).should('be.visible');
  }

  continueShopping() {
    
    cy.contains('Continue Shopping').should('be.visible').click();
  }

  goToCart() {
    
    cy.get('a[href="/view_cart"]').first().should('be.visible').click();
  }
}

export default new ProductPage();

