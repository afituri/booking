"use strict";

module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    name: {type:DataTypes.STRING (60) , defaultValue:"Unknown"},
    status:{type:DataTypes.INTEGER(1),defaultValue:1},
    birtday : DataTypes.DATEONLY(),
    country : DataTypes.STRING (15),
    bio : DataTypes.TEXT()
  }, {
    classMethods: {
      associate: function(models) {
        Author.belongsToMany(models.Book,{
          through :models.BookAuthor
        });
      }
    }
  });

  return Author;
};