/// <reference types="cypress" />


const ELEMENTS = {
    cartIcon: () => cy.get("#shopping_cart_container"),
    cartElement: () => ELEMENTS.cartIcon().find('.shopping_cart_link'),
    cartItemsCounter: () => ELEMENTS.cartIcon().find('.shopping_cart_badge')
}

class PageHeader {
    // Actions
    public clickOnCart = () => {
        ELEMENTS.cartElement().click('center', { force: true })
    }

    // Assertions
    public checkCartItemsNumber = (num: string) => {
        ELEMENTS.cartItemsCounter()
            .invoke('text')
            .then((text: string) => {
                expect(text).to.be.eq(num)
            })
    }
}
export default new PageHeader