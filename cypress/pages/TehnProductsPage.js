class TehnProductsPage {

    elements = {
        addToCartBtn: () => cy.get('[alt="cart"]').eq(0),
        cartBtn: () => cy.get('.tehnomanijaMinicart')
    }
    
    
    clickAddToCartButton() {
        this.elements.addToCartBtn().click()
    }

    clickCartButton() {
        this.elements.cartBtn().click()
    }
    
}

module.exports = new TehnProductsPage();