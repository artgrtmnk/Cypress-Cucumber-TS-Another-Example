import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

import ProductListPage from '../../../support/pajeObjects/plp_page';
import CheckoutBillingPage from '../../../support/pajeObjects/checkout_billing_page';
import OrderConfirmationPage from '../../../support/pajeObjects/order_confirmation_page';

/// <reference types="cypress" />

describe('Purchase Step Definitions', () => {
  When('User clicks on random item on Product List Page', () => {
    ProductListPage.clickOnRandomProduct();
  });

  When(
    'User fills firstname with {string}, lastname with {string}, zipcode with {string}',
    (firstname: string, lastName: string, zipcode: string) => {
      CheckoutBillingPage.fillPersonalData(firstname, lastName, zipcode);
    },
  );

  Then('Checkout success message appears', () => {
    OrderConfirmationPage.checkOrderCompleteHeader('THANK YOU FOR YOUR ORDER');
  });
});
