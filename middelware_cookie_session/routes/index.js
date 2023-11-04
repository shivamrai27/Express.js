var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.cookie("age", 25);
  res.render("index");
});
router.get('/set', function (req, res) {
  res.cookie("age", "Shivam");
  res.render("set");
})
router.get('/check', function (req, res) {
  const cookie = req.cookies;
  res.render("check")
  console.log(cookie);
})
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

//Cookie 


module.exports = router;
