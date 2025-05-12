import productPage from '../../pages/productPage';
import CartPage from '../../pages/cartPage';

describe('Cart and Quantity Management', () => {
  it('manages cart correctly', () => {
    cy.visit('/');

    
    productPage.addToCartByProductName('Blue Top');
    productPage.continueShopping();
    productPage.addToCartByProductName('Blue Top');
    productPage.continueShopping();
    productPage.addToCartByProductName('Blue Top');
    productPage.continueShopping();

    
    productPage.addToCartByProductName('Men Tshirt');
    productPage.goToCart();

    
    CartPage.verifyCartVisible();

    
    CartPage.verifyItemQuantity('Blue Top', 3);
    CartPage.verifyItemQuantity('Men Tshirt', 1);

    
    CartPage.verifyTotalForItem('Blue Top', 1500);
    CartPage.verifyTotalForItem('Men Tshirt', 400);

    
    CartPage.removeItem('Men Tshirt');

    
    cy.contains('Men Tshirt').should('not.exist');
    CartPage.verifyItemQuantity('Blue Top', 3);
  });
});
