/// <reference types="cypress" />
import * as loginPage from '../modules/login_module/loginPage'
import * as itemsPage from '../modules/items_module/itemsPage'
import * as checkoutPage from '../modules/checkout_module/checkoutPage'

describe("Buy items test suite", () => {
    let username
    let password
    let firstName
    let lastName
    let zipCode
    before(() => {
        cy.fixture('login').then((loginData) => {
            username = loginData.username
            password = loginData.password
            loginPage.login(username, password)
        })
        cy.fixture('checkout').then((checkoutData) => {
            firstName = checkoutData.firstName
            lastName = checkoutData.lastName
            zipCode = checkoutData.zipCode
        })
    })

    it("Buy backpack", () =>
    {
            itemsPage.chooseSauceLabsBackpack()
            checkoutPage.doCheckout(firstName, lastName, zipCode)
            cy.get('.header_secondary_container')
            .find('span').should('contain', 'Checkout: Complete!')
            cy.get('.checkout_complete_container')
            .find('h2').should('contain','Thank you for your order!')
            cy.get('.complete-text').should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })

})