class CartPage {
  verifyCartVisible() {
    cy.get('#cart_info_table').should('be.visible');
  }

  verifyItemCount(expectedCount) {
    cy.get('#cart_info_table tbody tr').should('have.length', expectedCount);
  }

  verifyTotalIsCorrect() {
    let total = 0;
    cy.get('#cart_info_table tbody tr').each(($row) => {
      const price = parseInt($row.find('.cart_price p').text().replace(/\D/g, ''));
      const quantity = parseInt($row.find('.cart_quantity button').text());
      total += price * quantity;
    }).then(() => {
      cy.get('.cart_total_price').last().should('contain', `Rs. ${total}`);
    });
  }

  removeItem(index) {
    cy.get('#cart_info_table tbody tr').eq(index).find('.cart_quantity_delete').click();
  }
}

export default new CartPage();
