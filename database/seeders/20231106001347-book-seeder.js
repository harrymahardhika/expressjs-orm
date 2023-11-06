'use strict'

const { faker } = require('@faker-js/faker')
const { Author } = require('../../app/models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const authors = await Author.findAll()
    const authorIds = authors.map((author) => author.id)

    const books = []
    for (let i = 0; i < 10; i++) {
      books.push({
        title: faker.lorem.sentence(),
        isbn: faker.finance.iban(),
        authorId: authorIds[Math.floor(Math.random() * authorIds.length)],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    await queryInterface.bulkInsert('Books', books)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})
  }
}
