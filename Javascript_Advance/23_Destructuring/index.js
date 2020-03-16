// destructuring
const arr = [10, 20, 30, 40, 50];
const [a, , , d] = arr;
console.log(d) ;

const obj = {
    a: 1,
    b: 2,
    c: 3
};

const {a: x, b: y, c: z} = obj;
console.log(x, y, z);
