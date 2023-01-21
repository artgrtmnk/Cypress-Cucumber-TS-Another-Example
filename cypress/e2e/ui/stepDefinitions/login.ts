import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import LoginPage from '../../../support/pajeObjects/login_page';

/// <reference types="cypress" />

describe('Login Step Definitions', () => {
    When('User inputs {string} as username', (username: string) => {
        if (username != '[empty]')
            LoginPage.fillUsernameField(username);
    });
    
    When('User inputs {string} as password', (password: string) => {
        if (password != '[empty]')
            LoginPage.fillPaswordField(password);
    });
    
    When('User presses Login button', () => {
        LoginPage.clickOnLoginButton();
    })

    Then('User sees invalid credentials message {string}', (errorMsg: string) => {
        LoginPage.checkErrorMessageExists(errorMsg);
    })
})