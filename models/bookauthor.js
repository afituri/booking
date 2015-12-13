"use strict";

module.exports = function(sequelize, DataTypes) {
  var BookAuthor = sequelize.define("BookAuthor", {
    status:{type:DataTypes.INTEGER(1),defaultValue:1}
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return BookAuthor;
};