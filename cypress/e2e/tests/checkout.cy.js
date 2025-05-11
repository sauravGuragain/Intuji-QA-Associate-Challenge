import { cartPage } from '../../pages/cartPage';
import { checkoutPage } from '../../pages/checkoutPage';

describe('Checkout Flow', () => {
  before(() => {
    cy.fixture('user').then((user) => {
      cy.login(user.email, user.password);
    });
    cartPage.visit();
    cartPage.proceedToCheckout();
  });

  it('enters payment and places order', () => {
    checkoutPage.fillComment('Please deliver fast');
    checkoutPage.placeOrder();
    checkoutPage.fillPaymentDetails({
      name: 'Test User',
      number: '4242424242424242',
      cvc: '123',
      expiryMonth: '12',
      expiryYear: '2026'
    });
    checkoutPage.confirmOrder();
    checkoutPage.verifyOrderConfirmation();
    cy.compareSnapshot('checkout-confirmation');
  });
});
