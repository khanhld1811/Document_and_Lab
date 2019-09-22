// Object methods
// Các phương thức của object

var myDog = {
    weight: 5,
    //name: 'smart',
    age:10,
    bark: function () {// anonymous function
        // this : đại diện cho method myDog
        console.log("Meo meo, my name is",this.name);// undefined
    },
    eat: function(bone){
        this.weight = this.weight + bone.weight;
        return this;
    }
};

var bone = {weight: 0.5};
console.log('Before eating: ', myDog.weight);

myDog.eat(bone);
console.log('After eating: ', myDog.weight);
//myDog.bark();

// function bark(){
//     console.log('Meo meo, my name is',this.name);
// }
// bark();


var myCat = {
    weight: 10,
    name: 'Sen',
    eat : function(fish){
        this.weight += fish.weight;
    },
};

var fish = {weight:2};
console.log('Before eating', myCat.weight);

myCat.eat(fish);
console.log('After eating',myCat.weight);


