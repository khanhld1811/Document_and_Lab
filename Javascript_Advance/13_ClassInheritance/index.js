// // inheritance
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(`${this.name}Eating...`);
//     }
// }

// //BIRD
// class Bird extends Animal {
//     fly() {
//         console.log('Flying...');
//     }
// }

// //SPARROWcl;s
// class Sparrow extends Bird{
//     speak() {
//         console.log('CHIP CHIP CHIP....');
//     }
// }

// const sparrow = new Sparrow('Gru');
// sparrow.eat();
// sparrow.fly();
// sparrow.speak();



function Animal(name) {
    this.name = name;
   
}

Animal.prototype.eat = function() {
    console.log('Eating');
}

function Bird() {
    Animal.apply(this,arguments);
}

Bird.prototype = new Animal();
const bird = new Bird('CHICKEN','PRO',"NIKEN");
bird.eat();
console.log(bird.name);