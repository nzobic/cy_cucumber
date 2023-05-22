class GoogleResultsPage {

    elements = {
        resultSearch: () => cy.get('#rso'),
    }
    

    verifySearchResults(text){
        this.elements.resultSearch().contains(text)
    }
    
}

module.exports = new GoogleResultsPage();