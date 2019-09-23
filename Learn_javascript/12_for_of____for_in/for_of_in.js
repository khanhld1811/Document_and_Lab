var employees = [
    {name:'John', age:20},
    {name:'Tomat', age:25},
    {name:'Jerry', age:22}
 ];

 for(var employee of employees){
     console.log(employee.name, employee.age);
 }


 var myCat = {
     name:'sen',
     age:2,
     weight:6
 };
// myCat.name // myCat['name] = 'sen'
 for(var key in myCat){
     console.log(key, myCat[key]);
 }
 
 var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100,
        gender: {
          one: 'name',
          two: 'nu'
        }
      }
    }
  };                                               
  
  /**
   * for/in
   * -> bedroom:
   * ->-> for/in
   * ->->-> area, bed
   * ->->->-> type,price 
   */
  
  /**
   * interate(apartment)
   * for/in prop in partment -> bed
   * return interate(prop) 
   * for/in prop in 
   */
  
  // function iterate(apartment){
  //   for(var item in apartment){
  //     if(typeof apartment[item] == 'object'){
  //       console.log(item);
  //       iterate(apartment[item]);
  //     }else console.log(item)
  //   }
   
  // }