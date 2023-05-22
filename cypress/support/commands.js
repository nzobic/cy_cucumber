const homePage = require('../pages/TehnHomePageSelectors').homePage;
const TehnHomePage = require('../pages/TehnHomePage')

/**
 * @memberof cy
 * @method OpenShopAndAcceptCookies Open Tehnomanija web shop, adjust resulution and accept cookies
 */
Cypress.Commands.add('OpenShopAndAcceptCookies', () => {
    cy.visit("https://www.tehnomanija.rs/")
    cy.viewport(1920,1080)
    //cy.get(homePage.acceptCookiesBtn).contains('Prihvati kolačiće').click()
    TehnHomePage.clickAcceptCookies()
})