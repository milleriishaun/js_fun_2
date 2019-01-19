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
console.log(Boolean(/foo/));
console.log('regex: ', typeof /j/);
console.log('NaN: ', typeof NaN);
console.log('undefined: ', typeof undefined);
console.log('null: ', typeof null);
console.log('Symbol: ', typeof Symbol);
console.log(!!function() {});
console.log(function() {});
console.log(typeof []);
console.log(!![].constructor);
console.log(Array.isArray([]));
