/// <reference types="cypress" />

class LoginPage{

 static loadLoginPage(){
    cy.visit(Cypress.config().baseUrl)
  }

  static login(username, password){
  cy.session([username,password], ()=> {
    cy.visit(Cypress.config().baseUrl)
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
  }, {
    cacheAcrossSpecs: true
  })
  }

}

export default LoginPage;