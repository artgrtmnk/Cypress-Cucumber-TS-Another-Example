import BasePage from "./base_page"

/// <reference types="cypress" />


const NAME = 'Cart Page'
const URL = 'https://www.saucedemo.com/cart.html'

const ELEMENTS_STEP_ONE = {
    firstNameField : () => cy.get("[data-test='firstName']"),
    lastNameField : () => cy.get("[data-test='lastName']"),
    zipCodeField : () => cy.get("[data-test='postalCode']"),
    continueButton : () => cy.get("[data-test='continue']"),
}

const ELEMENTS_STEP_TWO = {
    finishButton : () => cy.get('[data-test="finish"]'),
}

const ELEMENTS_STEP_ORDER_COMPLETE = {
    completeHeader : () => cy.get('.complete-header'),
}

class CheckoutPage extends BasePage{
    static get getPageName(): string { return NAME }
    static get getPageUrl(): string { return URL }

    static STEP_ONE_METHODS = {
        fillFirstNameField(firstname: string) {
            ELEMENTS_STEP_ONE.firstNameField().type(firstname)
        },
    
        fillLastNameField(lastname: string) {
            ELEMENTS_STEP_ONE.lastNameField().type(lastname)
        },
    
        fillZipcodeField(zipcode: string) {
            ELEMENTS_STEP_ONE.zipCodeField().type(zipcode)
        },
    
        fillPersonalData(firstname: string, lastname: string, zipcode: string) {
            this.fillFirstNameField(firstname)
            this.fillLastNameField(lastname)
            this.fillZipcodeField(zipcode)
        },
    
        clickOnCheckout() {
            ELEMENTS_STEP_ONE.continueButton().click({ force: true })
        },
    }

    static STEP_TWO_METHODS = {
        clickOnFinishButton() {
            ELEMENTS_STEP_TWO.finishButton().click({ force: true })
        }
    }

    static STEP_COMPLETE_METHODS = {
        checkOrderCompleteHeader(headerText: string) {
            ELEMENTS_STEP_ORDER_COMPLETE.completeHeader()
                .invoke('text')
                .then((text: string) => {
                    expect(text).to.be.eq(headerText)
                })
        }
    }
    
    // Assertions
    static checkIsOnPage() {
        ELEMENTS_STEP_ONE.continueButton().should('be.visible')
    }
}
export default CheckoutPage