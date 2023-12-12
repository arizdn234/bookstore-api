const bookController = require('../controllers/book.controller')
const BookController = require('../controllers/book.controller')
const UserController = require('../controllers/user.controller')
const Authorization = require('../middlewares/authorization.middleware')

const router = require('express').Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)

// customer
router.get('/books', BookController.getAllBooks) // getAll | no need login
router.get('/books/:id', Authorization.authorizationCustomer, bookController.getBookByID)

// admin
router.post('/admin/books', Authorization.authorizationAdmin, BookController.createBook) // createBook | admin
router.get('/admin/books/:id', Authorization.authorizationAdmin,  BookController.getBookByID) // getBookByID | admin
router.put('/admin/books/:id', Authorization.authorizationAdmin, BookController.updateBookByID) // updateBookByID | admin
router.delete('/admin/books/:id', Authorization.authorizationAdmin, BookController.deleteBookByID) // deleteBookByID | admin

module.exports = router