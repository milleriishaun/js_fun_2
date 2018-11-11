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

/*
// my initial solution 2 ... after the 3 hints
// time: 20 mins
// debug time: 10 mins // this took too long to think of
function dropElements(arr, func) {
  let index = arr.indexOf(arr.filter(item => func(item))[0]);
  return index !== -1 ? arr.slice(index) : [];
} // this is goodish code
*/

/*
// Basic Solution
function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
} //note: mad at how simple this looks, need practice
//note: I did have this at least in mind... but the 'break' missed me.
*/

/*
// Intermediate Solution
function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
} //note: I got owned by this solution. i want to practice this one-liner.
//note: I did not know .findIndex(condition) was an option. looks great!
*/

/*
// Advanced Solution
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
} //note: so simple I want to die.
*/

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
