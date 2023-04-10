/// <reference types="cypress" />

export function chooseSauceLabsBackpack(){
    cy.visit({
        url: '/inventory.html',
        failOnStatusCode: false,
      })
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('#shopping_cart_container').click()
    }