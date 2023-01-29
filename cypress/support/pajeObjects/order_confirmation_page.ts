import BasePage from './base_page';

/// <reference types="cypress" />

class OrderConfirmationPage extends BasePage {
  NAME = 'Order Confirmation Page';
  URL = 'https://www.saucedemo.com/checkout-complete.html';

  ELEMENTS = {
    'Complete Header': () => cy.get('.complete-header'),
  };

  // Actions
  public checkOrderCompleteHeader = (headerText: string) => {
    this.ELEMENTS['Complete Header']()
      .invoke('text')
      .then((text: string) => {
        expect(text).to.be.eq(headerText);
      });
  };
}
export default new OrderConfirmationPage();
