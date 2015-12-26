var models = require("../models");

module.exports =  {
  addBookCA : function (bookId,authors, categories, cb){
    var bookAuthorLst = [] , bookCategoryLst = [], obj = {};
    if(typeof authors === 'object') {
      for (index in authors) {
        obj = {BookId : bookId, AuthorId : authors[index]};
        bookAuthorLst.push(obj);
      }
    } else {
      obj = {BookId : bookId, AuthorId : authors};
      bookAuthorLst.push(obj);
    }
    ////////////////////////////////////////////////////////
    if(typeof categories === 'object') {
      for (index in categories) {
        obj = {BookId : bookId, CategoryId : categories[index]};
        bookCategoryLst.push(obj);
      }
    } else {
      obj = {BookId : bookId, CategoryId : categories};
      bookCategoryLst.push(obj);
    }

    models.BookAuthor.bulkCreate(bookAuthorLst).then(function(results) {
      models.BookCategory.bulkCreate(bookCategoryLst).then(function(results) {
        cb(true);
      });
    });
  }
}