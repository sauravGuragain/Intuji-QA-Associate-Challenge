describe('Product Browsing & Filtering', () => {
  beforeEach(() => {
    cy.visit('/products');
  });

  it('filters products by Category → Women > Dress and verifies the list', () => {
    
    cy.contains('a', 'Women').click();
    cy.contains('a', 'Dress').click();

    
    cy.get('.features_items', { timeout: 10000 }).should('be.visible');

    
    cy.get('.features_items').should('contain.text', 'Dress');

    
    cy.get('.product-image-wrapper').first().trigger('mouseover');
    cy.contains('View Product').first().click();

    
    cy.location('pathname', { timeout: 10000 }).should('include', '/product_details');

    
    cy.get('.product-information', { timeout: 10000 }).should('be.visible');
    cy.get('.product-information h2').should('not.be.empty'); 
    cy.get('.product-information span span').should('not.be.empty'); 
    cy.get('.product-information p').contains('Availability').should('exist');
  });
});
