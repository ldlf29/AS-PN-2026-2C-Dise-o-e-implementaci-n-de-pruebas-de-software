class pageHome {

    isBookVisible(title) {
        cy.contains('app-book-card', title).should('be.visible')
    }

    isFirstBook(title) {
        cy.get('app-book-card').first().should('be.visible').and('contain', title)
    }

    clickAddToCartFirstBook() {
        cy.get('app-book-card').first().find('button').contains('Add to Cart').click()
    }

    clickAddToCartButton(title) {
        cy.contains('app-book-card', title).find('button').contains('Add to Cart').click()
    }

} module.exports = new pageHome();
