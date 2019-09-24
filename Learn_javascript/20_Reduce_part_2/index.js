// var numbers = [1,2,3,4];

// var sum  = numbers.reduce(function(a, b){
//   console.log(a, b);
//   return a + b;
// },0);

// console.log(sum);

var products = [
    {name: 'A', quantity:2, unitPrice:10},
    {name: 'B', quantity:3, unitPrice:20},
    {name: 'C', quantity:4, unitPrice:30},
  ];
  
  var total = products.reduce(function(currentTotal, product){
    return currentTotal + product.quantity * product.unitPrice;
  },0);
  
  console.log(total);
  
  
  var items = ['Tom','Bill','Kim'];
  //use reduce to make this result
  // '<Tom><Bill><Kim>'