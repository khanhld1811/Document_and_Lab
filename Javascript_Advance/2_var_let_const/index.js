// var let const
// 1. declaration (khai bao bien)
// 2. hoisting
// 3. block scope (if, for, )
// 4. redeclaration (khai bao lai)

/**
 * 1
 */
   	// var a = 1;
	// let b = 2;
	// const c = 3;
	// console.log(a, b ,c);
 	
	// var b = 5;
	// console.log(b);

// var a;
// let b;

// const c;

// function run() {
// 	console.log(a);
// 	const a = 1;
// }

// run();


// function run(){
// 	var x = 1;
// }

// run();

// if(true){
// 	const x = 10;
// }
// console.log(x);

// {
// 	const x = 10;
// 	console.log(x);
// }


for(var i = 0; i < 5; i++){
	console.log(i);
}

for(var i = 0; i < 10; i+=2){
	console.log(i)
}