import { homePage } from '../../pages/homePage';
import { registerPage } from '../../pages/registerPage';
import { checkoutPage } from '../../pages/checkoutPage';
import { cartPage } from '../../pages/cartPage';

describe('Negative Scenarios', () => {
  it('fails registration with existing email', () => {
    cy.fixture('user').then((user) => {
      homePage.visit();
      homePage.goToSignupLogin();
      cy.get('[data-qa="signup-name"]').type(user.name);
      cy.get('[data-qa="signup-email"]').type(user.email);
      cy.get('[data-qa="signup-button"]').click();
      cy.contains('Email Address already exist!').should('be.visible');
    });
  });

  it('fails checkout with invalid card', () => {
    cy.fixture('user').then((user) => {
      cy.login(user.email, user.password);
    });
    cartPage.visit();
    cartPage.proceedToCheckout();
    checkoutPage.fillComment('Test order');
    checkoutPage.placeOrder();
    checkoutPage.fillPaymentDetails({
      name: 'Test User',
      number: '1234567890123456',
      cvc: '12', // Invalid CVC
      expiryMonth: '12',
      expiryYear: '2020' // Expired year
    });
    checkoutPage.confirmOrder();
    cy.contains('Your card was not accepted').should('be.visible');
  });
});
