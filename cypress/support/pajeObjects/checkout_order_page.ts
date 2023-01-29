import BasePage from "./base_page"

/// <reference types="cypress" />


const ELEMENTS = {
    finishButton: () => cy.get('[data-test="finish"]'),
}

class CheckoutOrderPage extends BasePage {
    NAME: string = 'Checkout Order Page'
    URL: string = 'https://www.saucedemo.com/inventory-item.html?id='

    // Actions
    public clickOnFinishButton = () => {
        ELEMENTS.finishButton().click({ force: true })
    }

    // Assertions
    public checkIsOnPage = () => {
        ELEMENTS.finishButton().should('be.visible')
    }
}
export default new CheckoutOrderPage