class RegisterPage {
  fillSignupForm(user) {
    cy.get('[data-qa=\"signup-name\"]').type(user.name);
    cy.get('[data-qa=\"signup-email\"]').type(user.email);
    cy.get('[data-qa=\"signup-button\"]').click();
    cy.get('#id_gender1').click();
    cy.get('[data-qa=\"password\"]').type(user.password);
    cy.get('[data-qa=\"first_name\"]').type(user.name);
    cy.get('[data-qa=\"last_name\"]').type(\"Tester\");
    cy.get('[data-qa=\"address\"]').type(\"123 Cypress Street\");
    cy.get('[data-qa=\"state\"]').type(\"State\");
    cy.get('[data-qa=\"city\"]').type(\"City\");
    cy.get('[data-qa=\"zipcode\"]').type(\"12345\");
    cy.get('[data-qa=\"mobile_number\"]').type(\"9812345678\");
    cy.get('[data-qa=\"create-account\"]').click();
  }
}
export const registerPage = new RegisterPage();
