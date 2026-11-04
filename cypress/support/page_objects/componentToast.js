class componentToast {

    validateMessage(message) {
        cy.contains(message).should('be.visible')
    }

} module.exports = new componentToast();
