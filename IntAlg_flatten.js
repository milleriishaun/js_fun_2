// my initial solution 1// this is a slightly older solution, hard to follow
// time: 10 mins
// debug time: 0 mins
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten
    );
  }, []);
}

/*
// my initial solution 2 // this is a modern solution
// time: 2 mins
// debug time: 0 mins
const steamrollArray = arr =>
  arr.reduce(
    (flat, next) =>
      flat.concat(Array.isArray(next) ? steamrollArray(next) : next),
    []
  );
*/

/*
// my initial solution 3 // generic solution using procedural coding 1
// time: 2 mins // this solution iterates twice, so a bit slower
// debug time: 0 mins
// concat :: ([a],[a]) -> [a]
const concat = (xs, ys) => xs.concat(ys);
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f => xs => xs.map(f).reduce(concat, []);
// id :: a -> a
const id = x => x;
// flatten :: [[a]] -> [a]
const flatten = concatMap(id);
// deepFlatten :: [[a]] -> [a]
const steamrollArray = concatMap(
  x => (Array.isArray(x) ? steamrollArray(x) : x)
);
*/

/*
// my initial solution 4 // generic solution using procedural coding 2
// time: 2 mins // this solution iterates once, so faster solution
// debug time: 0 mins
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
const steamrollArray = concatMap(
  x => (Array.isArray(x) ? steamrollArray(x) : x)
);
*/

/*
// Basic Solution
function steamrollArray(arr) {
  var flattenedArray = [];
  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };
  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
} // interesting solution I should practice to improve variety of commands
*/

/*
// Intermediate Solution
function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
*/

/*
// Advanced Solution
function steamrollArray(arr) {
  return arr
    .toString()
    .replace(',,', ',') // "1,2,,3" => "1,2,3"
    .split(',') // ['1','2','3']
    .map(function(v) {
      if (v == '[object Object]') {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
} //note: interesting code here, I should be sure to practice. Esp parseInt
*/

// Practice Session 2. 11//2018,  pm
// function steamrollArray(arr) {
//   return;
// }
// time:  mins
// debug time: 0 mins

console.log(steamrollArray([[['a']], [['b']]])); // ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]
