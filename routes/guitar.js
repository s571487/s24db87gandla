var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('guitar', { title: 'Search Results Guitar' });
});

module.exports = router;
