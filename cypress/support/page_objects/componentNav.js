class componentNav {

    validationNumberCartBadge(cant) {
        cy.get('mat-toolbar').contains('mat-icon', 'shopping_cart').find('.mat-badge-content').should('have.text', cant)
    }

    clickCartIcon() {
        cy.get('mat-toolbar').contains('mat-icon', 'shopping_cart').click()
    }

} module.exports = new componentNav();
