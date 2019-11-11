var express = require('express');
var app = express();
var port = 5000;


app.get('/',function(request, response){
    response.send("<h1>Hello World</h1>");
});

app.get('/users', function(req,res){
    res.send("User list");
});

app.listen(port, function(){
    console.log('Server listening on port ' + port);
});