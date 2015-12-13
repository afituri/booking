"use strict";

module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    name: {type:DataTypes.STRING (60) , defaultValue:"Unknown name"},
    status:{type:DataTypes.INTEGER(1),defaultValue:1},
    email : DataTypes.STRING (150),
    phone : DataTypes.STRING (11),
    idNumber : DataTypes.STRING (12)
  }, {
    classMethods: {
      associate: function(models) {
        Customer.hasMany(models.Order,{

        });
      }
    }
  });

  return Customer;
};