## install express-generator  
npm i express-generator -g

// Create express app using generator and setting ejs as Template
npx express express_generator --view=ejs

//Change in routes/index
Remove get method code which use app.get
instead use router.get

To run the code you dont need to provide .listen or port_number and file name
directly run the npx nodemon

## How to use ejs 
```router.get('/', (req, res) => {
    //Give the file name in render method 
    //which is contained by views folder but without .ejs extension
  res.render('index')
})

```
## How to use dynamic variable and render in .ejs  

``` Step 1
var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {
  res.render('index', { name: "shivam" }) // u can give variable to dynamically render it
})
module.exports = router;
```
```
Step 2 -> views/index.js

<!DOCTYPE html>
<html lang="en">
<head><link rel="stylesheet" href="/stylesheets/style.css"></head>
<body>
   <%=name%>  
</body>
</html> 