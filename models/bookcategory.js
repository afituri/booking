"use strict";

module.exports = function(sequelize, DataTypes) {
  var BookCategory = sequelize.define("BookCategory", {
    status:{type:DataTypes.INTEGER(1),defaultValue:1}
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return BookCategory;
};