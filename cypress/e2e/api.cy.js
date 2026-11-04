import user from '../fixtures/user.json'
import book from '../fixtures/book.json'

describe('Casos de prueba de APIs', () => {

    it('API | Agregar libro a la wishlist exitosamente | Lucas de la Fuente', () => {
        cy.loginAPI(user.username, user.password).then((session) => {
            const token = `Bearer ${session.token}`
            cy.deleteWishlistAPI(session.userDetails.userId, token)
            cy.postToggleWishlistAPI(session.userDetails.userId, book.bookId, token, 200).then((response) => {
                expect(response.body).to.have.length(1)
                expect(response.body[0].bookId).to.eq(book.bookId)
                expect(response.body[0].title).to.eq(book.title)
            })
        })
    })

    it('API | Error al agregar libro a la wishlist sin token | Lucas de la Fuente', () => {
        cy.loginAPI(user.username, user.password).then((session) => {
            cy.postToggleWishlistAPI(session.userDetails.userId, book.bookId, '', 401)
        })
    })

})
