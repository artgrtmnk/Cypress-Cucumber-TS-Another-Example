import BasePage from './base_page';

/// <reference types="cypress" />

class ProductListPage extends BasePage {
  NAME = 'Product List Page';
  URL = 'https://www.saucedemo.com/inventory.html';

  ELEMENTS = {
    'Inventory Item Name': () => cy.get('.inventory_item_name'),
    'Add To Cart Button': () => cy.contains('Add to cart'),
  };

  // Actions
  public clickOnRandomProduct = () => {
    this.ELEMENTS['Inventory Item Name']().then((elements) => {
      const randomItem = elements[Math.floor(Math.random() * elements.length)];
      cy.wrap(randomItem).click({ force: true });
    });
  };

  public addItemsToCart = (numberOfItems: number) => {
    for (let i = 0; i < numberOfItems; i++) {
      this.ELEMENTS['Add To Cart Button']().click();
    }
  };
}
export default new ProductListPage();
