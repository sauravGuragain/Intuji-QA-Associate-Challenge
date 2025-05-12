class CartPage {
  verifyCartVisible() {
    cy.get('#cart_info_table').should('be.visible');
  }

  verifyItemCount(expectedCount) {
    cy.get('#cart_info_table tbody tr').should('have.length', expectedCount);
  }

  verifyTotalIsCorrect() {
    let total = 0;

    cy.get('#cart_info_table tbody tr').each(($row, index) => {
      
      cy.wrap($row).find('.cart_price p').invoke('text').then(priceText => {
        const price = parseInt(priceText.replace(/\D/g, ''), 10);

        cy.wrap($row).find('.cart_quantity_input').invoke('val').then(quantityText => {
          const quantity = parseInt(quantityText, 10);

          total += price * quantity;
        });
      });
    }).then(() => {
      
      cy.wait(300); 

      
      cy.get('.cart_total_price').last().invoke('text').then(actualText => {
        const actualClean = actualText.replace(/\s/g, '');
        const expected = `Rs.${total}`;
        expect(actualClean).to.include(expected);
      });
    });
  }

  removeItem(index) {
    cy.get('#cart_info_table tbody tr')
      .eq(index)
      .find('.cart_quantity_delete')
      .click();
  }
}

export default new CartPage();
