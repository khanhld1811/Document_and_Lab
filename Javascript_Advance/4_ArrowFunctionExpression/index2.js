// var a = {
//     name: 'aaa',
//     run: function () {
//         var run2 = () => { // arrow function no have context
//             console.log(this.name);
//         };
//         run2();
//     }
// };

// console.log(a.run());

var a = {
    foo:'bar',
    run: function(){
        setTimeout(() => { 
            console.log(this.foo);
        },2000);
    }
}

console.log(a.run());