var mouse = {
    weight:0.2,
    getWeight:function(){
      return this.weight;
    }
  };
  
  // constructor function
  function Mouse(color, weight){
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
  }
  
  // var mickey = new Mouse('white',20);
  // console.log(mickey.color);
  // console.log(mickey.name);
  
  console.log(Mouse.prototype);
  console.log(Mouse.prototype.constructor === Mouse);
  
  console.log("=============");
  // Shared among all the object
  Mouse.prototype.sleep = function(){
    console.log("Going...");
  };
    
  var jerry = new Mouse('black',23);
  console.log(jerry);
  jerry.sleep();
  
  var mickey = new Mouse('white',10);
  mickey.sleep();
  
  console.log(jerry.sleep === mickey.sleep);
  