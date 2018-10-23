// my initial solution
// time: 4 mins.
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return arr.concat([]).sort((a, b) => a - b);
  // Add your code above this line
}
console.log(nonMutatingSort(globalArray));

// FCC solution
