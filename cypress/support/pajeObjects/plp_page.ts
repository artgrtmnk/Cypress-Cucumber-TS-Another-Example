import BasePage from "./base_page"

/// <reference types="cypress" />


const NAME = 'Product List Page'
const URL = 'https://www.saucedemo.com/inventory.html'

const ELEMENTS = {
    burgerMenu : () => cy.get('#react-burger-menu-btn'),
}

class ProductListPage extends BasePage{
    static get getPageName(): string { return NAME }
    static get getPageUrl(): string { return URL }

    // Assertions
    static checkIsOnPage() {
        ELEMENTS.burgerMenu().should('be.visible')
    }
}
export default ProductListPage