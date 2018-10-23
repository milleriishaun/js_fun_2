// my initial solution
// time; 5 mins
function sentensify(str) {
  // Add your code below this line
  return str.split(/[.,-]/).join(' ');
  // Add your code above this line
}
sentensify('May-the-force-be-with-you');

// Solution
function sentensify(str) {
  // Add your code below this line
  return str.split(/\W/).join(' ');
  // Add your code above this line
}
sentensify('May-the-force-be-with-you');
