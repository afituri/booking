var express = require('express');
var router = express.Router();
var helpers = require('../controller/helpers');
var login = require('../controller/login')(router);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/addUser', function(req, res, next) {
  var obj = {
    name : "Ahmed Fituri",
    email : "Ahmed.fituri@gmail.com",
    password : "123456"
  }
  helpers.addUser(obj, function(result){
    if(result){
      res.send('user added successfully');
    }
  })
});

/* GET users listing. */
router.get('/editUser/:id', function(req, res, next) {
  res.send('user with id :'+req.params.id+' has been edit successfully');
});
module.exports = router;
