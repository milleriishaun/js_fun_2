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
console.log(typeof bar);
console.log(typeof +'dude');
console.log(+'dude');
console.log(Math.max([1, 2, 3]));
console.log(Math.max(1, 2, 3));
console.log(Math.max.apply(null, [1, 2, 3]));
console.log(Math.max.call(null, 1, 2, 3));
console.log(Math.max.call(null, [1, 2, 3]));
console.log(Math.max.call(null, ...[1, 2, 3]));
console.log(1, 2, 3);
console.log([1, 2, 3]);
console.log(...[1, 2, 3]);
let x2 = Math.max.bind([1, 2, 3]);
console.log(x2);
console.log(x2());
console.log(x2([1, 2, 3]));
console.log(x2(1, 2, 3));
console.log(Math.max.bind([1, 2, 4]));
function fn() {
  console.log(arguments);
  args = Array.prototype.slice.call(arguments);
  console.log(args);
  console.log(arguments);
  return;
}
console.log(fn());
console.log(typeof fn());
console.log(fn(3, 3, 3, 3));
