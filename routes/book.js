var express = require('express');
var router = express.Router();
var book = require('../controller/book').book;
var helpers = require('../controller/helpers');

/* GET home page. */
router.get('/', function(req, res, next) {
  book.getAll(function (books){
    res.render('book', {title : "books", books: books.rows, book : "active"});
  });
});

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render("newBook");
});


router.post('/addBook', function  (req, res, next){
  console.log(req.body);
  book.addBook(req.body , function(bookId){
    helpers.addBookCA(bookId,req.body.authors, req.body.categories, function(result){
      if(result) {
        res.redirect('/book');
      }
    });
  });
});

/* GET book Details. */
router.get('/getDetails/:id', function(req, res, next) {
  book.getDetails(req.params.id, function(results){
    res.send(results);
  });
});

router.get('/editBook', function  (req, res, next){
  var id = 2;
  var obj = {
    name : "Gone with the wind"
  };
  book.editBook(id, obj , function(result){
    //console.log(result);
    res.send(result);
  });
});

router.get('/deleteBook', function  (req, res, next){
  var id = 2;
 
  book.deleteBook(id , function(result){
    res.send(result);
  });
});

module.exports = router;
