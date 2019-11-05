//Create a folder
var fs = require("fs");

console.log("Going to create directoty / tmp/test");
fs.mkdir('/tmp/test',function(err){
    if(err){
        return console.error(error);
    }

    console.log("Directory created successfully!");
})