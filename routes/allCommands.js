var express = require('express');
var router = express.Router();

/* GET All-commands page. */
router.get('/', function(req, res, next) {
  res.render('allCommands');
});

module.exports = router;
