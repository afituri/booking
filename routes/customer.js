var express = require('express');
var router = express.Router();
var customer = require('../controller/customer').customer;

/* GET home page. */
router.get('/', function(req, res, next) {
  customer.getAll(function (result){
    res.render('customer',{title:'الزبائن',customers:result});
  });
});

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render("newCustomer");
});


router.post('/addCustomer', function  (req, res, next){
  customer.addCustomer(req.body , function(result){
    console.log(result);
    res.redirect('/customer');
  });
});

router.get('/editCustomer', function  (req, res, next){
  var CustomerId = 3;
  var obj = {
    phone : "092999999",
    };
  customer.editCustomer(CustomerId, obj , function(result){
    //console.log(result);
    res.send(result);
  });
});

router.get('/deleteCustomer', function  (req, res, next){
  var CustomerId = 2;
 
  customer.deleteCustomer(CustomerId , function(result){
    res.send(result);
  });
});

module.exports = router;