describe('Product Browsing & Filtering', () => {
  beforeEach(() => {
    cy.visit('/products');
  });

  it('filters products by Category → Women > Dress and verifies the list', () => {
    // Step 1: Expand 'Women' category and click 'Dress'
    cy.contains('a', 'Women').click();
    cy.contains('a', 'Dress').click();

    // Step 2: Ensure filtered products are visible
    cy.get('.features_items', { timeout: 10000 }).should('be.visible');

    // Step 3: Verify at least one expected product keyword is present
    cy.get('.features_items').should('contain.text', 'Dress');

    // Step 4: Hover and click on the first "View Product" button
    cy.get('.product-image-wrapper').first().trigger('mouseover');
    cy.contains('View Product').first().click();

    // Step 5: Verify we are on the product detail page
    cy.location('pathname', { timeout: 10000 }).should('include', '/product_details');

    // Step 6: Validate product details (name, price, availability)
    cy.get('.product-information', { timeout: 10000 }).should('be.visible');
    cy.get('.product-information h2').should('not.be.empty'); // name
    cy.get('.product-information span span').should('not.be.empty'); // price
    cy.get('.product-information p').contains('Availability').should('exist');
  });
});
