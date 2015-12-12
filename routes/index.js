var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var users = [
    { name : "احمد", age : 29 },
    { name : "محمد", age : 39 },
    { name : "علي", age : 22 },
    { name : "عمر", age : 25 },
  ];
  res.render('index', { title: 'Naga', users: users });
});

module.exports = router;
