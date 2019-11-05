// Liên kết Buffer
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = new Buffer.concat([buffer1,buffer2]);

console.log("buffer3 content: " + buffer3.toString());