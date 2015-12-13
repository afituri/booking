"use strict";

module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    name: {type:DataTypes.STRING (60) , defaultValue:"Unknown name"},
    status:{type:DataTypes.INTEGER(1),defaultValue:1},
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return Category;
};