// Reading from a Stream
var fs = require("fs");//file system
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// SET the encoding to be utf8.
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data',function(chuck){
    data += chuck;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});



console.log("Program Ended");