import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const GoogleHome = require('../../pages/GoogleHome')
const GoogleResultsPage = require('../../pages/GoogleResultsPage')

//const url = 'https://google.com'

Given("I open Google page", ()=>{
    cy.visit("https://www.google.com")
});

When("I enter the word {string} in the search field", (word)=>{
    GoogleHome.typeToSearch(word)
});

When("I click the search button", ()=>{
    GoogleHome.clickSearchBtn()
});


Then("I should see the word {string} in the results", (word)=>{
    GoogleResultsPage.verifySearchResults(word)
});