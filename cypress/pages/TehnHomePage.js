class TehnHomePage {

    elements = {
        acceptCookies: () => cy.get('button.custom-btn'),
        searchField: () => cy.get('[aria-label="search"]'),
        searchBtn: () => cy.get('.thm-search')
    }
    

    clickAcceptCookies() {
        this.elements.acceptCookies().contains('Prihvati kolačiće').click()
    }
    
    typeInSearchField(product) {
        this.elements.searchField().type(product)
    }

    clickSearchButton() {
        this.elements.searchBtn().click()
    }
    
}

module.exports = new TehnHomePage();