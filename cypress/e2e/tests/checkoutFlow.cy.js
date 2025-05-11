import CheckoutPage from '../../pages/checkoutPage';  // Ensure correct import

describe('Checkout Flow with Fake Payment', () => {
  const checkoutPage = new CheckoutPage();

  it('fills in payment and confirms order', () => {
    // Visit the checkout page
    cy.visit('https://automationexercise.com/checkout');

    // Navigate to the payment page (adjust selector based on the checkout page's HTML)
    cy.get('a[href="/payment"]').click(); // This selector may need adjustment

    // Fill in payment details
    checkoutPage.enterCardName('Test User');
    checkoutPage.enterCardNumber('4242424242424242');
    checkoutPage.enterExpiryMonth('12');
    checkoutPage.enterExpiryYear('2026');
    checkoutPage.enterCVC('123');

    // Click the "Pay and Confirm Order" button
    checkoutPage.clickPlaceOrder();

    // Verify the order confirmation
    checkoutPage.verifyOrderConfirmation();
  });
});
