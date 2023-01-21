import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import ProductListPage from '../../../support/pajeObjects/plp_page';
import ProductDetailsPage from '../../../support/pajeObjects/pdp_page';
import CartPage from '../../../support/pajeObjects/cart_page';
import CheckoutPage from '../../../support/pajeObjects/checkout_page';

/// <reference types="cypress" />

describe('Purchase Step Definitions', () => {
    When('User clicks on random item on Product List Page', () => {
        ProductListPage.clickOnRandomProduct()
    });

    When('User clicks on Add To Cart', () => {
        ProductDetailsPage.clickOnAddToCartButton()
    });

    When('User clicks on Checkout', () => {
        CartPage.clickOnCheckout()
    });

    When('User fills firstname with {string}, lastname with {string}, zipcode with {string}', 
    (firstname: string, lastName: string, zipcode: string) => {
        CheckoutPage.STEP_ONE_METHODS.fillPersonalData(firstname, lastName, zipcode)
    });

    When('User clicks on Continue within Checkout', () => {
        CheckoutPage.STEP_ONE_METHODS.clickOnCheckout()
    });

    When('User clicks on Finish', () => {
        CheckoutPage.STEP_TWO_METHODS.clickOnFinishButton()
    });

    Then('Cart counter number changes to {string}', (num: string) => {
        ProductDetailsPage.checkCartItemsNumber(num);
    })

    Then('Checkout success message appears', () => {
        CheckoutPage.STEP_COMPLETE_METHODS.checkOrderCompleteHeader("THANK YOU FOR YOUR ORDER")
    })
})