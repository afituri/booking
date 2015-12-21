var models = require("../models");
exports.category = {
   /* add new category*/
  addcategory : function(body,cb){
    models.Category.create(body).then(function(result) {
      cb(result);
    });
  },

  editcategory : function (categoryId, obj , cb) {
    models.Category.update(obj, {where : {id : categoryId}})
      .then(function (result){
        cb(result);
      });
  },
  deletecategory : function (categoryId, cb) {
    models.Category.destroy({where : {id : categoryId}})
      .then(function (result){
        cb(result);
      });
  },

  getAll : function (cb) {
    models.Category.findAll({where : {status :1}})
      .then (function (result){
        cb(result);
      });
  }

};
