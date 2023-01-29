import BasePage from "./base_page"

/// <reference types="cypress" />


const ELEMENTS = {
    price: () => cy.get(".inventory_details_price"),
    addToCartButton: () => cy.contains("Add to cart"),
    itemImage: () => cy.get(".inventory_details_img"),
    cartIcon: () => cy.get("#shopping_cart_container"),
}

class ProductDetailsPage extends BasePage {
    NAME: string = 'Product Details Page'
    URL: string = 'https://www.saucedemo.com/inventory-item.html?id='

    // Actions
    public getPriceValue = () => {
        return ELEMENTS.price().invoke('text').then((text) => Cypress.env('pdpPrice', text))
    }

    public clickOnAddToCartButton = () => {
        ELEMENTS.addToCartButton().click({ force: true })
    }

    // Assertions
    public checkIsOnPage = () => {
        cy.url().then((url) => {
            expect(url).to.include(this.getPageUrl)
        })
    }
}
export default new ProductDetailsPage