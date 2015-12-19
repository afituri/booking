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


router.get('/addCustomer', function  (req, res, next){
  var obj1 = {
    name : "mohamed",
    email : "moh@yahoo.ly",
    phone : "09119993831",
    idNumber : "62230"
  };
  var obj2 = {
    name : "Ali",
    email : "Ali@gmail.ly",
    phone : "09172873469",
    idNumber : "634534"
  };
  customer.addCustomer(obj1 , obj2 , function(result){
        res.send(result);
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