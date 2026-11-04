const pageLogin = require('./page_objects/pageLogin')
const url = require('../fixtures/url.json')

Cypress.Commands.add('login', (name, password) => {
    pageLogin.typeUserName(name);
    pageLogin.typeUserPassword(password);
    pageLogin.clickLoginButton();
})

Cypress.Commands.add('loginAPI', (name, password) => {
    cy.request({
        method: 'POST',
        url: `${url.api}/Login`,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        },
        body: {
            username: name,
            password: password
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        return response.body
    })
})

Cypress.Commands.add('deleteCartAPI', (userId) => {
    cy.request({
        method: 'DELETE',
        url: `${url.api}/ShoppingCart/${userId}`,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})

Cypress.Commands.add('deleteWishlistAPI', (userId, token) => {
    cy.request({
        method: 'DELETE',
        url: `${url.api}/Wishlist/${userId}`,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: token
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})

Cypress.Commands.add('postToggleWishlistAPI', (userId, bookId, token, codeResponse) => {
    cy.request({
        method: 'POST',
        url: `${url.api}/Wishlist/ToggleWishlist/${userId}/${bookId}`,
        failOnStatusCode: false,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: token
        }
    }).then((response) => {
        expect(response.status).to.eq(codeResponse)
    })
})
