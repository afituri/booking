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

router.post('/editAuthor', function  (req, res, next){
  var authorId = req.body.id;
  delete req.body.id;
  author.editAuthor(authorId, req.body, function(result){
    res.redirect("/author?msg=1");
  });
});

router.post('/deleteAuthor', function  (req, res, next){
  var authorId = req.body.id;
  author.deleteAuthor(authorId , function(result){
    res.redirect("/author?msg=3");
  });
});

module.exports = router;
