import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const TehnHomePage = require('../../pages/TehnHomePage');
const TehnProductsPage = require('../../pages/TehnProductsPage');
const TehnCartPage = require('../../pages/TehnCartPage');
const homePage = require('../../pages/TehnHomePageSelectors').homePage;

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  let productId = ''

Given("I am on Tehnomanija's page", ()=>{
    cy.OpenShopAndAcceptCookies()
    // cy.visit("https://www.tehnomanija.rs/")
    // cy.viewport(1920,1080)
    // cy.get('button.custom-btn').contains('Prihvati kolačiće').click()
});

When("I enter {string} in the search field and click on search button", (text)=>{
    TehnHomePage.typeInSearchField(text)
    TehnHomePage.clickSearchButton()
    cy.wait(3000)
});

When("I filter for product brand {string}", (filter)=>{
    cy.get('[data-cx-focus="$"]'.replace('$', filter)).click()
    cy.wait(3000)
});

When("I add first Item to the cart", ()=>{
    cy.get('div.product-carousel--info-newprice')
    .eq(0)
    .invoke('text')
    .then((text) => text.trimStart()).as('price')

    TehnProductsPage.clickAddToCartButton()
    cy.wait(3000)

});

When("I click on the cart", ()=>{
    TehnProductsPage.clickCartButton()
});

Then("I should see the product of the selected {string} added in the cart", (filter)=>{
    TehnCartPage.VerifyItemInTheCart(filter)

    cy.then(function() {
        cy.get('div.cart-item-totalPrice').should('have.text', this.price)
    })
});