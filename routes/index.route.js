const BookController = require('../controllers/book.controller')

const router = require('express').Router()

router.get('/books', BookController.getAllBooks) // getAll
router.post('/books', BookController.createBook) // createBook
router.get('/books/:id', BookController.getBookByID) // getBookByID
router.put('/books/:id', BookController.updateBookByID) // updateBookByID
router.delete('/books/:id', BookController.deleteBookByID) // deleteBookByID

module.exports = router