import BasePage from './base_page';
import Actions from '../helpers/actions';

/// <reference types="cypress" />

class CheckoutBillingPage extends BasePage {
  NAME = 'Checkout Billing Page';
  URL = 'https://www.saucedemo.com/checkout-step-one.html';

  ELEMENTS = {
    'Firstname Field': () => cy.get("[data-test='firstName']"),
    'Lastname Field': () => cy.get("[data-test='lastName']"),
    'Zipcode Field': () => cy.get("[data-test='postalCode']"),
    'Continue Button': () => cy.get("[data-test='continue']"),
  };

  public fillPersonalData = (
    firstname: string,
    lastname: string,
    zipcode: string,
  ) => {
    Actions.fillFieldWithValue(this.NAME, 'Firstname Field', firstname);
    Actions.fillFieldWithValue(this.NAME, 'Lastname Field', lastname);
    Actions.fillFieldWithValue(this.NAME, 'Zipcode Field', zipcode);
  };
}
export default new CheckoutBillingPage();
