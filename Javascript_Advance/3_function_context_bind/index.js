// global context
// function context
// bind

// var  mouse = {
//     name: 'Mickey',
//     sayHi: function() {
//         console.log('Hi, my name is', this.name);
//     }
// };

// var cat = {
//     name: 'Khanh'
// };

// // mouse.sayHi();
// var say = mouse.sayHi.bind(cat);
// say();

function run(cb) {
    console.log('run...');
    cb();
}

var mouse = {
     name: 'Khanh',
     sayHi: function() {
         console.log(this.name);
     }
};

run(mouse.sayHi.bind(mouse));


