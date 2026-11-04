import user from '../fixtures/user.json'
import url from '../fixtures/url.json'
import book from '../fixtures/book.json'
const pageHome = require('../support/page_objects/pageHome')
const pageCart = require('../support/page_objects/pageCart')
const componentNav = require('../support/page_objects/componentNav')
const componentToast = require('../support/page_objects/componentToast')

describe('Casos de prueba de FRONT', () => {

  it('Eliminar un libro del carrito y visualizar el contador en 0 | Lucas de la Fuente', () => {

    cy.loginAPI(user.username, user.password).then((session) => {
      cy.deleteCartAPI(session.userDetails.userId)
    })

    cy.visit(url.login)
    cy.login(user.username, user.password)
    cy.url().should('eq', url.home)
    pageHome.isBookVisible(book.title)
    componentNav.validationNumberCartBadge('0')

    pageHome.clickAddToCartButton(book.title)
    componentToast.validateMessage('One Item added to cart')
    componentNav.validationNumberCartBadge('1')

    componentNav.clickCartIcon()
    cy.url().should('eq', url.cart)
    pageCart.isBookInCart(book.title)

    pageCart.clickDeleteButton(book.title)
    componentToast.validateMessage('Book removed from cart')
    pageCart.isCartEmpty()
    componentNav.validationNumberCartBadge('0')
  })

})
