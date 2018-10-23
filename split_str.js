// my initial solution
// time: 10 mins.
function splitify(str) {
  // Add your code below this line
  return str.split(/[.,-\s]/);
  // Add your code above this line
}
splitify('Hello World,I-am code');

// FCC solution
function splitify(str) {
  // Add your code below this line
  return str.split(/\W/);
  // Add your code above this line
}
splitify('Hello World,I-am code');
