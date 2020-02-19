//setTimeout
var done = function() {
    console.log('Finish');
}
console.log('Start');
var timeout = setTimeout(done,1000);
console.log('Done');
clearTimeout(timeout);