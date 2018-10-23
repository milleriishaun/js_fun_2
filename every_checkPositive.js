// my initial solution
// fail time: 15 mins.
function checkPositive(arr) {
  // Add your code below this line
  return arr.every(val => {
    //fail: forgot the return here above
    return val > 0; //fail: I don't even need this return statement
  });
  // Add your code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5]));

// FCC Solution1
function checkPositive(arr) {
  // Add your code below this line
  return arr.every(val => val > 0);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);

// FCC Solution2
function checkPositive(arr) {
  // Add your code below this line
  return arr.every(function(value) {
    //this solution is no different
    return value > 0;
  });
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
