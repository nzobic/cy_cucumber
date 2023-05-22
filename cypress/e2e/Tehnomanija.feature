Feature: Add Item to the cart and validate that the Item is has been successfully added

    Scenario Outline: Add Item "<text>" to the cart
        Given I am on Tehnomanija's page
        When I enter "<text>" in the search field and click on search button
        When I filter for product brand "<filter>"
        When I add first Item to the cart
        When I click on the cart
        Then I should see the product of the selected "<filter>" added in the cart

    Examples:
        | text      | filter    |
        | Mikseri   | BOSCH     |
        | Usisivači | SAMSUNG   |
        | Frižider  | VOX       |