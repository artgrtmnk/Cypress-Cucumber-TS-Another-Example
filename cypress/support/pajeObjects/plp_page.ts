import BasePage from "./base_page"

/// <reference types="cypress" />


const ELEMENTS = {
    inventoryItemName: () => cy.get(".inventory_item_name")
}

class ProductListPage extends BasePage {
    NAME: string = 'Product List Page'
    URL: string = 'https://www.saucedemo.com/inventory.html'

    // Actions
    public clickOnRandomProduct = () => {
        ELEMENTS.inventoryItemName().then((elements) => {
            const randomItem = elements[Math.floor(Math.random() * elements.length)]
            cy.wrap(randomItem).click({ force: true })
        })
    }

    // Assertions
    public checkIsOnPage = () => {
        cy.url().then((url) => {
            expect(url).to.be.eq(this.getPageUrl)
        })
    }
}
export default new ProductListPage