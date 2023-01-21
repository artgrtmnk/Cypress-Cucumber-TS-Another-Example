Feature: Login
  Background:
    Given User has opened 'Login' page

  @SmokeTest
  Scenario Outline: Login with correct credentials : QA-1
    When User inputs '<username>' as username
    And User inputs '<password>' as password
    And User presses Login button
    Then User was logged in

    Examples: 
      | username        | password     |
      | standard_user   | secret_sauce |

  @SmokeTest
  Scenario Outline: Login with invalid credentials : QA-2
    When User inputs '<username>' as username
    And User inputs '<password>' as password
    And User presses Login button
    Then User sees invalid credentials message '<message>'

    Examples: 
      | username   | password   | message                                                                   |
      | [empty]    | nousername | Epic sadface: Username is required                                        |
      | nopassword | [empty]    | Epic sadface: Password is required                                        |
      | bigfloppa  | caracul    | Epic sadface: Username and password do not match any user in this service |