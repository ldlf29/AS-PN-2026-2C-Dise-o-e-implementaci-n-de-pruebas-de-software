class pageLogin {

    typeUserName(name) {
        cy.get('input[formcontrolname="username"]').type(name)
    }

    typeUserPassword(password) {
        cy.get('input[formcontrolname="password"]').type(password)
    }

    clickLoginButton() {
        cy.get('app-login button').contains('Login').click()
    }

    isErrorMessageVisible(message) {
        cy.get('app-login').contains(message).should('be.visible')
    }

} module.exports = new pageLogin();
