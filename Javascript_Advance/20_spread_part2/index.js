// spread an array

const a = [1, 2, 3];
const b = [0, ...a ,4];
console.log(b);


//spread and object
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: { e:10 }
};

const obj2 = {
    ...obj1,
    z:1000
};
// for (let key in obj1) {
//     obj2[key] = obj1[key];
// }


obj2.d.e = 11;
// deep clone
const obj3 = JSON.parse(JSON.stringify(obj1));
obj1.d.e = 20;
console.log({obj1, obj2, obj3});