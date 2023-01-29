Feature: Item purchase
  Background:
    Given User is logged in

  @e2eTest
  Scenario Outline: User buyes an item successfuly : QA-3
    When User clicks on random item on Product List Page
    Then User is on the 'Product Details Page'
    When On 'Product Details Page' user clicks on 'Add To Cart Button'
    Then Cart counter number changes to '5'
    When User clicks on Cart icon
    Then User is on the 'Cart Page'
    When On 'Cart Page' user clicks on 'Checkout Button'
    Then User is on the 'Checkout Billing Page'
    When User fills firstname with 'John', lastname with 'Doe', zipcode with '12345'
    And On 'Checkout Billing Page' user clicks on 'Continue Button'
    Then User is on the 'Checkout Order Page'
    When On 'Checkout Order Page' user clicks on 'Finish Button'
    Then User is on the 'Order Confirmation Page'
    And Checkout success message appears
