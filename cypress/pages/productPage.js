class ProductPage {
  addToCartByProductName(productName) {
    cy.get('.productinfo').contains(productName).parents('.productinfo').within(() => {
      cy.contains('Add to cart').click();
    });
  }

  continueShopping() {
    cy.contains('Continue Shopping').click();
  }

  goToCart() {
    cy.get('a[href="/view_cart"]').click();
  }
}

export default new ProductPage();
