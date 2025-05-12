import {HomePage } from '../../pages/HomePagee';
import {RegisterPage } from '../../pagesRegisterPage';
import {CheckoutPage } from '../../pages/checkoutPage';
import {CartPage } from '../../pages/cartPage';

describe('Negative Scenarios', () => {
  it('fails registration with existing email', () => {
    cy.fixture('user').then((user) => {
    HomePage.visit();
      HomePage.goToSignupLogin();
      RegisterPage.fillSignupForm(user);
      cy.contains('Email Address already exist!').should('be.visible');
    });
  });

  it('fails checkout with invalid card', () => {
    cy.fixture('user').then((user) => {
      cy.login(user.email, user.password);  
    });
    CartPage.visit();
    CartPage.proceedToCheckout();
    CheckoutPage.fillComment('Test order');
    CheckoutPage.placeOrder();
    CheckoutPage.fillPaymentDetails({
      name: 'Test User',
      number: '1234567890123456',
      cvc: '12',  
      expiryMonth: '12',
      expiryYear: '2020'  
    });
    checkoutPage.confirmOrder();
    cy.contains('Your card was not accepted').should('be.visible');
  });
});
