"use strict";

module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    status:{type:DataTypes.INTEGER(11)},
  }, {
    classMethods: {
      associate: function(models) {
        Order.belongsToMany(models.Book,{
          through :models.BookOrder
        });
      }
    }
  });

  return Order;
};