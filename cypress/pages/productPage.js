class ProductPage {
  visit() {
    cy.visit('/products');
  }

  filterCategory(category, subcategory) {
    cy.contains(category).click();
    cy.contains(subcategory).click();
  }

  verifyFilteredProducts(keyword) {
    cy.get('.features_items').should('contain.text', keyword);
  }

  selectProduct(index = 1) {
    cy.get('.features_items .col-sm-4').eq(index - 1).click();
  }

  verifyProductDetails() {
    cy.get('.product-information').within(() => {
      cy.contains('Availability').should('exist');
      cy.contains('Condition').should('exist');
      cy.contains('Brand').should('exist');
    });
  }
}

export const productPage = new ProductPage();
