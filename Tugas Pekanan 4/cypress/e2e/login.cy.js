describe('Saucedemo - Login Success', () => {
  it('User should be login has been successfully', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });
});

describe('Saucedemo - Login Failed', () => {
  it('User should not be login with invalid credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('invalid_user');
    cy.get('#password').type('invalid_password');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should(
      'contain.text',
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

  it('Login Failed with Empty Fields', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should(
      'contain.text',
      'Epic sadface: Username is required'
    );
  });

  it('Login Failed with Empty Password', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should(
      'contain.text',
      'Epic sadface: Password is required'
    );
  });
  it('Login Failed with Empty Username', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#password').type('invalid_password');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should(
      'contain.text',
      'Epic sadface: Username is required'
    );
  });
});
