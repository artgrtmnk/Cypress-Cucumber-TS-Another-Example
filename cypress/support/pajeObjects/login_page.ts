import BasePage from "./base_page"

/// <reference types="cypress" />


const NAME = 'Login Page'
const URL = 'https://www.saucedemo.com/'

const ELEMENTS = {
    usernameField : () => cy.get('[data-test="username"]'),
    passwordField : () => cy.get('[data-test="password"]'),
    loginButton : ()   => cy.get('[data-test="login-button"]'),
    errorMessage : ()  => cy.get('[data-test="error"]'),
}

class LoginPage extends BasePage{
    static get getPageName(): string { return NAME }
    static get getPageUrl(): string { return URL }

    // Actions
    static fillUsernameField(username: string) {
        ELEMENTS.usernameField().type(username)
    }

    static fillPaswordField(password: string) {
        ELEMENTS.passwordField().type(password)
    }

    static clickOnLoginButton() {
        ELEMENTS.loginButton().click({ force: true })
    }

    static login(username: string, password: string) {
        this.fillUsernameField(username)
        this.fillPaswordField(password)
        this.clickOnLoginButton()
    }

    // Assertions
    static checkIsOnPage() {
        ELEMENTS.loginButton().should('be.visible')
    }

    static checkErrorMessageExists(errorMsg: string) {
        ELEMENTS.errorMessage().invoke('text').then((text: string) => {
            expect(text).to.eq(errorMsg, "Error message is not correct.")
        })
    }
}
export default LoginPage;