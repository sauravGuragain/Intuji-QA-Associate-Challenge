class CartPage {
  visit() {
    cy.get('a[href="/view_cart"]').click();
  }
  updateQuantity(index, quantity) {
    cy.get('.cart_quantity_input').eq(index).clear().type(quantity);
  }
  verifyQuantity(index, expectedQuantity) {
    cy.get('.cart_quantity_input').eq(index).should('have.value', expectedQuantity);
  }
  removeItem(index) {
    cy.get('.cart_delete a').eq(index).click();
  }
  verifyItemCount(expectedCount) {
    cy.get('.cart_info tr').should('have.length', expectedCount + 1); // +1 for header row
  }
  verifyCartTotal() {
    cy.get('.cart_total_price').each((, index) => {
      cy.wrap().invoke('text').then((text) => {
        expect(text.trim()).to.match(/Rs\. \d+/); // Verify price format
      });
    });
  }
  proceedToCheckout() {
    cy.contains('Proceed To Checkout').click();
  }
}
export const cartPage = new CartPage();
