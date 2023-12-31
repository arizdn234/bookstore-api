const { Book } = require('../models')

class bookController {
    static async getAllBooks (req, res) {
        try {
            const book = await Book.findAll()
            res.status(200).json({
                status: 'success',
                data: book
            })
        } catch (error) {
            res.status(400).json({
                status: 'failed',
                message: error.message
            })
        }
    }
    
    static async createBook (req, res) {
        try {
            const { title, author, stock } = req.body
            const book = await Book.create({
                title,
                author,
                stock
            }) 
            res.status(201).json({
                status: 'success',
                data: book
            })
        } catch (error) {
            res.status(400).json({
                status: 'failed',
                message: error.message
            })
        }
    }

    static async getBookByID (req, res) {
        try {
            const bookID = req.params.id
            const book = await Book.findByPk(bookID)

            if (!book) {
                return res.status(404).json({
                    status: 'failed',
                    message: 'Book not found'
                })
            }
            
            res.status(200).json({
                status: 'success',
                data: book
            })
        } catch (error) {
            res.status(400).json({
                status: 'failed',
                message: error.message
            })
        }
    }

    static async updateBookByID (req, res) {
        try {
            const bookID = req.params.id
            const { title, author, stock } = req.body
            const book = await Book.findByPk(bookID)

            if (!book) {
                return res.status(404).json({
                    status: 'failed',
                    message: 'Book not found'
                })
            }

            await book.update({
                title,
                author,
                stock
            })
            
            res.status(200).json({
                status: 'success',
                data: book
            })
        } catch (error) {
            res.status(400).json({
                status: 'failed',
                message: error.message
            })
        }
    }

    static async deleteBookByID (req, res) {
        try {
            const bookID = req.params.id
            const book = await Book.findByPk(bookID)

            if (!book) {
                return res.status(404).json({
                    status: 'failed',
                    message: 'Book not found'
                })
            }

            await book.destroy()
            
            res.status(200).json({
                status: 'success',
                message: 'Successfully deleted'
            })
        } catch (error) {
            res.status(400).json({
                status: 'failed',
                message: error.message
            })
        }
    }
}

module.exports = bookController