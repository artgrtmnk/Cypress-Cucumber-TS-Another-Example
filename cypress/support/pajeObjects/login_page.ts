import BasePage from "./base_page"
import Actions from "../helpers/actions"

/// <reference types="cypress" />


class LoginPage extends BasePage {
    NAME: string = 'Login Page'
    URL: string = 'https://www.saucedemo.com/'

    ELEMENTS = {
        'Login Button': () => cy.get('[data-test="login-button"]'),
        'Username Field': () => cy.get('[data-test="username"]'),
        'Password Field': () => cy.get('[data-test="password"]'),
        'Error Message': () => cy.get('[data-test="error"]'),
    }

    // Actions
    public login = (username: string, password: string) => {

        Actions.fillFieldWithValue(this.NAME, this.ELEMENTS['Username Field'].name, username)
        Actions.fillFieldWithValue(this.NAME, this.ELEMENTS["Password Field"].name, password)
        Actions.clickOnButton(this.NAME, this.ELEMENTS["Login Button"].name)
    }

    // Assertions
    public checkErrorMessageExists = (errorMsg: string) => {
        this.ELEMENTS["Error Message"]().invoke('text').then((text: string) => {
            expect(text).to.eq(errorMsg, "Error message is not correct.")
        })
    }
}
export default new LoginPage;