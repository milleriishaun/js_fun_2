// Great Code Snippets using .reduce()
// Frameworks like Redux have been born from master users of .reduce() and you can join the ranks by practicing the usage of these great snippets!
// Remember that .reduce() can create .map() and .filter(), so it also can be used for any kind of repeated string transformation or array manipulation that would otherwise require a loop.

/*
// Count how many of the same element appears, when the elements come from two different arrays
function countDiff(arr1, arr2) {
  let arr = arr1.concat(arr2);
  return arr.reduce(function(prev, next) {
    prev[next] = prev[next] + 1 || 1;
    return prev;
  }, {});
}
console.log(countDiff([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 1]));


let arr = [1, 3, 3, 4, 5, 6, 77, 6, 8, 77, 77];
console.log("Old: " + arr);
// Get rid of Duplicates in an array
let newArr = arr.reduce((prev, num) => {
  if (prev.indexOf(num) === -1) {
    prev.push(num);
  }
  return prev;
}, []);
console.log("New: " + newArr);


// Sum up all values within an array
let total = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
console.log(total);


// Sum up all values within an Argument
// Not too sure how to use this, although I think I know what it does
let arr = Array.from(arguments).reduce(function(a, b) {
  return a + b;
});
console.log(arr);


// Sum up all values with arrow functions
let arr = [1, 3, 3, 4, 5, 6, 77, 6, 8, 77, 77];
let sum = arr.reduce((a, b) => a + b);
console.log(sum);

// Flatten an array of arrays
let flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
  return b.concat(a);
}, []);
console.log(flattened);
// flattened is [4, 5, 2, 3, 0, 1]... if a and b are switched in concat


// Modern way to flatten an array, recursively... 07/2015
function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]



// Much more modern flatten recursively... 08/2017
const flatten = arr =>
  arr.reduce(
    (flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next),
    []
  );
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]]));

// Example code that flattens only one level:
let arrays = [['$6'], ['$12'], ['$25'], ['$25'], ['$18'], ['$22'], ['$10']];
let merged1 = [].concat.apply([], arrays);
let merged2 = [].concat(...arrays);
console.log(merged1); // ["$6", "$12", "$25", "$25", "$18", "$22", "$10"]
console.log(merged2); // ["$6", "$12", "$25", "$25", "$18", "$22", "$10"]


//===============================================================================

// This solution is concise and flattens only one level... as it should.
// Note: this solution iterates twice, since it uses .map() after it uses .reduce()
// concat :: ([a],[a]) -> [a]
const concat = (xs, ys) => xs.concat(ys);

// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f => xs => xs.map(f).reduce(concat, []);

// id :: a -> a
const id = x => x;

// flatten :: [[a]] -> [a]
const flatten = concatMap(id);

// your sample data
const data = [['$6'], ['$12'], ['$25'], ['$25'], ['$18'], ['$22'], ['$10']];

console.log(flatten(data));

//==================================

// Further example to show reality of real world data
// Player :: (String, Number) -> Player
const Player = (name, number) => [name, number];

// team :: ( . Player) -> Team
const Team = (...players) => players;

// Game :: (Team, Team) -> Game
const Game = (teamA, teamB) => [teamA, teamB];

// sample data
const teamA = Team(Player('bob', 5), Player('alice', 6));
const teamB = Team(Player('ricky', 4), Player('julian', 2));
const game = Game(teamA, teamB);

console.log(game);
// [ [ [ 'bob', 5 ], [ 'alice', 6 ] ],
//   [ [ 'ricky', 4 ], [ 'julian', 2 ] ] ]

//==================================

// Ok, now say we want to print a roster that shows
// all the players that will be participating in game …

const gamePlayers = game => flatten(game);

console.log(gamePlayers(game));
// => [ [ 'bob', 5 ], [ 'alice', 6 ], [ 'ricky', 4 ], [ 'julian', 2 ] ]

// If our flatten procedure flattened nested arrays too,
// we'd end up with this garbage result …

// note that badGenericFlatten is assumed to just flatten all... not defined here.
const gamePlayers = game => badGenericFlatten(game);

console.log(gamePlayers(game));
// => [ 'bob', 5, 'alice', 6, 'ricky', 4, 'julian', 2 ]


//===============================================================================


// Generic deepFlatten using procedural coding technique
// concat :: ([a],[a]) -> [a]
const concat = (xs, ys) => xs.concat(ys);

// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f => xs => xs.map(f).reduce(concat, []);

// id :: a -> a
const id = x => x;

// flatten :: [[a]] -> [a]
const flatten = concatMap(id);

// deepFlatten :: [[a]] -> [a]
const deepFlatten = concatMap(x => (Array.isArray(x) ? deepFlatten(x) : x));

// your sample data
const data = [0, [1, [2, [3, [4, 5], 6]]], [7, [8]], 9];

console.log(flatten(data));
// [ 0, 1, [ 2, [ 3, [ 4, 5 ], 6 ] ], 7, [ 8 ], 9 ]

console.log(deepFlatten(data));
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//===============================================================================


// Don't iterate twice by using the following:
// Using a trusty combinator I'm calling mapReduce helps keep
// the iterations to a minimum;
// it takes a mapping function m :: a -> b, a
// reducing function r :: (b,a) ->b and
// returns a new reducing function - this combinator
// is at the heart of transducers.

// I'm sure I will learn this in the future.
// But for now I can't really get focused on this.
// mapReduce = (a -> b, (b,a) -> b, (b,a) -> b)
const mapReduce = (m, r) => (acc, x) => r(acc, m(x));

// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f => xs => xs.reduce(mapReduce(f, concat), []);

// concat :: ([a],[a]) -> [a]
const concat = (xs, ys) => xs.concat(ys);

// id :: a -> a
const id = x => x;

// flatten :: [[a]] -> [a]
const flatten = concatMap(id);

// deepFlatten :: [[a]] -> [a]
const deepFlatten = concatMap(x => (Array.isArray(x) ? deepFlatten(x) : x));

// your sample data
const data = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

console.log(flatten(data));
// [ [ 1. 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]

console.log(deepFlatten(data));
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]

//===============================================================================

// Flatten an array using isArray and recursion, without using right-to-left rules.
var arr = [[1, 2, 3], ['cat', 'dog', ['fish', 'bird'], [[[]]]]];
function flattenArray(arr) {
  return arr.reduce(function(acc, item) {
    if (Array.isArray(item)) {
      return acc.concat(flattenArray(item));
    }
    return acc.concat(item); // this does the ordering. If you want reverse ordered output, just reverse it!
  }, []);
}
console.log(flattenArray(arr));



// Space-efficient usage of a generator function, which deepFlattens like .reduce()
function* flatten(arr) {
  if (!Array.isArray(arr)) yield arr;
  else for (let el of arr) yield* flatten(el);
}
console.log([...flatten([1, [2, [3, [4]]]])]); // [1 2 3 4]

// Savage Method(convert input array to string, then parse output to array)
var x = [1, 2, [3, 4, [5, 6, [7], 9], 12, [12, 14]]];
var y = JSON.parse(`[${JSON.stringify(x).replace(/\[|]/g, '')}]`);
console.log(y);


// deepFlatten an array(3% slower than the "Savage Method",
// but works with different datatypes)
arr = [[1, 2, 3], ['cat', 'dog', ['fish', 'bird'], [[[]]]]];
const flatten = function(A) {
  return A.toString()
    .split(',')
    .reduce((a, c) => {
      let i = parseFloat(c);
      c = !Number.isNaN(i) ? i : c;
      a.push(c);
      return a;
    }, []);
};
console.log(flatten(arr));

// Get an array of strings and numbers concatenated with "::".
let elements = ['abc', 'def', 123, 456];

// Call the reduce method, which calls the callback function
// for each array element.
let result = elements.reduce(appendCurrent);

// Define the callback function.
function appendCurrent(previousValue, currentValue) {
  return previousValue + '::' + currentValue;
}
console.log(result);
*/

