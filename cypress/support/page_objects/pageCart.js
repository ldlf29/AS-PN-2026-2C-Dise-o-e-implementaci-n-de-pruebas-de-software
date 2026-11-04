class pageCart {

    isBookInCart(title) {
        cy.get('app-shoppingcart').contains('a', title).should('be.visible')
    }

    clickDeleteButton(title) {
        cy.get('app-shoppingcart').contains('tr', title).contains('mat-icon', 'delete').click()
    }

    isCartEmpty() {
        cy.get('app-shoppingcart').contains('Your shopping cart is empty.').should('be.visible')
    }

} module.exports = new pageCart();
