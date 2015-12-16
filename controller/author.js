var models = require("../models");
exports.author = {
   /* add new author*/
  addAuthor : function(body,cb){
    models.Author.create(body).then(function(result) {
      cb(result);
    });
  },

  editAuthor : function (authorId, obj , cb) {
    models.Author.update(obj, {where : {id : authorId}})
      .then(function (result){
        cb(result);
      });
  },
  deleteAuthor : function (authorId, cb) {
    models.Author.destroy({where : {id : authorId}})
      .then(function (result){
        cb(result);
      });
  },

  getAll : function (cb) {
    models.Author.findAndCountAll({where : {status :1}})
      .then (function (result){
        cb(result);
      });
  }

  /* get  all authors */
  // get_authors : function(cb){
  //   models.author.findAndCountAll({
  //     where: {
  //       status: 1
  //     }
  //   }).then(function(result) {
  //     cb(result);
  //   });
  // },
  /* update author*/
  // edit_author : function(body,cb){
  //   models.author.update({
  //     author_name: body.author_name
  //   },{
  //     where:{
  //       id:body.id
  //     }
  //   }).then(function(result){
  //     cb('/author?msg=4');
  //   });
  // },
  // delete author  
  // delete_author : function(body,cb){
  //   models.author.destroy({
  //     where:{
  //       id:body.id
  //     }
  //   }).then(function(result){
  //     cb('/author?msg=1');
  //   }).catch(function(err){
  //     cb('/author?msg=2');
  //   });
  // },




};
