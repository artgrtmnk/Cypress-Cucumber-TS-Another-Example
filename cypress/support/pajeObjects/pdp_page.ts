import BasePage from "./base_page"

/// <reference types="cypress" />


const NAME = 'Product Details Page'
const URL = 'https://www.saucedemo.com/inventory-item.html?id='

const ELEMENTS = {
    price : () => cy.get(".inventory_details_price"),
    addToCartButton : () => cy.contains("Add to cart"),
    itemImage : () => cy.get(".inventory_details_img"),
    cartIcon : () => cy.get("#shopping_cart_container"),
}

class ProductDetailsPage extends BasePage{
    static get getPageName(): string { return NAME }
    static get getPageUrl(): string { return URL }

    static getPriceValue() {
        return ELEMENTS.price().invoke('text').then((text:string) => text)
    }

    static clickOnAddToCartButton() {
        ELEMENTS.addToCartButton().click({ force: true })
    }

    static clickOnCart() {
        ELEMENTS.cartIcon().find(".shopping_cart_link").click('center', { force: true })
    }

    // Assertions
    static checkIsOnPage() {
        ELEMENTS.itemImage().should('be.visible')
    }

    static checkCartItemsNumber(num: string) {
        ELEMENTS.cartIcon().find('.shopping_cart_badge')
            .invoke('text')
            .then((text: string) => {
                expect(text).to.be.eq(num)
            })
    }
}
export default ProductDetailsPage