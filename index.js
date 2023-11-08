const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send("Hello");
}).listen(PORT, () => {
    console.log('Server is running');
})
