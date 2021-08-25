var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.render('users/signup');
});

router.get('/accoutsetting', function(req, res, next) {
  res.send('users/accoutsetting');
});

router.get('/editpw', function(req, res, next) {
  res.render('users/editpw');
});

router.get('/resetpw', function(req, res, next) {
  res.render('users/resetpw');
});

router.get('/updatepw', function(req, res, next) {
  res.render('users/updatepw');
});


module.exports = router;
