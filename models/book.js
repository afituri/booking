"use strict";

module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    name: {type:DataTypes.STRING (60) , defaultValue:"Unknown"},
    status:{type:DataTypes.INTEGER(1),defaultValue:1},
    DailyRent : {type:DataTypes.DOUBLE(3)}
   }, {
    classMethods: {
      associate: function(models) {
        Book.belongsToMany(models.Author,{
          through :models.BookAuthor
        });
        Book.belongsToMany(models.Category,{
          through :models.BookCategory
        });
        Book.belongsToMany(models.Category,{
          through :models.BookOrder
        });
      }
    }
  });

  return Book;
};