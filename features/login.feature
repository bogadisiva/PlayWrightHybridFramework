Feature: Login


@login
Scenario: Successful Login
    Given I open the login page
    When Enter the username and password
    # Then I should see the dashboard 