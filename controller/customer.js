var models = require("../models");
exports.customer = {
   /* add new custumer*/
    addCustomer : function(obj1,obj2,cb){
    models.Customer.create(obj1).then(function(result) {
      cb(result);
      });
    models.Customer.create(obj2).then(function(result) {
      cb(result);
      });
    },
   /*Edit Customer*/
   editCustomer : function(customerId,obj,cb){
    models.Customer.update(obj,{where : {id : customerId}})
      .then(function (result){
        cb(result);
      });
     }, 
    //Delete Customer:
    deleteCustomer : function (customerId,cb){
       models.Customer.destroy({where : {id : customerId}})
      .then(function (result){
        cb(result);
      });
     },
     getAll : function (cb) {
    models.Customer.findAll({where : {status :1}})
      .then (function (result){
        cb(result);
      });
     },  

   };
