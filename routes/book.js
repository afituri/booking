var express = require('express');
var router = express.Router();
var book = require('../controller/book').book;

/* GET home page. */
router.get('/', function(req, res, next) {
  book.getAll(function (result){
    res.send(result);
  });
});

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render("newBook");
});


router.get('/addBook', function  (req, res, next){
  var obj = {
    name : "الكتاب الاخضر",
    DailyRent : 10.5
  };
  book.addBook(obj , function(result){
    //console.log(result);
    res.send(result);
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
