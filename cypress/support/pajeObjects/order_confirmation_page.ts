import BasePage from "./base_page"

/// <reference types="cypress" />


const ELEMENTS = {
    completeHeader: () => cy.get('.complete-header'),
}

class OrderConfirmationPage extends BasePage {
    NAME: string = 'Order Confirmation Page'
    URL: string = 'https://www.saucedemo.com/checkout-complete.html'

    // Actions
    public checkOrderCompleteHeader = (headerText: string) => {
        ELEMENTS.completeHeader()
            .invoke('text')
            .then((text: string) => {
                expect(text).to.be.eq(headerText)
            })
    }
}
export default new OrderConfirmationPage