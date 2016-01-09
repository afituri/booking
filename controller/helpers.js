var easyPbkdf2 = require("easy-pbkdf2")(),
    models = require("../models");

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
  },
  addUser : function (body, cb) {
    var salt = easyPbkdf2.generateSalt(), //we generate a new salt for every new user
        password = body.password; //we generate a new password for every new user
    easyPbkdf2.secureHash( password, salt, function( err, passwordHash, originalSalt ) {
      var obj={
            name : body.name,
            email : body.email,
            password : passwordHash,
            salt : originalSalt,
          }
      models.User.create(obj).then(function() {
        cb(true);
      });
    });
  },
  isLogin : function (req,res,next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  },
}