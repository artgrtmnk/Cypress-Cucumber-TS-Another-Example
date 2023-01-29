Feature: Login
  Background:
    Given User has opened 'Login Page'

  @SmokeTest
  Scenario Outline: Login with correct credentials : QA-1
    When On 'Login Page' user enters in 'Username Field' value '<username>'
    And On 'Login Page' user enters in 'Password Field' value '<password>'
    And On 'Login Page' user clicks on 'Login Button'
    Then User is on the 'Product List Page'

    Examples:
      | username       | password     |
      | wrong_username | secret_sauce |

  @SmokeTest
  Scenario Outline: Login with invalid credentials : QA-2
    When On 'Login Page' user enters in 'Username Field' value '<username>'
    And On 'Login Page' user enters in 'Password Field' value '<password>'
    And On 'Login Page' user clicks on 'Login Button'
    Then User sees invalid credentials message '<message>'

    Examples:
      | username   | password   | message                                                                   |
      | [empty]    | nousername | Epic sadface: Username is required                                        |
      | nopassword | [empty]    | Epic sadface: Password is required                                        |
      | bigfloppa  | caracul    | Epic sadface: Username and password do not match any user in this service |