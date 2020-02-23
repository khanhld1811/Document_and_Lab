//method overriding

class CoofeeMachine {
    makeCoffe() {
        console.log('making coffe...')
    }
}

class SpecialCoffeeMachine extends CoofeeMachine {
    makeCoffe(cb) {
        console.log('making coffee and do something...');
        cb();
    }
}

const coofeeMachine = new SpecialCoffeeMachine();
coofeeMachine.makeCoffe(function() {
    console.log('Call the boss');
});