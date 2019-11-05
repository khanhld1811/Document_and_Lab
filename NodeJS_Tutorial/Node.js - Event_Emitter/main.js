//Import events module
var events = require('events');

// create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listener1(){
    console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2(){
    console.log('listner2 executed.');
}

//Bind the connection event with the listner1 function 
eventEmitter.addListener('connection',listner1);


//Bind the connection event withe the listner2 function
eventEmitter.on('connection',listner2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

//Fire the conenction event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");