// How to know if something is array.
console.log([].constructor === Array);

// testing type coercion
let x = 'hello' && '7'; // x === 7
console.log(x);
let y = '7' && 'hello' && NaN && true; // y === NaN
console.log(y);
let z = 5 / null;
console.log(z);
console.log(typeof z);
let x1 = true | 0;
console.log(x1);
console.log(typeof x1);
let y1 = false | null;
console.log(y1);
console.log(typeof y1);
