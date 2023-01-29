import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import PageHeader from '../../../support/pajeObjects/header_component';
import ProductListPage from '../../../support/pajeObjects/plp_page';
import CartPage from '../../../support/pajeObjects/cart_page';


/// <reference types="cypress" />

describe('Purchase Step Definitions', () => {
    When('User adds {int} items to the cart', (numberOfItems: number) => {
        ProductListPage.addItemsToCart(numberOfItems)
    });

    When('User removes {int} items from cart', (numberOfItems: number) => {
        CartPage.removeItemsFromCart(numberOfItems)
    });

    Then('Cart counter number changes to {string}', (num: string) => {
        PageHeader.checkCartItemsNumber(num);
    })

    Then('Cart counter number disappear', () => {
        PageHeader.checkCartIsEmpty();
    })
})