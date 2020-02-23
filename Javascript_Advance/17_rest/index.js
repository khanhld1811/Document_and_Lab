//rest
// function log(...numbers) {
//     console.log(numbers);
// }    

// log(1, 2, 3, 4);


function sum(...nums) {
    return nums.reduce((a,b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));


function concat(separator, ...strings) {
    return strings.join(separator);
}

console.log(concat('.', 'a','b','c'));