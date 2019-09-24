var numbers = [2,0,7,4,9];

var ascendingNumber = numbers.sort(function(a,b){
    return a - b;
});

console.log(ascendingNumber);

var descendingNumber = numbers.sort(function(a,b){
  return b - a;
})

console.log(descendingNumber);


var employess = [
  {name:'Teo',age:18},
  {name:'Khanh',age:19},
  {name:'Ozawa',age:12}
];


console.log(employess);

var sortedEmployees = employess.sort(function(a, b){
  // a = empoloyees[1], b = employess[2]
  //expect: a comes after b
  // return a.age - b.age;
   return b.age - a.age;
});

console.log(sortedEmployees);

//1. Define an array of products(name, price, stack)
//2. Sort by price from more exprensive to less exprensive
//3. Sort by in stock value from more expensive to less expensive
