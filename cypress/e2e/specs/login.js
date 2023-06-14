/// <reference types="cypress" />
import LoginPage, * as loginPage from '../modules/login_module/loginPage'
const { Before, After, Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
let validUser;
let invalidUser;

    Before(() => {
        cy.fixture('login').then((userData) => {
            validUser = userData.valid_users[0];
            invalidUser = userData.invalid_users[0];
        })
    });
    Given("I am on login page", () => {
        LoginPage.loadLoginPage();
    });

    When("I type username, password and click on login button", () => {
        const { username: validUsername, password: validPassword } = validUser;
        LoginPage.login(validUsername, validPassword);
    });

    Then("I should be redirected to the {string} page", (pageTitle) => {
        cy.location("pathname").should('include', `/${pageTitle}.html`);
        cy.title().should('equal', 'Swag Labs');
    });

    When("I type an invalid username, invalid password and click on login button", () => {
        const { username: invalidUsername, password: invalidPassword } = invalidUser;
        LoginPage.login(invalidUsername, invalidPassword);
    });

    Then("Error message should appear with the following message {string}", (message) => {
        cy.get('[data-test="error"]').should('have.text', message);
    });

    After(() => {
        Cypress.session.clearAllSavedSessions()
    });
