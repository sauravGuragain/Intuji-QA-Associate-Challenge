import CheckoutPage from '../../pages/checkoutPage';  

describe('Checkout Flow with Fake Payment', () => {
  let checkoutPage;  

  before(() => {
    
    checkoutPage = new CheckoutPage();
  });

  it('fills in payment and confirms order', () => {
    
    cy.visit('https://automationexercise.com/checkout');

    
    cy.get('a[href="/payment"]').click(); 

    
    checkoutPage.enterCardName('Test User');
    checkoutPage.enterCardNumber('4242424242424242');
    checkoutPage.enterExpiryMonth('12');
    checkoutPage.enterExpiryYear('2026');
    checkoutPage.enterCVC('123');

    
    checkoutPage.clickPlaceOrder();

    
    checkoutPage.verifyOrderConfirmation();
  });
});
