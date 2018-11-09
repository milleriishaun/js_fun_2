/*
// my initial solution
// time: 20 mins
// debug time: 15 mins
function smallestCommons(arr) {
  if (arr[0] > arr[1]) {
    arr = arr.reverse();
  }
  let arrNew = Array.from({ length: arr[1] + 1 }, (v, k) => k).slice(arr[0]);
  // Need to practice this crazy useful non-forloop one-liner.
  let maxLCM = arrNew.reduce((a, b) => a * b);
  let count = 0;
  for (let j = 1; j <= maxLCM; j++) {
    //fail: j can't be 0, b/c it would ===0.
    for (let i = 0; i < arrNew.length; i++) {
      if (j % arrNew[i] === 0) {
        count++;
      }
      if (count === arrNew.length) {
        return j;
      }
    }
    count = 0;
  }
} //note: this fails the last 2 of the FCC tests, but is correct
*/

/*
// Basic Solution
function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });
  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }
  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;
  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== newArr.length);
  return quot;
} //note: I don't like this solution, but it is a good mental exercise.
// Code Explanation(snippets):
// In the do part, we are going to multiply the very first number, times
// the number of loops, times the second
// number (quot = newArr[0] * loop * newArr[1];).
// The loop part will allows us to increase the number we’re checking
// beyond the greatest number we have without having to change the algorithm.
*/

/*
// Intermediate Solution
function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }
  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;
  function gcd(x, y) {
    // Implements the Euclidean Algorithm
    if (y === 0) return x;
    else return gcd(y, x % y);
  }
} //note: this solution uses the Euclidean Algorithm... speechless.
//note: Maybe one day I will use this, otherwise... this is out of scope.
*/

/*
// Advanced Solution
function smallestCommons(arr) {
  // range
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let smallestCommon = lcm(min, min + 1);
  while (min < max) {
    min++;
    smallestCommon = lcm(smallestCommon, min);
  }
  return smallestCommon;
}
*/
/**
 * Calculates Greatest Common Divisor
 * of two nubers using Euclidean algorithm
 * https://en.wikipedia.org/wiki/Euclidean_algorithm
 */
/*
function gcd(a, b) {
  while (b > 0) {
    let tmp = a;
    a = b;
    b = tmp % b;
  }
  return a;
}
*/
/**
 * Calculates Least Common Multiple
 * for two numbers utilising GCD
 */
/*
function lcm(a, b) {
  return (a * b) / gcd(a, b);
} ////note: this uses the overall formula for LCM... my initial sol oes not.
//note: out of the 3 solutions, this is most tangible, and Basic is obvious.
*/

// Practice Session 2, 11//2018,  pm

// time:  pm
// debug time:  pm
function smallestCommons(arr) {
  return;
}

console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1])); // 60
console.log(smallestCommons([2, 10])); // 2520
console.log(smallestCommons([1, 13])); // 360360
console.log(smallestCommons([23, 18])); // 6056820
