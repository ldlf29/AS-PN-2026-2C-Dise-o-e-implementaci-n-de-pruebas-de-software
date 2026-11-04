const pageLogin = require('./page_objects/pageLogin')
const url = require('../fixtures/url.json')
const checkout = require('../fixtures/checkout.json')

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

Cypress.Commands.add('postLoginAPI', (name, password, codeResponse) => {
    cy.request({
        method: 'POST',
        url: `${url.api}/Login`,
        failOnStatusCode: false,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        },
        body: {
            username: name,
            password: password
        }
    }).then((response) => {
        expect(response.status).to.eq(codeResponse)
    })
})

Cypress.Commands.add('getBooksAPI', () => {
    cy.request({
        method: 'GET',
        url: `${url.api}/Book`,
        headers: {
            accept: 'application/json'
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        return response.body
    })
})

Cypress.Commands.add('getBookAPI', (bookId, codeResponse) => {
    cy.request({
        method: 'GET',
        url: `${url.api}/Book/${bookId}`,
        failOnStatusCode: false,
        headers: {
            accept: 'application/json'
        }
    }).then((response) => {
        expect(response.status).to.eq(codeResponse)
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

Cypress.Commands.add('postCheckOutAPI', (userId, token, codeResponse) => {
    cy.request({
        method: 'POST',
        url: `${url.api}/CheckOut/${userId}`,
        failOnStatusCode: false,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: token
        },
        body: checkout
    }).then((response) => {
        expect(response.status).to.eq(codeResponse)
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
