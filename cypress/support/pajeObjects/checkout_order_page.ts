import BasePage from "./base_page"

/// <reference types="cypress" />


const ELEMENTS = {
    finishButton: () => cy.get('[data-test="finish"]'),
}

class CheckoutOrderPage extends BasePage {
    NAME: string = 'Checkout Order Page'
    URL: string = 'https://www.saucedemo.com/checkout-step-two.html'

    // Actions
    public clickOnFinishButton = () => {
        ELEMENTS.finishButton().click({ force: true })
    }
}
export default new CheckoutOrderPage