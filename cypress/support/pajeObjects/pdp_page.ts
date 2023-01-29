import BasePage from './base_page';

/// <reference types="cypress" />

class ProductDetailsPage extends BasePage {
  NAME = 'Product Details Page';
  URL = 'https://www.saucedemo.com/inventory-item.html?id=';

  ELEMENTS = {
    'Add To Cart Button': () => cy.contains('Add to cart'),
    'Price Value': () => cy.get('.inventory_details_price'),
    'Item Image': () => cy.get('.inventory_details_img'),
  };

  // Assertions
  public checkIsOnPage = () => {
    cy.url().then((url) => {
      expect(url).to.include(this.getPageUrl);
    });
  };
}
export default new ProductDetailsPage();
