class GoogleHome {

    elements = {
    searchField: () => cy.get('[name="q"]'),
    searchBtn:() => cy.get('[name="btnK"]').eq(0)
    }
    

    typeToSearch(text){
        this.elements.searchField().type(text)
    }

    clickSearchBtn(){
        this.elements.searchBtn().click()
    }
    
}

module.exports = new GoogleHome();