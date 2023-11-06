const express = require('express')
const app = express()
const { Author, Book } = require('./app/models')

app.get('/authors', async (req, res) => {
  const authors = await Author.findAll({ include: 'Books' })
  res.json(authors)
})

app.get('/authors/:id', async (req, res) => {
  const author = await Author.findByPk(req.params.id)
  if (!author) {
    res.status(404).json({ error: 'Author not found' })
    return
  }

  res.json(author)
})

app.get('/books', async (req, res) => {
  const books = await Book.findAll({ include: 'Author' })
  res.json(books)
})

app.get('/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id, { include: 'Author' })
  if (!book) {
    res.status(404).json({ error: 'Book not found' })
    return
  }

  res.json(book)
})

module.exports = app
