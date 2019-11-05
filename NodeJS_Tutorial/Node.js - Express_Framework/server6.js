var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser);

app.get('/',function(req, res){
    console.log("Cookies: ", req.cookies);
    console.log("error: " )
})

app.listen(8081);