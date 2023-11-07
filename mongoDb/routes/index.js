var express = require('express');
var router = express.Router();
const userModel = require("./user")
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async function (req, res, next) {
  const createdUser = await userModel.create({
    username: "Shivam",
    name: "Shivam Rai",
    age: 23,
  })
  res.send(createdUser);
});
module.exports = router;
