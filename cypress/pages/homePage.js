class HomePage {
    visit() {
    cy.visit('/');
    cy.url().should('include', '/'); 
  }

    goToSignupLogin() {
    cy.get('a[href="/login"]').should('be.visible').click(); 
  }

    isLoggedIn(name) {
    if (name) {
      cy.contains(`Logged in as ${name}`).should('be.visible');
    } else {
      cy.contains('Logged in as').should('not.exist'); 
    }
  }

    logout() {
    cy.get('a[href="/logout"]').should('be.visible').click(); 
    cy.url().should('include', '/login'); 
  }
}

export const homePage = new HomePage();
