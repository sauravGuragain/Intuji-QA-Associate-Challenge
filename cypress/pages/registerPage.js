class RegisterPage {
  
  fillSignupForm(user) {
    
    cy.get('[data-qa="signup-name"]').type(user.name);
    cy.get('[data-qa="signup-email"]').type(user.email);
    cy.get('[data-qa="signup-button"]').click();

    
    cy.get('#id_gender1').click();  
    cy.get('[data-qa="password"]').type(user.password);
    cy.get('[data-qa="first_name"]').type(user.firstName || user.name); 
    cy.get('[data-qa="last_name"]').type(user.lastName || "Tester"); 
    cy.get('[data-qa="address"]').type(user.address || "123 Cypress Street");
    cy.get('[data-qa="state"]').type(user.state || "State");
    cy.get('[data-qa="city"]').type(user.city || "City");
    cy.get('[data-qa="zipcode"]').type(user.zipcode || "12345");
    cy.get('[data-qa="mobile_number"]').type(user.mobileNumber || "9812345678");

    
    cy.get('[data-qa="create-account"]').click();
  }

  
  verifyRegistrationSuccess() {
    cy.url().should('include', '/account'); 
    cy.contains('Your Account Has Been Created!').should('be.visible'); 
  }

  
  verifyErrorMessage() {
    cy.contains('Error').should('be.visible'); 
  }
}

export const registerPage = new RegisterPage();
