'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      models.Book.belongsTo(models.Author)
    }
  }
  Book.init(
    {
      title: DataTypes.STRING,
      authorId: DataTypes.INTEGER,
      isbn: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Book'
    }
  )
  return Book
}
