'use strict'

const { faker } = require('@faker-js/faker')

const authors = []

for (let i = 0; i < 10; i++) {
  authors.push({
    name: faker.person.fullName(),
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', authors)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {})
  }
}
