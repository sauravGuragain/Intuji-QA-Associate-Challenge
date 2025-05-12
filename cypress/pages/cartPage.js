class CartPage {
  verifyCartVisible() {
    cy.get('#cart_info_table').should('be.visible');
  }

  verifyItemQuantity(productName, expectedQty) {
    cy.contains('td.cart_description', productName)
      .siblings('td.cart_quantity')
      .invoke('text')
      .should('include', expectedQty);
  }

  verifyTotalForItem(productName, expectedTotal) {
    cy.contains('td.cart_description', productName)
      .siblings('td.cart_total')
      .invoke('text')
      .should('include', `Rs. ${expectedTotal}`);
  }

  removeItem(productName) {
    cy.contains('td.cart_description', productName)
      .siblings('td.cart_delete')
      .find('a')
      .click();
  }
}

export default new CartPage();
