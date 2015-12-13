"use strict";

module.exports = function(sequelize, DataTypes) {
  var BookOrder = sequelize.define("BookOrder", {
    fromdate:{type:DataTypes.DATEONLY},
    todate:{type:DataTypes.DATEONLY},
    status:{type:DataTypes.INTEGER(1),defaultValue:1}
  }, {
    classMethods: {
      associate: function(models) {



      }
    }
  });
  return BookOrder;
};