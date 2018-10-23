// my initial solution
// time: 2 mins.
function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort((a, b) => a > b);
  // Add your code above this line
}
alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']);

/*
// Example of reverse A-Z
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a < b;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']
*/

/*
// Solution of A-z
function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a, b) {
    return a > b;
  });
  // Add your code above this line
}
alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']);
*/
