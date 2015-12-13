"use strict";

module.exports = function(sequelize, DataTypes) {
  var BookOrder = sequelize.define("BookOrder", {
    fromdate:type:DataTypes.DATEONLY(),
    todate:type:DataTypes.DATEONLY()
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return BookOrder;
};