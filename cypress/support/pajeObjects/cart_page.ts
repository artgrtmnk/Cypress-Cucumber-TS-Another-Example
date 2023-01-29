import BasePage from "./base_page"

/// <reference types="cypress" />


class CartPage extends BasePage {
    NAME: string = 'Cart Page'
    URL: string = 'https://www.saucedemo.com/cart.html'

    ELEMENTS = {
        'Checkout Button': () => cy.get("[data-test='checkout']"),
        'Remove Button': () => cy.contains("Remove"),
    }

    // Actions
    public removeItemsFromCart = (numberOfItems: number) => {
        for (let i = 0; i < numberOfItems; i++) {
            this.ELEMENTS["Remove Button"]().click()
        }
    }
}
export default new CartPage