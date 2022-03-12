var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.render('user', { text: 'Test route' });
});

module.exports = router;
