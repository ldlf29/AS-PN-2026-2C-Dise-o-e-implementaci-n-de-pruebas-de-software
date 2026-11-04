import user from '../fixtures/user.json'
import book from '../fixtures/book.json'
import login from '../fixtures/login.json'

describe('Casos de prueba de APIs', () => {

    it('API | Comprar carrito exitosamente', () => {
        cy.loginAPI(user.username, user.password).then((session) => {
            cy.postCheckOutAPI(session.userDetails.userId, `Bearer ${session.token}`, 200)
        })
    })

    it('API | Error al comprar carrito sin token', () => {
        cy.loginAPI(user.username, user.password).then((session) => {
            cy.postCheckOutAPI(session.userDetails.userId, '', 401)
        })
    })

    it('API | Obtener detalle de un libro existente por ID | Yutzura Marcano', () => {
        cy.getBookAPI(book.bookId, 200).then((response) => {
            expect(response.body.bookId).to.eq(book.bookId)
            expect(response.body.title).to.eq(book.title)
            expect(response.body.category).to.eq(book.category)
            expect(response.body).to.have.property('author')
            expect(response.body).to.have.property('price')
        })
    })

    it('API | Error al buscar libro con ID inexistente | Yutzura Marcano', () => {
        cy.getBookAPI(book.invalidBookId, 404)
    })

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

    it('API | Inicio de sesión exitoso y obtención de token | Andrea Ponce', () => {
        cy.postLoginAPI(user.username, user.password, 200).then((response) => {
            expect(response.body.token).to.be.a('string').and.not.be.empty
            expect(response.body.userDetails.username).to.eq(user.username)
        })
    })

    it('API | Error al intentar iniciar sesión con contraseña incorrecta | Andrea Ponce', () => {
        cy.postLoginAPI(user.username, login.invalidPassword, 401)
    })

})
