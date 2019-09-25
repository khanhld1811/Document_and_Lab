// array.map

var numbers = [1,2,3,4];
var squareNumbers = numbers.map(function(x){
    return x * x;
});

squareNumbers;

//bai tap

var rectangles = [
    {width:10, height: 5},
    {width:5, height: 25},
    {width:4, height: 9},
  ];
  
  var x = rectangles.map(function acreageRectangles(obj){
      return obj.width * obj.height;
  });
  
  console.log(x);
  

