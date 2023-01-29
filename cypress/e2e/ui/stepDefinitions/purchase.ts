import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import PageHeader from '../../../support/pajeObjects/header_component';
import ProductListPage from '../../../support/pajeObjects/plp_page';
import ProductDetailsPage from '../../../support/pajeObjects/pdp_page';
import CartPage from '../../../support/pajeObjects/cart_page';
import CheckoutBillingPage from '../../../support/pajeObjects/checkout_billing_page';
import CheckoutOrderPage from '../../../support/pajeObjects/checkout_order_page';
import OrderConfirmationPage from '../../../support/pajeObjects/order_confirmation_page';


/// <reference types="cypress" />

describe('Purchase Step Definitions', () => {
    When('User clicks on random item on Product List Page', () => {
        ProductListPage.clickOnRandomProduct()
    });

    When('User clicks on Add To Cart', () => {
        ProductDetailsPage.getPriceValue()
        ProductDetailsPage.clickOnAddToCartButton()
    });

    When('User clicks on Checkout', () => {
        CartPage.clickOnCheckout()
    });

    When('User fills firstname with {string}, lastname with {string}, zipcode with {string}',
        (firstname: string, lastName: string, zipcode: string) => {
            CheckoutBillingPage.fillPersonalData(firstname, lastName, zipcode)
        });

    When('User clicks on Continue within Checkout', () => {
        CheckoutBillingPage.clickOnCheckout()
    });

    When('User clicks on Finish', () => {
        CheckoutOrderPage.clickOnFinishButton()
    });

    Then('Cart counter number changes to {string}', (num: string) => {
        PageHeader.checkCartItemsNumber(num);
    })

    Then('Checkout success message appears', () => {
        OrderConfirmationPage.checkOrderCompleteHeader("THANK YOU FOR YOUR ORDER")
    })
})