var models = require("../models");
exports.customer = {
 /* add new custumer*/
  addCustomer : function(body,cb){
    models.Customer.create(body).then(function(result) {
      cb(result);
    });
  },
  /*Edit Customer*/
  editCustomer : function(customerId,obj,cb){
    models.Customer.update(obj, {where : {id : customerId}})
      .then(function (err, result){
        if(!err){
          cb(result);
        } else {
          cb(false);
        }
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
