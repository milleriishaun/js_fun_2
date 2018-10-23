// my initial solution
// time: 20 mins.
function add(x) {
  // Add your code below this line
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
  // Add your code above this line
}
let tempX = add(10);
console.log(tempX);
let tempXY = tempX(20);
console.log(tempXY);
let tempXYZ = tempXY(30);
console.log(tempXYZ);

// Here's the provided example of the partial function for reference
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
console.log(partialFn(10)); // Returns 13

// test using partial function
function add2(x, y, z) {
  // Add your code below this line
  return x + y + z;
  // Add your code above this line
}
console.log('testing');
let tempX2 = add2.bind(this, 10);
console.log(tempX2);
let tempXY2 = tempX2.bind(this, 20);
console.log(tempXY2);
let tempXYZ2 = tempXY2(30);
console.log(tempXYZ2);
// learned that you must use 'this' for all except last call
// for the partial application of the function.

console.log(add(10)(20)(30));

// FCC solution
// same as mine
