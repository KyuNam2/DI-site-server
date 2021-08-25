var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/features', function(req, res, next) {
  res.render('features', { title: 'features' });
});

router.get('/community', function(req, res, next) {
  res.render('community', { title: 'community' });
});

router.get('/community-2', function(req, res, next) {
  res.render('community-2', { title: 'community-2' });
});

router.get('/community_form', function(req, res, next) {
  res.render('community_form', { title: 'community_form' });
});

router.get('/docs-1', function(req, res, next) {
  res.render('docs-1', { title: 'docs-1' });
});

router.get('/docs-2', function(req, res, next) {
  res.render('docs-2', { title: 'docs-2' });
});

router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'signin' });
});

router.get('/contact_us', function(req, res, next) {
  res.render('contact_us', { title: 'contact_us' });
});



module.exports = router;
