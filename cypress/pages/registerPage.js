class RegisterPage {
  fillSignupForm(user) {
    cy.get('[data-qa="signup-name"]').type(user.name);
    cy.get('[data-qa="signup-email"]').type(user.email);
    cy.get('[data-qa="signup-button"]').click();

    
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type(user.password);
    cy.get('[data-qa="days"]').select('10');
    cy.get('[data-qa="months"]').select('May');
    cy.get('[data-qa="years"]').select('1997');
    cy.get('[data-qa="first_name"]').type(user.name);
    cy.get('[data-qa="last_name"]').type('Test');
    cy.get('[data-qa="address"]').type('Test Address');
    cy.get('[data-qa="state"]').type('State');
    cy.get('[data-qa="city"]').type('City');
    cy.get('[data-qa="zipcode"]').type('12345');
    cy.get('[data-qa="mobile_number"]').type('1234567890');
    cy.get('[data-qa="create-account"]').click();
  }

  verifyEmailExistsError() {
    cy.contains('Email Address already exist!').should('be.visible');
  }
}

export const registerPage = new RegisterPage();
