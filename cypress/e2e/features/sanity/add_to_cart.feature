Feature: Add item to the cart
  Background:
    Given User is logged in

  @SanityTest
  Scenario Outline: User adds items to cart successfuly : QA-4
    When User adds 3 items to the cart
    Then Cart counter number changes to '3'

  @SanityTest
  Scenario Outline: User removes items from cart successfuly : QA-5
    When User adds 3 items to the cart
    Then Cart counter number changes to '3'
    When User clicks on Cart icon
    Then User is on the 'Cart Page'
    When User removes 2 items from cart
    Then Cart counter number changes to '1'
    When User removes 1 items from cart
    Then Cart counter number disappear
