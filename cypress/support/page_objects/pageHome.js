class pageHome {

    isBookVisible(title) {
        cy.contains('app-book-card', title).should('be.visible')
    }

    clickAddToCartButton(title) {
        cy.contains('app-book-card', title).find('button').contains('Add to Cart').click()
    }

} module.exports = new pageHome();
