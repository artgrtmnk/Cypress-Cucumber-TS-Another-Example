import BasePage from "./base_page"

/// <reference types="cypress" />


const ELEMENTS = {
    firstNameField: () => cy.get("[data-test='firstName']"),
    lastNameField: () => cy.get("[data-test='lastName']"),
    zipCodeField: () => cy.get("[data-test='postalCode']"),
    continueButton: () => cy.get("[data-test='continue']"),
}

class CheckoutBillingPage extends BasePage {
    NAME: string = 'Checkout Billing Page'
    URL: string = 'https://www.saucedemo.com/inventory-item.html?id='

    public fillFirstNameField = (firstname: string) => {
        ELEMENTS.firstNameField().type(firstname)
    }

    public fillLastNameField = (lastname: string) => {
        ELEMENTS.lastNameField().type(lastname)
    }

    public fillZipcodeField = (zipcode: string) => {
        ELEMENTS.zipCodeField().type(zipcode)
    }

    public fillPersonalData = (firstname: string, lastname: string, zipcode: string) => {
        this.fillFirstNameField(firstname)
        this.fillLastNameField(lastname)
        this.fillZipcodeField(zipcode)
    }

    public clickOnCheckout = () => {
        ELEMENTS.continueButton().click({ force: true })
    }

    // Assertions
    public checkIsOnPage = () => {
        ELEMENTS.continueButton().should('be.visible')
    }
}
export default new CheckoutBillingPage