/*
// my initial solution 1
// time: 30 mins
// debug time: 30 mins // this took too long
function dropElements(arr, func) {
  let newArr = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(i);
    }
  }
  index = newArr[0];
  return index !== undefined ? arr.slice(index) : newArr;
}
*/

// my initial solution 2 ... after the 3 hints
// time: 30 mins
// debug time: 30 mins // this took too long
function dropElements(arr, func) {
  let index = arr.filter(item => func(item))[0]; // it's not zero
  return index !== undefined ? arr.slice(index) : [];
}

console.log(
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  })
); // [3, 4]
console.log(
  dropElements([0, 1, 0, 1], function(n) {
    return n === 1;
  })
); // [1, 0, 1]
console.log(
  dropElements([1, 2, 3], function(n) {
    return n > 0;
  })
); // [1, 2, 3]
console.log(
  dropElements([1, 2, 3, 4], function(n) {
    return n > 5;
  })
); // []
console.log(
  dropElements([1, 2, 3, 7, 4], function(n) {
    return n > 3;
  })
); // [7, 4]
console.log(
  dropElements([1, 2, 3, 9, 2], function(n) {
    return n > 2;
  })
); // [3, 9, 2]