/*
//=====================Broken below============================
// Find out the symmetrical differences of two or more arrays.
// Reduce the following...:
// I would solve for symmetrical differences but I have found that
// there is no point in doing that. Must find out why result is undefined.
function symDiff(args) {
  // convert args to an Array
  var argsArray = Array.prototype.slice.call(arguments);

  // now do the reduce magic!
  argsArray.reduce(function(acc, item) {
    return acc
      .filter(function(itemInAcc) {
        return item.indexOf(itemInAcc) === -1;
      })
      .concat(
        item.filter(function(itemInItem) {
          return acc.indexOf(itemInItem) === -1;
        })
      );
  }, []);
}

/*
// ...into the following:
function symDiff(args) {
  // convert args to an Array
  var argsArray = Array.prototype.slice.call(arguments);

  // now do the reduce magic!
  argsArray.reduce(function(acc, item) {
    var funWithFiltering = function(arr1, arr2) {
      return arr1.filter(function(itemInArr1) {
        return arr2.indexOf(itemInArr1) === -1;
      });
    };
    return funWithFiltering(acc, item).concat(funWithFiltering(item, acc));
  }, []);
}

let arr11 = [1, 2, 3, 4, 5, 6];
let arr22 = [4, 5, 6, 78, 9, 9, 7];
console.log(symDiff(arr11, arr22));

// Then include the function to remove the duplicates
function removeDuplicates(arr) {
  arr.filter(function(item, index, self) {
    // Keep only the first instance of the array, as given by indexOf()
    // Remove other elements from Array
    return self.indexOf(item) === index;
  });
}

// console.log(removeDuplicates(symDiff(arr1, arr2)));
//=====================Broken above============================
*/

/*
// Tip:
// Learn to use .reduce() as first nature, by thinking of using the
// following, whenever you need a string or array manipulated:
return arr.reduce(function(acc, item) {
  _;
}, _);
// Then, fill in the blanks.
// Remember: When you are using reduce(),you are thinking in terms
// of interaction of every element with another element. You are
// forming the output by accumulating it from start to finish.
*/

// This creates a slug which is a shorter descriptive title for URLs
function createSlug(str) {
  return str
    .split(' ')
    .reduce(function(prev, next) {
      return prev.concat([next.toLowerCase()]);
    }, [])
    .join('-');
}
console.log(createSlug("Rocko's Modern Life"));
