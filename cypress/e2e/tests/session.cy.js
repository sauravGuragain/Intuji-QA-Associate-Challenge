import { homePage } from '../../pages/homePage';

describe('Session Reuse', () => {
  it('logs out and logs back in', () => {
    
    cy.fixture('user').then((user) => {
      cy.login(user.email, user.password);
      homePage.isLoggedIn(user.name); 

      
      homePage.logout();
      cy.url().should('include', '/login');

      
      cy.contains('Login').should('be.visible');

      
      cy.login(user.email, user.password);
      homePage.isLoggedIn(user.name);
    });
  });
});
