// Great Code Snippets using .reduce()
// Frameworks like Redux have been born from master users of .reduce() and you can join the ranks by practicing the usage of these great snippets!
// Remember that .reduce() can create .map() and .filter(), so it also can be used for any kind of repeated string transformation or array manipulation that would otherwise require a loop.

// Count the number of elements in two different arrays
function countDiff(arr1, arr2) {
  let arr = arr1.concat(arr2);
  return arr.reduce(function(prev, next) {
    prev[next] = prev[next] + 1 || 1;
    return prev;
  }, {});
}
console.log(countDiff([1, 3, 5, 6, 7, 7, 8, 9], [1, 3, 5, 6, 7, 7, 6, 9]));

/*
// Get rid of Duplicates in an array
arr.reduce((prev, num) => {
  if(prev.indexOf(num) === -1) {
    prev.push(num);
  }
  return prev
},[]);


// Sum up all values within an array
let total = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});

or

// Sum up all values within an Argument
let arr = Array.from(arguments).reduce(function(a, b) {
  return a + b;
});

or

// Sum up all values with arrow functions
let sum = arr.reduce((a, b) => a + b);

// total == 6


// Flatten an array of arrays
let flattened = [[0, 1], [2, 3], [4,5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);

// flattened is [4, 5, 2, 3, 0, 1]
*/
