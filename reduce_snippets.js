// Great Code Snippets using .reduce()
// Frameworks like Redux have been born from master users of .reduce() and you can join the ranks by practicing the usage of these great snippets!
// Remember that .reduce() can create .map() and .filter(), so it also can be used for any kind of repeated string transformation or array manipulation that would otherwise require a loop.

/*
// Count how many of the same element appears, when the elements come from two different arrays
function countDiff(arr1, arr2) {
  let arr = arr1.concat(arr2);
  return arr.reduce(function(prev, next) {
    prev[next] = prev[next] + 1 || 1;
    return prev;
  }, {});
}
console.log(countDiff([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 1]));


let arr = [1, 3, 3, 4, 5, 6, 77, 6, 8, 77, 77];
console.log("Old: " + arr);
// Get rid of Duplicates in an array
let newArr = arr.reduce((prev, num) => {
  if (prev.indexOf(num) === -1) {
    prev.push(num);
  }
  return prev;
}, []);
console.log("New: " + newArr);


// Sum up all values within an array
let total = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
console.log(total);


// Sum up all values within an Argument
// Not too sure how to use this, although I think I know what it does
let arr = Array.from(arguments).reduce(function(a, b) {
  return a + b;
});
console.log(arr);


// Sum up all values with arrow functions
let arr = [1, 3, 3, 4, 5, 6, 77, 6, 8, 77, 77];
let sum = arr.reduce((a, b) => a + b);
console.log(sum);
*/

// Flatten an array of arrays
let flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
  return b.concat(a);
}, []);
console.log(flattened);
// flattened is [4, 5, 2, 3, 0, 1]... if a and b are switched
