import BasePage from "./base_page"

/// <reference types="cypress" />


class ProductListPage extends BasePage {
    NAME: string = 'Product List Page'
    URL: string = 'https://www.saucedemo.com/inventory.html'

    ELEMENTS = {
        'Inventory Item Name': () => cy.get(".inventory_item_name")
    }

    // Actions
    public clickOnRandomProduct = () => {
        this.ELEMENTS["Inventory Item Name"]().then((elements) => {
            const randomItem = elements[Math.floor(Math.random() * elements.length)]
            cy.wrap(randomItem).click({ force: true })
        })
    }
}
export default new ProductListPage