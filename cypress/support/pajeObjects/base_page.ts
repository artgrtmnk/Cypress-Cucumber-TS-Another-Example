/// <reference types="cypress" />


abstract class BasePage {
    abstract NAME: string;
    abstract URL: string;

    abstract ELEMENTS: any;

    public get getPageName(): string {
        return this.NAME
    }

    public get getPageUrl(): string {
        return this.URL
    }

    public checkIsOnPage() {
        cy.url().then((url) => {
            expect(url).to.be.eq(this.getPageUrl)
        })
    }
}
export default BasePage