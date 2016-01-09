var express = require('express');
var router = express.Router();
var customer = require('../controller/customer').customer;

/* GET home page. */
router.get('/', function(req, res, next) {
  customer.getAll(function (result){
    res.render('customer',{title:'الزبائن',customers:result,customer:"active"});
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

router.post('/editCustomer', function  (req, res, next){
  var customerId = req.body.id;
  delete req.body.id;
  customer.editCustomer(customerId, req.body, function(result){
    res.redirect("/customer?msg=1");
  });
});

router.get('/deleteCustomer', function  (req, res, next){
  var CustomerId = 2;
 
  customer.deleteCustomer(CustomerId , function(result){
    res.send(result);
  });
});

module.exports = router;