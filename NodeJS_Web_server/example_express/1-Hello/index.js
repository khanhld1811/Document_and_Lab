var express = require('express');
var app = express();
var port = 3000;

/**
 * request là những thứ mà người dùng gửi lên
 * response là những thứ mà người dùng nhận về
 */
app.get('/', function(request, response){
    response.send("<h1>Hello world!</h1>");
    
});

app.get('/users', function(request, response){
    response.send("User list");
    
});

app.listen(port, function(){
    console.log('Server listening on port ' + port);
});
