class TehnCartPage {

    elements = {
        cartItem: () => cy.get('div.cart-item-name')
    }
    
    
    VerifyItemInTheCart(brand) {
        this.elements.cartItem().contains(brand)
    }
        
}

module.exports = new TehnCartPage();