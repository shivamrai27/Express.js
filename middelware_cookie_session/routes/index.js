var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render("index");
});

//Middleware created
// var a = 10;
// router.use(function (req, res, next) {
//   a = a + 1;
//   next();
// })

// router.get('/middleware', function (req, res, next) {
//   res.send(`On profile ${a}`);
// });
//=================================================================

// //Cookie created and checked
// set cookie
// router.get('/set', function (req, res) {
//   res.cookie("age", "Shivam");
//   res.render("set");
// })
// //requesting cookies
// router.get('/check', function (req, res) {
//   const cookie = req.cookies;
//   res.render("check")
//   console.log(cookie);
// })
//===================================================================

//Session created
router.get('/session', function (req, res, next) {
  req.session.ban = true; //Session created with name of ban
  res.send('session is created');
})
router.get('/check-session', function (req, res, next) {
  // console.log(req.session);
  if (req.session.ban === true) {
    res.send("You are banned");
  } else {
    res.send('You are not banned');
  }
})
module.exports = router;
