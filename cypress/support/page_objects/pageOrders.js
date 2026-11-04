class pageOrders {

    isOrderListVisible() {
        cy.get('app-my-orders tr.example-element-row').should('have.length.greaterThan', 0)
    }

    clickFirstOrder() {
        cy.get('app-my-orders tr.example-element-row').first().click()
    }

    isBookInFirstOrder(title) {
        cy.get('app-my-orders tr.example-detail-row').first().contains('a', title).should('be.visible')
    }

} module.exports = new pageOrders();
