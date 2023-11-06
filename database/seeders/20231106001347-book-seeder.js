'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'The Hobbit',
        isbn: '978-0547928227',
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Fellowship of the Ring',
        isbn: '978-0547928210',
        authorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})
  }
}
