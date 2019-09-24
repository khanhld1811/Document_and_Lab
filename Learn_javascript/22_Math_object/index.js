function discArea(r){
    return r * r * Math.PI;
  }
  
  var s = discArea(5);
  console.log(s);
  
  console.log(Math.ceil(9.2));
  console.log(Math.floor(9.6));
  console.log(Math.max(10, 20, -1));
  console.log(Math.min(10,20,-5));
  
  
  console.log(Math.random()); // 0 -> 1
  function tossAcoint(){
    var random = Math.random();
    return random > 0.5;
  }
  
  console.log("Sap mat: ", tossAcoint());
  
  function rollAdie(){
    // 1 , 2 , 3 , 4 , 5 , 6 
  }