//array.reduce

var numbers = [1,2,3,4];
numbers.reduce(function(a, b){
    console.log(a, b);
    return a + b;
});

// giỏ hàng
var oders = [
    {name:'A',quantity:2,unitPrice:100},
    {name:'B',quantity:1,unitPrice:300},
    {name:'C',quantity:5,unitPrice:15},
]