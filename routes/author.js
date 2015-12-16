var express = require('express');
var router = express.Router();
var author = require('../controller/author').author;

/* GET home page. */
router.get('/', function(req, res, next) {
  author.getAll(function (result){
    res.send(result);
  });
});

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render("newAuthor");
});


router.get('/addAuthor', function  (req, res, next){
  var obj = {
    name : "عبد القاسم الشابي",
    country : "بريطانيا",
    birtday : "2015-12-01",
    bio : " sdfsdf sf sdf sdf sdf sd fs df sd fsd fsdfjlsdjflsd f"
  };
  author.addAuthor(obj , function(result){
    //console.log(result);
    res.send(result);
  });
});

router.get('/editAuthor', function  (req, res, next){
  var authorId = 8;
  var obj = {
    country : "المانيا",
  };
  author.editAuthor(authorId, obj , function(result){
    //console.log(result);
    res.send(result);
  });
});

router.get('/deleteAuthor', function  (req, res, next){
  var authorId = 7;
 
  author.deleteAuthor(authorId , function(result){
    res.send(result);
  });
});

module.exports = router;