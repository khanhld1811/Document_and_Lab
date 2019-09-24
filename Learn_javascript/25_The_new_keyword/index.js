// 'new'  keyword

// var today = new Date();
// console.log(today)

var mouse = {
    weight:0.2,
    getWeight: function(){
      return this.weight;
    }
  };
  
  //constructor function
  
  // console.log(mouse.getWeight());
  
  function Mouse(color){
    this.type = 'mouse';
    this.color = color;
    this.weight = 0.3;
  }
  
  var mouse1 = new Mouse('white');
  console.log(mouse1);
  
  var mouse2 = new Mouse('black');
  console.log(mouse2);
  console.log();
  
  // var mouse2 = {type:'mouse'};
  // console.log(mouse2);
  
  //Bai tap
  
  var tom = {
    name: 'Tom',
    stomach:[],
    eat:function(mouse){
      this.stomach.push(mouse);
      return this;
    }
  }
  
  var m1 = {name: 'm1'};
  var m2 = {name: 'm2'};
  var m3 = {name: 'm3'};
  
  tom.eat(m1).eat(m2).eat(m3);//method chaining
  
  console.log(tom);