/*
// my initial solution
// time: 20 mins, 20 mins debugging
function destroyer(arr) {
  // Remove all the values
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arguments.length; j++) {
      if (arguments[j] === arr[i]) {
        arr.splice(i, 1);
        i = -1; //fail: hard catch, was resetting to 0 before, but should
        // be reset to -1 so that the addition given by the reset through
        // the loop will be accounted for and a real reset to 0 happens
      }
    }
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); // []
console.log(
  destroyer(
    [
      'possum',
      'trollo',
      12,
      'safari',
      'hotdog',
      92,
      65,
      'grandma',
      'bugati',
      'trojan',
      'yacht'
    ],
    'yacht',
    'possum',
    'trollo',
    'safari',
    'hotdog',
    'grandma',
    'bugati',
    'trojan'
  )
); // [12,92,65]
*/

/*
// my initial solution 2, after viewing 3 hints
// fail time: 30 mins
function destroyer(arr) {
  // Remove all the values
  let arg = Array.prototype.slice.call(arguments);
  // was so close to using reduce, but failed
  return arg.reduce((acc, item) => {
    return 
  }
  // idea: reduce the array of arguments until one array answer stands
  }; //fail: realized this was a bit more complicated than I could handle
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); // []
console.log(
  destroyer(
    [
      'possum',
      'trollo',
      12,
      'safari',
      'hotdog',
      92,
      65,
      'grandma',
      'bugati',
      'trojan',
      'yacht'
    ],
    'yacht',
    'possum',
    'trollo',
    'safari',
    'hotdog',
    'grandma',
    'bugati',
    'trojan'
  )
); // [12,92,65]
*/

/*
// Basic Solution:
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean); //note: smart because null/undefined is not Bool
}
*/

/*
// Intermediate Solution:
function destroyer(arr) {
  var args = Array.from(arguments).slice(1); // interesting copy technique
  // need to learn proper uses for from()
  return arr.filter(function(val) {
    return !args.includes(val);
    //note: smart logic...if val is not included in arg, keep it in arr.
  });
}
*/

/*
//interesting notes about from() from MDN
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
*/

/*
// Advanced Solution
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));
//note: this is a seemingly perfect solution(1 line, ES6, easily read)
//I really like this solution. I need to practice it and get good at it.
// You really ahve to understand code to get this solution
//note: the spreaded args gets passed into the filter function
//note as the args array).
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); // []
*/

// Practice time 1
function destroyer(arr) {
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); // []
console.log(
  destroyer(
    [
      'possum',
      'trollo',
      12,
      'safari',
      'hotdog',
      92,
      65,
      'grandma',
      'bugati',
      'trojan',
      'yacht'
    ],
    'yacht',
    'possum',
    'trollo',
    'safari',
    'hotdog',
    'grandma',
    'bugati',
    'trojan'
  )
); // [12,92,65]
