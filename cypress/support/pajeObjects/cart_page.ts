import BasePage from "./base_page"

/// <reference types="cypress" />


class CartPage extends BasePage {
    NAME: string = 'Cart Page'
    URL: string = 'https://www.saucedemo.com/cart.html'

    ELEMENTS = {
        'Checkout Button': () => cy.get("[data-test='checkout']"),
    }
}
export default new CartPage