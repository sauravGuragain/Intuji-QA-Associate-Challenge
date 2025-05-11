import { productPage } from '../../pages/productPage';

describe('Product Filtering', () => {
  it('filters and checks product detail', () => {
    cy.intercept('GET', '/api/productsList').as('getProducts');
    productPage.visit();
    cy.wait('@getProducts').its('response.statusCode').should('eq', 200);
    productPage.filterCategory('Women', 'Dress');
    productPage.verifyFilteredProducts('Dress');
    productPage.selectProduct();
    productPage.verifyProductDetails();
  });
});
