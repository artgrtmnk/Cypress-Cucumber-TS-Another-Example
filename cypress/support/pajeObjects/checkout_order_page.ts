import BasePage from './base_page';

/// <reference types="cypress" />

class CheckoutOrderPage extends BasePage {
  NAME = 'Checkout Order Page';
  URL = 'https://www.saucedemo.com/checkout-step-two.html';

  ELEMENTS = {
    'Finish Button': () => cy.get('[data-test="finish"]'),
  };
}
export default new CheckoutOrderPage();
