/*
// my initial solution
//failed because goal was unclear
//note: it does do its job correctly
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  return arr2.concat(...arr1);
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
*/

// my second solution
//time: 40 mins //trip: could not understand splice inserting after delete.
//trip: could not understand slice makes copy of an array
function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice();
  arr3.splice(n, 0, ...arr1);
  return arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/*
// Basic solution
function frankenSplice(arr1, arr2, n) {
  // I would have done this, but I knew hwo too use spread
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
*/
