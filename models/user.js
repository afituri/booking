"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {type:DataTypes.STRING (60) , defaultValue:"Unknown name"},
    status:{type:DataTypes.INTEGER(1),defa10tValue:1},
    password : DataTypes.STRING (500),
    salt : DataTypes.STRING (500),
    email : DataTypes.STRING (150)
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return User;
};