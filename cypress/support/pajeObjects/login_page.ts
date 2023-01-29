import BasePage from "./base_page"

/// <reference types="cypress" />


const ELEMENTS = {
    usernameField: () => cy.get('[data-test="username"]'),
    passwordField: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
}

class LoginPage extends BasePage {
    NAME: string = 'Login Page'
    URL: string = 'https://www.saucedemo.com/'

    // Actions
    public fillUsernameField = (username: string) => {
        ELEMENTS.usernameField().type(username)
    }

    public fillPaswordField = (password: string) => {
        ELEMENTS.passwordField().type(password)
    }

    public clickOnLoginButton = () => {
        ELEMENTS.loginButton().click({ force: true })
    }

    public login = (username: string, password: string) => {
        this.fillUsernameField(username)
        this.fillPaswordField(password)
        this.clickOnLoginButton()
    }

    // Assertions
    public checkIsOnPage = () => {
        cy.url().then((url) => {
            expect(url).to.be.eq(this.getPageUrl)
        })
    }

    public checkErrorMessageExists = (errorMsg: string) => {
        ELEMENTS.errorMessage().invoke('text').then((text: string) => {
            expect(text).to.eq(errorMsg, "Error message is not correct.")
        })
    }
}
export default new LoginPage;