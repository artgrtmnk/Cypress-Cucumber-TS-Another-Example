/// <reference types="cypress" />


class PageHeader {
    ELEMENTS = {
        'Cart Icon': () => cy.get("#shopping_cart_container"),
        'Cart Element': () => this.ELEMENTS["Cart Icon"]().find('.shopping_cart_link'),
        'Cart Items Counter': () => this.ELEMENTS["Cart Icon"]().find('.shopping_cart_badge')
    }

    // Actions
    public clickOnCart = () => {
        this.ELEMENTS["Cart Element"]().click('center', { force: true })
    }

    // Assertions
    public checkCartItemsNumber = (num: string) => {
        this.ELEMENTS["Cart Items Counter"]()
            .invoke('text')
            .then((text: string) => {
                expect(text).to.be.eq(num)
            })
    }
}
export default new PageHeader