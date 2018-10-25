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
*/

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

/*
// my solution 3
// there must be an easier way to solve this in a way I understand
// instinct to find the duplicates by comparison failed because
// the loop being for one arr and the other loop being for the other array
// was wrong, since I was not doing a one-way comparison, but looking both
// ways. For that, I needed one loop, and 2 comparisons, then handling
// possible exceptions like pushing 'undefined' because the array legths differ.
// time: 2 hours... this was a nightmare because failure to understand loops.
//fail:in dire need of practice for this algorithm since it is so important.
function diffArray(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1.indexOf(arr2[i]) === -1 && arr2[i] !== undefined) {
      newArr.push(arr2[i]);
    }
    if (arr2.indexOf(arr1[i]) === -1 && arr1[i] !== undefined) {
      newArr.push(arr1[i]);
    }
  }
  // let uniq = a => [...new Set(a)]; // this is a partial function
  // return uniq(newArr); // I guess this removing duplicates is unnecessary
  return newArr;
}

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
*/

/*
// my solution 4(after looking at 3 hints)
// time: 30 mins.
function diffArray(arr1, arr2) {
  let comboArr = arr1.concat(arr2);
  let newArr = [];
  for (let i = 0; i < comboArr.length; i++) {
    if (!arr1.includes(comboArr[i])) {
      newArr.push(comboArr[i]);
    } else if (!arr2.includes(comboArr[i])) {
      newArr.push(comboArr[i]);
    }
  }
  return newArr;
}

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
*/

/*
// my solution 5(after looking at 3 hints, and reviewing)
// time: 15 mins.
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !(arr1.includes(item) && arr2.includes(item)));
}

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
*/

/*
// Basic Solution: Imperative Approach
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
*/

/*
// Intermediate Solution: Declarative Solution
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
} //note: they use the ! operator and the || b/c they know it's in one and
//note: and not in the other.

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
*/

/*
// Advanced Solution1: Declarative Approach
function diffArray(arr1, arr2) {
  return arr1
    .filter(el => !arr2.includes(el))
    .concat(arr2.filter(el => !arr1.includes(el)));
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
*/

/*
// Advanced Solution2: Declarative Approach
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//I like this solution because it separates the function into bitesize
*/
