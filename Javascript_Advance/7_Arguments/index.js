//Array-like object & arguments

// const names = ['Khanh','Hoang','Tam'];
// for(let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

/**
 * Array-like object
 */
// const obj = {
//     0 : 'Khanh',
//     1 : 'Hoang',
//     2 : 'Tam',
//     length:3
// };

// for(let i = 0; i < obj.length; i++) {
//     console.log(obj[i]);
// }

// function sum() {
//     let result = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//     return result;
// }

function sum() {
    const numbers = Array.from(arguments);// chuyển array-like object về array
    return numbers.reduce(function(sum, num){
        return sum + sum;
    }, 0);
}

console.log(sum(4,6,8,10,12));