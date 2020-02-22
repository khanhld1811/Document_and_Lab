// Date
// moment.js
  var moment = require('moment');
//var now = new Date();
//var myBirthday = new Date(1999, 11, 18) // 18/11/1999

// number of milliseconds from 1-1-1970
//console.log(now.getTime());
//console.log(myBirthday.getTime());

var now = moment('2020-02-22 08:00');
console.log(now.fromNow());
