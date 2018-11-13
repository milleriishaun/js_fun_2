/*
// my initial solution
// time: 5 mins
// debug time: 0 mins
function truthCheck(collection, pre) {
  return collection.every(
    item => item.hasOwnProperty(pre) && Boolean(item[pre])
  );
}
*/

/*
// Basic Solution
function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}
*/

/*
// Intermediate Solution
function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}
*/

/*
// Advanced Solution
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}
*/

// Practice Session 2, 11//2018,  pm

// time:  mins
// debug time:  mins

console.log(collection);
console.log(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy', sex: 'male' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' }
    ],
    'sex'
  )
); // true
console.log(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy', sex: 'male' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' }
    ],
    'sex'
  )
); // true
console.log(
  truthCheck(
    [
      { name: 'Pete', onBoat: true },
      { name: 'Repeat', onBoat: true, alias: 'Repete' },
      { name: 'FastFoward', onBoat: true }
    ],
    'onBoat'
  )
); // true
console.log(truthCheck([{ single: 'yes' }], 'single')); // true
console.log(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' }
    ],
    'sex'
  )
); // false
console.log(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male', age: 0 },
      { user: 'Dipsy', sex: 'male', age: 3 },
      { user: 'Laa-Laa', sex: 'female', age: 5 },
      { user: 'Po', sex: 'female', age: 4 }
    ],
    'age'
  )
); // false
console.log(
  truthCheck(
    [
      { name: 'Pete', onBoat: true },
      { name: 'Repeat', onBoat: true },
      { name: 'FastFoward', onBoat: null }
    ],
    'onBoat'
  )
); // false
console.log(truthCheck([{ single: '' }, { single: 'double' }], 'single')); // false
console.log(
  truthCheck([{ single: 'double' }, { single: undefined }], 'single')
); // false
console.log(truthCheck([{ single: 'double' }, { single: NaN }], 'single')); // false
