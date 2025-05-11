describe('Session Reuse', () => {
  it('logs out and logs back in', () => {
    cy.fixture('user').then((user) => {
      cy.login(user.email, user.password);
      cy.get('a[href=\"/logout\"]').click();
      cy.url().should('include', '/login');
      cy.login(user.email, user.password);
      cy.contains(\Logged in as \\).should('exist');
    });
  });
});
