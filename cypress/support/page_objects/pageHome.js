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

    clickCategory(category) {
        cy.get('app-book-filter').contains('mat-list-item', category).click()
    }

    isCategorySelected(category) {
        cy.get('app-book-filter').contains('mat-list-item', category).should('have.class', 'active-category')
    }

    validateBookList(books) {
        cy.get('app-book-card').should('have.length', books.length)
        books.forEach((title) => {
            cy.contains('app-book-card', title).should('be.visible')
        })
    }

} module.exports = new pageHome();
