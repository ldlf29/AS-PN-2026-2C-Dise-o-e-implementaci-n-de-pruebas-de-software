class pageCheckout {

    isBookInOrderSummary(title) {
        cy.get('app-checkout').contains('td', title).should('be.visible')
    }

    isFormVisible() {
        cy.get('input[formcontrolname="name"]').should('be.visible')
        cy.get('input[formcontrolname="addressLine1"]').should('be.visible')
        cy.get('input[formcontrolname="addressLine2"]').should('be.visible')
        cy.get('input[formcontrolname="pincode"]').should('be.visible')
        cy.get('input[formcontrolname="state"]').should('be.visible')
    }

    fillForm(shipping) {
        cy.get('input[formcontrolname="name"]').type(shipping.name)
        cy.get('input[formcontrolname="addressLine1"]').type(shipping.address1)
        cy.get('input[formcontrolname="addressLine2"]').type(shipping.address2)
        cy.get('input[formcontrolname="pincode"]').type(shipping.pincode)
        cy.get('input[formcontrolname="state"]').type(shipping.state)
    }

    clickPlaceOrderButton() {
        cy.get('app-checkout').contains('button', 'Place Order').click()
    }

} module.exports = new pageCheckout();
