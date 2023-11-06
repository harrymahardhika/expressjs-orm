'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', [
      {
        name: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {})
  }
}
