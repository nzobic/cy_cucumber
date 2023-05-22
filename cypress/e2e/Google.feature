Feature: Search for a specific word on Google and validate the word is in the results

Background:
    Given I open Google page

# Scenario: Search Cypress on Google and validate the results
#    
#    When I enter the word "Cypress" in the search field
#    And  I click the search button
#    Then I should see the word "Cypress" in the results

# Scenario: Search JavaScript on Google and validate the results
#    
#    When I enter the word "JavaScript" in the search field
#    And  I click the search button
#    Then I should see the word "JavaScript" in the results

Scenario Outline: Search "<word>" on Google and validate the results
    
    When I enter the word "<word>" in the search field
    And  I click the search button
    Then I should see the word "<word>" in the results

    Examples:
        | word         |
        | Cypress      |
        | JavaScript   |
        | PHP          |


