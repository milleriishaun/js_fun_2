// my initial solution
function uniteUnique(arr) {
  for (let i = 0; i < arguments.length; i++) {
    // can't finish this until I have memorized the clearer of arrays function
  }
  return arr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //[1, 3, 2, 5, 4]
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); //[1, 3, 2, [5], [4]]
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); //[1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //[1, 2, 3, 5, 4, 6, 7, 8]
