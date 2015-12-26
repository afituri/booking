var express = require('express');
var router = express.Router();
var category = require('../controller/category').category;

/* GET home page. */
router.get('/', function(req, res, next) {
  category.getAll(function (result){
    res.render('category',{title : 'التصنيفات', categories: result, category:'active'});
  });
});

/* Get all categories*/
router.get('/getAll', function(req, res, next) {
   category.getAll(function (result){
    res.send(result);
  });
})

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render("newcategory");
});


router.post('/addCategory', function  (req, res, next){
  category.addcategory(req.body , function(result){
    console.log(result);
    res.redirect('/category');
  });
});

router.get('/edit', function  (req, res, next){
  var categoryId = 1;
  var obj = {
    name : "jelb222o",
  };
  category.editcategory(categoryId, obj , function(result){
    //console.log(result);
    res.send(result);
  });
});

router.get('/deletecategory', function  (req, res, next){
  var categoryId = 1;
 
  category.deletecategory(categoryId , function(result){
    res.send(result);
  });
});

module.exports = router;
