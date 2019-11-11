// Non-Blocking Code
var fs = require("fs");
fs.readFile('input.txt', function(err, data){
    if(err)
 return console.log(err);
console.log(data.toString());
});

setTimeout(function(){
    console.log("Program Ended");    
},3000);