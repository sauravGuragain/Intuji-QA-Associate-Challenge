import productPage from '../../pages/productPage';
import CartPage from '../../pages/CartPage'; // ✅ exact match with filename

describe('Cart and Quantity Management', () => {
  it('manages cart correctly', () => {
    cy.visit('/');

    productPage.addToCartByProductName('Blue Top');
    productPage.continueShopping();
    productPage.addToCartByProductName('Men Tshirt');
    productPage.goToCart();

    CartPage.verifyCartVisible();
    CartPage.verifyItemCount(2);
    CartPage.verifyTotalIsCorrect();

    CartPage.removeItem(0);
    CartPage.verifyItemCount(1);
  });
});
