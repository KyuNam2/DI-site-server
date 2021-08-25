var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/docs_1', function(req, res, next) {
  res.render('docs_1');
});

module.exports = router;