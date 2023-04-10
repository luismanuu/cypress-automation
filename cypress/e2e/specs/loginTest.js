/// <reference types="cypress" />
import * as loginPage from '../modules/login_module/loginPage'
describe("Login page test suite", () => {
    let username
    let password
    before(() => {
        cy.fixture('login').then((loginData) => {
            username = loginData.username
            password = loginData.password
        })
    })

    beforeEach(()=>{
        cy.visit(Cypress.config().baseUrl)
    })

    it("Validate Login Page", () =>
    {
        cy.title().should('equal', 'Swag Labs');
    })

    it("Login with username and password", () =>
    {
            loginPage.login(username, password)
    })

    after(()=>{
        Cypress.session.clearAllSavedSessions()
    })

})