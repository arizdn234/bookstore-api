const BookController = require('../controllers/book.controller')
const UserController = require('../controllers/user.controller')
const Authorization = require('../middlewares/authorization.middleware')

const router = require('express').Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.get('/books', BookController.getAllBooks) // getAll
router.post('/books', Authorization.authorizationAdmin, BookController.createBook) // createBook | admin
router.get('/books/:id', Authorization.authorizationAdmin, Authorization.authorizationCustomer, BookController.getBookByID) // getBookByID | customer
router.put('/books/:id', Authorization.authorizationAdmin, BookController.updateBookByID) // updateBookByID | admin
router.delete('/books/:id', Authorization.authorizationAdmin, BookController.deleteBookByID) // deleteBookByID | admin

module.exports = router