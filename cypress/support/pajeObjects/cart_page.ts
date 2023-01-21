import BasePage from "./base_page"

/// <reference types="cypress" />


const NAME = 'Cart Page'
const URL = 'https://www.saucedemo.com/cart.html'

const ELEMENTS = {
    checkoutButton : () => cy.get("[data-test='checkout']"),
}

class CartPage extends BasePage{
    static get getPageName(): string { return NAME }
    static get getPageUrl(): string { return URL }

    static clickOnCheckout() {
        ELEMENTS.checkoutButton().click({ force: true })
    }

    // Assertions
    static checkIsOnPage() {
        ELEMENTS.checkoutButton().should('be.visible')
    }
}
export default CartPage