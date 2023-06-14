Feature: Login functionality

    Background: As a valid user, I should be able to login on website
    Given I am on login page

    @happy
  Scenario: As a valid user, I should be able to login on website
    When I type username, password and click on login button
    Then I should be redirected to the 'inventory' page

    Scenario: As a invalid user, I should not be able to login on website
    When I type an invalid username, invalid password and click on login button
    Then Error message should appear with the following message 'Epic sadface: Username and password do not match any user in this service'