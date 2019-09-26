var Mouse = require('./mouse');
var Cat = require('./cat');

var mickey = new Mouse('black');
var jerry = new Mouse('orange');

console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(jerry);
tom.eat(mickey);
console.log(tom);