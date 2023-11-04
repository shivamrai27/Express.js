var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("On Home");
});

//Middleware created
/*
var a = 10;
router.use(function (req, res, next) {
  a = a + 1;
  next();
})

router.get('/middleware', function (req, res, next) {
  res.send(`On profile ${a}`);
});
*/

module.exports = router;
