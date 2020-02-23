//apply
//call: func.call(this, param1, param2, ...);
//apply: func.apply(this, [param1, param2, ...]);

function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + num,0);
}

function average() {
    const tb = sum.apply(null, arguments);
    return tb/arguments.length;
}

console.log(average(1, 2, 3, 5));