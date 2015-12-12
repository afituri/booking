var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/addUser', function(req, res, next) {
  res.send('user added successfully');
});

/* GET users listing. */
router.get('/editUser/:id', function(req, res, next) {
  res.send('user with id :'+req.params.id+' has been edit successfully');
});
module.exports = router;
