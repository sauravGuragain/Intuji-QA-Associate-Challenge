describe('Cart Management', () => {
  before(() => cy.visit('/products'));
  it('adds multiple products', () => {
    cy.addToCart(1);
    cy.addToCart(2);
    cy.get('a[href=\"/view_cart\"]').click();
    cy.get('.cart_info').should('have.length.greaterThan', 1);
  });
  it('updates quantity', () => {
    cy.get('.cart_quantity_input').eq(0).clear().type('3');
    cy.get('.cart_quantity_input').eq(0).should('have.value', '3');
  });
  it('removes one item', () => {
    cy.get('.cart_delete a').eq(0).click();
    cy.get('.cart_info').should('have.length', 1);
  });
});
