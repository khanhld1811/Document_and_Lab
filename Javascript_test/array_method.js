// create an Array
var fruits = ["Apple", "Banana"];
console.log(fruits.length);

// ACcess (index into) an Array item

var first = fruits[0];
console.log(first);

console.log("1==========\n");

var last = fruits[fruits.length - 1];
console.log(last);

console.log("2==========\n");

//Loop over an Array
fruits.forEach(function(item, index, fruits){
  console.log(item,index);
})

console.log("3==========\n");

//Add the end of an Array
var newLength = fruits.push('Orange');
console.log(newLength);
console.log(fruits);

console.log("4==========\n");

//Remove from the end of an Array
var last = fruits.pop();
console.log(last);
console.log(fruits);

console.log("5==========\n");

//Add to the front of an Array
var newLength = fruits.shift();
console.log(newLength);
console.log(fruits);

//Add to the front of an Array
var newLength = fruits.unshift('Strawberry');
console.log(newLength);
console.log(fruits);

console.log("6==========\n");

//Find the index of an item in the Array
fruits.push('Mango');
console.log(fruits);

var pos = fruits.indexOf('Banana');
console.log(pos);
console.log(fruits);


console.log("7==========\n");

//Remove an item by index positon

var removeItem = fruits.splice(1,1);
console.log(removeItem);
console.log(fruits);

console.log("8==========\n");

//Remove items from an index position

var vegetables = ['Cabbage','Turnip','Radish','Carrot'];
console.log(vegetables);

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos,n);
console.log(vegetables);

console.log(removedItems);
console.log("8==========\n");

//Copy an Arrayvar 
var shallowCopy = fruits.slice();
console.log(shallowCopy);
console.log(fruits);