// for loop

for( var i = 0; i < 10;i++){
    console.log(i);
}

/**
 * 1. i = 0
 * 2. i < 10 -> true
 * 3. display 0
 * 4. i++ -> i = 1
 * 5. 1 < 10 -> true
 * 6. display 1
 * ....
 * n. display 9
 * n+1. i++ -> i = 10
 * n+2. 10 < 10 -> false
 * -> Thoát vòng lặp 
 */

 var employee = [
    {name:'John', age:20},
    {name:'Tomat', age:25},
    {name:'Jerry', age:22}
 ];

//  console.log(employee[0].name, employee[0].age);
//  console.log(employee[1].name, employee[1].age);
//  console.log(employee[2].name, employee[2].age);

 for(var i = 0; i < employee.length; i++){
    console.log(employee[i].name, employee[i].age);
 }

 for(var i = 0; i < 5; i++){
   for(var j = 0; i < 3;j++){
     console.log(a[i] * b[j]);
   }
 }

 //1. i = 0
 //2. 0 < 3 -> true
 //3. display-> 'John' 20
 //4. i++ -> i = 1
 //5. 1 < 3 -> true
 //6. display -> 'Tomat' 25
 //7. i++ -> i = 2
 //8. 2 < 3 -> true
 //9. display -> 'Jerry' 22
 //10. i++ -> i = 3
 //11. 3 < 3 -> false
 //12. Thoát khỏi vòng lặp.