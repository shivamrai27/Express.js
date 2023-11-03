var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // res.send("Hello Generator")
  //To use ejs file just give the name without .ejs 
  res.render('index', { name: "Shivam" }) // u can give variable to dynamically render it
})

module.exports = router;