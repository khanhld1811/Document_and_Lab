// Truyền data 1 luồng sang luồng khác
var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read ad write operations
// read input.txt and write data to output.txt

readerStream.pipe(writerStream);

console.log("Program Ended");