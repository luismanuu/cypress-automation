/// <reference types="cypress" />

export function login(username, password){
  cy.session([username,password], ()=> {
    cy.visit(Cypress.config().baseUrl)
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
  }, {
    cacheAcrossSpecs: true
  })
  }