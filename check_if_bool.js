/*
// my initial solution
time: 5 mins.
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return (bool === true || bool === false) ? true : false;
}

console.log(booWho(null));
*/

/*
// my second solution
// time: 1 min.
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === 'boolean' ? true : false;
}
*/

// basic solution
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === 'boolean'; //note: they don't need ternary operator
}

console.log(booWho(null));
