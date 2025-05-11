class HomePage {
  visit() {
    cy.visit('/');
  }

  goToSignupLogin() {
    cy.get('a[href="/login"]').click();
  }

  isLoggedIn(name) {
    cy.contains(`Logged in as ${name}`).should('be.visible');
  }

  logout() {
    cy.get('a[href="/logout"]').click();
  }
}

export const homePage = new HomePage();
