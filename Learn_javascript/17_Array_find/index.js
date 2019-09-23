//array.find

var numbers = [1,2,3,4];
numbers.find(function(number){
    return number % 2 === 0;
});

// 1 % 2 = 1 === 0 -> false
// 2 % 2 = 0 === 0 -> true