/*
// my initial solution
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  newArr = uniq(arr1.concat(arr2));
  return newArr;
} //fail:I'm not answering the problem correctly

// most common way to hashTable
function uniq(a) {
  var seen = {};
  return a.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
} //fail:I'm not answering the problem correctly

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
*/

/*
// my solution 2... after seeing ES6, easy diffing,
// the thing is, this should be a one-liner, not a separate func
function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  return uniq(newArr);
}
function uniq(a) {
  return Array.from(new Set(a));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
*/

/*
// One-liner attempt WORKS!
// my solution 2... after seeing ES6, easy diffing,
// the thing is, this should be a one-liner, not a separate func
function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  let uniq = a => [...new Set(a)]; // this is a partial function
  return uniq(newArr);
} //fail:I'm not answering the problem correctly
*/

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); //supposed to be [4]
console.log(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
); //supposed to be ["pink wool"]

console.log(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
); //supposed to be ["diorite", "pink wool"]

console.log(
  diffArray(
    ['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']
  )
); //supposed to be []

/*
// link to helpful: https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array

// Hashtables to the rescue
function uniq(a) {
  var seen = {};
  return a.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

// The best from two worlds
// A universal solution combines both approaches: it uses hash lookups for primitives and linear search for objects.

function uniq(a) {
  var prims = { boolean: {}, number: {}, string: {} },
    objs = [];

  return a.filter(function(item) {
    var type = typeof item;
    if (type in prims)
      return prims[type].hasOwnProperty(item)
        ? false
        : (prims[type][item] = true);
    else return objs.indexOf(item) >= 0 ? false : objs.push(item);
  });
}
*/
