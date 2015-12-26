var express = require('express');
var router = express.Router();
var author = require('../controller/author').author;

/* GET home page. */
router.get('/', function(req, res, next) {
  author.getAll(function (result){
    res.render('author',{title : 'المحريين', author : 'active', authors: result.rows});
  });
});

/* Get all authors*/
router.get('/getAll', function(req, res, next) {
  author.getAll(function (result){
    res.send(result.rows);
  });
})

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render("newAuthor");
});


router.post('/addAuthor', function  (req, res, next){
  author.addAuthor(req.body , function(result){
    res.redirect('/author');
  });
});

router.get('/editAuthor', function  (req, res, next){
  var authorId = 1;
  var obj = {
    name : "Abulgasem Said"
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
