import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import { user } from '../../../fixtures/login_credentials.json'

import LoginPage from '../../../support/pajeObjects/login_page';

/// <reference types="cypress" />

describe('Login Step Definitions', () => {
    Given('User is logged in', () => {
        cy.visit(LoginPage.getPageUrl)
        LoginPage.login(user.username, user.password)
    });

    Then('User sees invalid credentials message {string}', (errorMsg: string) => {
        LoginPage.checkErrorMessageExists(errorMsg);
    })
})