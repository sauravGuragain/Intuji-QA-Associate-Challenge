describe('Product Filtering', () => {
  it('filters and checks product detail', () => {
    cy.visit('/products');
    cy.contains('Women').click();
    cy.contains('Dress').click();
    cy.get('.features_items').should('contain.text', 'Dress');
    cy.get('.features_items').first().click();
    cy.get('.product-information').within(() => {
      cy.contains('Availability').should('exist');
    });
  });
});
