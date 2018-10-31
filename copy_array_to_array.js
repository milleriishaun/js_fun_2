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

/*
// my second solution
//time: 40 mins //trip: could not understand splice inserting after delete.
//trip: could not understand slice makes copy of an array
function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice();
  arr3.splice(n, 0, ...arr1);
  return arr3;
}
*/

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

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

// Practice Session 2 10/30/2018

/*
// time: 2 mins, 10/30/2018 4:31pm
// debug time: 20 mins //couldn't make one-liner splice.splice() b/c
//it changes the original arr2. Attempt 2 tries something else.
function frankenSplice(arr1, arr2, n) {
  let newArr2 = arr2.slice();
  newArr2.splice(n, 0, ...arr1);
  return [...newArr2];
}
*/

/*
// time: 10 mins, 10/30/2018 4:59pm
// debug time: 0 mins // I like this solution: it's outside the box
function frankenSplice(arr1, arr2, n) {
  return arr2.slice(0, n).concat(arr1.concat(arr2.slice(n)));
}
*/

// Practice Session ? 11/?/2018

// time: ? mins, 11/?/2018 ?pm
// debug time: ? mins
function frankenSplice(arr1, arr2, n) {
  return;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1)); //[4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2], ['a', 'b'], 1)); //["a", 1, 2, "b"]
console.log(
  frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)
);
['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes'];
// The first array should remain the same after the function runs.
// The second array should remain the same after the function runs.
