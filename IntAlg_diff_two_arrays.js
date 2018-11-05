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
*/

/*
// Intermediate Solution: Declarative Solution
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
} //note: they use the ! operator and the || b/c they know it's in one and
//note: and not in the other.
*/

/*
// Advanced Solution1: Declarative Approach
function diffArray(arr1, arr2) {
  return arr1
    .filter(el => !arr2.includes(el))
    .concat(arr2.filter(el => !arr1.includes(el)));
}
*/

/*
// Advanced Solution2: Declarative Approach
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
//I like this solution because it separates the function into bitesize
*/

/*
// Practice time 1
// time: 30 mins //hard to keep track of information/FP
function diffArray(arr1, arr2) {
  let newArr = [];
  function inThere(a1, a2) {
    return newArr.push(
      ...a2.filter(x => {
        // the spread here was unknown until testing
        return !a1.includes(x);
      })
    );
  }
  inThere(arr1, arr2);
  inThere(arr2, arr1);
  return newArr;
}

// time: 15 mins
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

// time: 5 mins, right after looking at the solution
function diffArray(arr1, arr2) {
  return arr1
    .filter(x => !arr2.includes(x))
    .concat(arr2.filter(x => !arr1.includes(x)));
} // missed the !includes. I kep missing it actually.

// time: 2 mins, right after looking at the solution
function diffArray(arr1, arr2) {
  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
}
*/
// _______________________________________________________________________
// _______________________________________________________________________
// _______________________________________________________________________

// Practice Session 2(acceptable solutions)

// more accessible solutions:

/*
// my solution 4(after looking at 3 hints)
// time: 30 mins
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
*/

/*
// my solution 5(after looking at 3 hints, and reviewing)
// time: 15 mins.
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !(arr1.includes(item) && arr2.includes(item)));
}
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
*/

/*
// Intermediate Solution: Declarative Solution
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
} //note: they use the ! operator and the || b/c they know it's in one
//note: and not in the other.
*/

/*
// Advanced Solution1: Declarative Approach
function diffArray(arr1, arr2) {
  return arr1
    .filter(el => !arr2.includes(el))
    .concat(arr2.filter(el => !arr1.includes(el)));
}
*/

/*
// Advanced Solution2: Declarative Approach
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
//I like this solution because it separates the function into bitesize
*/

// ------------------------------------------------------------
// ------------------------------------------------------------
// ------------------------------------------------------------

// Practice Session 2(practice)

/*
// fail time: 20 mins
// debug time: mins
function diffArray(arr1, arr2) {
  function isNotIn(a1, a2) {
    let excluded = [];
    console.log(a1);
    for (let i = 0; i < a2.length; i++) {
      if (v1.indexOf(a2) === -1) {
        excluded.push(a2[i]);
      }
    }
    return excluded;
  }
  return arr1.concat(arr2).filter(item => {
    return isNotIn(item, arr2).concat(isNotIn(item, arr1));
  });
}
*/

/*
// time: 2 mins .. after looking deeply at the solutions...couldn't think
// need much practice
// debug time: 0 mins
function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(item => {
    return !arr1.includes(item) || !arr2.includes(item);
  });
}
*/

/*
// time: 1 mins .. 10/31/2018, 7:15pm
// need much practice
// debug time: 1 mins
function diffArray(arr1, arr2) {
  return arr1
    .filter(el => !arr2.includes(el))
    .concat(arr2.filter(el => !arr1.includes(el)));
}
*/

// time: 5 mins .. 10/31/2018, 7:29pm
// need much practice
// debug time: 20 mins
function diffArray(arr1, arr2) {
  let newArr = [];
  function isIn(a1, a2) {
    for (let i = 0; i < a1.length; i++) {
      // if (!a1.includes(a2[i])) { //trip: b/c this gives some undefined
      if (a2.indexOf(a1[i]) === -1) {
        newArr.push(a1[i]);
      }
    }
    return newArr;
  }
  isIn(arr2, arr1);
  isIn(arr1, arr2);
  return newArr;
}

// Practice Session 3

// time:  mins .. 11/5/2018, pm
// debug time:  mins
function diffArray(arr1, arr2) {
  return;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); //[4]
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
