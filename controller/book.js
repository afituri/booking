var models = require("../models");
exports.book = {
   /* add new author*/
  addBook : function(body,cb){
     models.Book.create(body).then(function(result) {
       cb(result.id);
     });
  },

  editBook : function (bookId, obj , cb) {
    models.Book.update(obj, {where : {id : bookId}})
      .then(function (result){
        cb(result);
      });
  },
  deleteBook : function (bookId, cb) {
    models.Book.destroy({where : {id : bookId}})
      .then(function (result){
        cb(result);
      });
  },

  getAll : function (cb) {
    models.Book.findAndCountAll({where : {status :1}})
      .then (function (result){
        cb(result);
      });
  },

  getDetails : function(bookId, cb) {
    models.Book.findOne({
      where: {
        id: bookId
      },
      "include": [
        {
          "model": models.Author,
          "through": models.BookAuthor
        }
      ]
    }).then(function (result) {
      cb(result);
    });
  }
}