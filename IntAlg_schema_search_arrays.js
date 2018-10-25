/*
// my initial solution
// fail time: 60 mins
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let collectionProps = [];
  let sourceProps = Object.keys(source);
  for (let i = 0; i < collection.length; i++) {
    let collectionProps = Object.keys(collection[i]);
    for (var j = 0; j < collectionProps.length; j++) {
      for (let k = 0; k < sourceProps.length; k++) {
        if (collectionProps[i].includes(sourceProps[k])) {
          if (
            collectionProps[j] === sourceProps[k] &&
            collection[i].collectionProps[j] === source.sourceProps[k]
          ) {
            arr.push(collection[i]); //fail: I am lost to the solution to this
          }
        }
      }
    }
  } //fail: this solution is very easy to give up on
  //I would appreciate a Declarative Approach, but I am not there yet.

  // Only change code above this line
  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' }
    ],
    { last: 'Capulet' }
  )
);
// [{ first: "Tybalt", last: "Capulet" }]

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
*/

/*
// my solution 2(after a night of thinking about it)
// fail time: too many mins
function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  // Only change code below this line
  let collectionBackup = collection.slice();
  let sourceKeys = Object.keys(source);
  // loop through each collection object
  for (let i = 0; i < collectionBackup.length; i++) {
    // loop through each source key
    for (let j = 0; j < sourceKeys.length; j++) {
      if (
        collectionBackup[i].hasOwnProperty(sourceKeys[j]) &&
        collectionBackup[i][sourceKeys[j]] === source[sourceKeys[j]]
      ) {
        //loop through each collection object's keys and values... if all good, push
        for (let k = 0; k < collectionBackup[i].length; k++) {
          if (
            collectionBackup[i].hasOwnProperty(sourceKeys[j]) &&
            collectionBackup[i][sourceKeys[j]] === source[sourceKeys[j]]
          ) {
            // I repeat twice here and can't recover this meaningfully
            console.log('innermost compare');
            arr.push(collectionBackup[i]);
          }
        }
      }
    }
  }

  // Only change code above this line
  return arr;
}

// loop through the source keys..then once documented
// loop through the collection array.. then index the passing objects

// just filter out the object that don't match the props and values exactly

// I need to practice before looking at the solution to this
// Putting a pause on the algorithms until I master filter at least

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' }
    ],
    { last: 'Capulet' }
  )
);
// [{ first: "Tybalt", last: "Capulet" }]

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
//  [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
*/

/*
// my solution 3(after map reduce filter practice)
// fail time: 20 mins, fails last 3 tests, passes first 3 tests miraculously
function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  // Only change code below this line
  sourceKeys = Object.keys(source);
  arr = collection.filter(
    obj =>
      obj.hasOwnProperty(sourceKeys[0]) &&
      obj[sourceKeys[0]] === source[sourceKeys[0]]
  ); // this is the simple solution... but they ask for more
  // they ask for each sourceKey to be included in the objectKeys
  // they ask for respective sourceValues to be included in the respective objectValues

  // Only change code above this line
  return arr;
}

// loop through the source keys..then once documented
// loop through the collection array.. then index the passing objects

// just filter out the object that don't match the props and values exactly

// I need to practice before looking at the solution to this
// Putting a pause on the algorithms until I master filter at least

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' }
    ],
    { last: 'Capulet' }
  )
);
// [{ first: "Tybalt", last: "Capulet" }] 1

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1
  })
);
//  [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }] 2

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
//  [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }] 3

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
//  [{ "apple": 1, "bat": 2, "cookie": 2 }] 4

console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 }
    ],
    { apple: 1, bat: 2 }
  )
);
//  [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }] 5

console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));
//  [] 6
*/

/*
// my solution 4(after more filter practice)
// fail time: ? mins, fails last 3 tests, passes first 3 tests miraculously
function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  // Only change code below this line
  sourceKeys = Object.keys(source);
  collection.forEach(object => {
    arr.push()
  }.filter(
    obj => {

      return obj.hasOwnProperty(sourceKeys[0]) &&
      obj[sourceKeys[0]] === source[sourceKeys[0]]
    }

  ); // this is the simple solution... but they ask for more
  // they ask for each sourceKey to be included in the objectKeys
  // they ask for respective sourceValues to be included in the respective objectValues

  // Only change code above this line
  return arr;
}

// loop through the source keys..then once documented
// loop through the collection array.. then index the passing objects

// just filter out the object that don't match the props and values exactly

// I need to practice before looking at the solution to this
// Putting a pause on the algorithms until I master filter at least

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' }
    ],
    { last: 'Capulet' }
  )
);
// [{ first: "Tybalt", last: "Capulet" }] 1

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1
  })
);
//  [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }] 2

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
//  [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }] 3

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
//  [{ "apple": 1, "bat": 2, "cookie": 2 }] 4

console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 }
    ],
    { apple: 1, bat: 2 }
  )
);
//  [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }] 5

console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));
//  [] 6
*/

// I gave up on solving this myself because I'm missing important tools/practice

/*
// Basic Solution
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  // filter the collection
  return collection.filter(function(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
} // this was eloquent... I could have gotten this if I was comfortable
//transitioning from return to loops, and loop resulting returns to filter.
//note: I do understand now that filter simply asks if true or false for each
//note: item at hand.
*/

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' }
    ],
    { last: 'Capulet' }
  )
);
// [{ first: "Tybalt", last: "Capulet" }] 1

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1
  })
);
//  [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }] 2

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
//  [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }] 3

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
//  [{ "apple": 1, "bat": 2, "cookie": 2 }] 4

console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 }
    ],
    { apple: 1, bat: 2 }
  )
);
//  [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }] 5

console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));
//  [] 6

// Code Explanation:
// We filter through the array using .filter().
// Using a for loop we loop through each item in the object.
// We use a if statement to check if the object in the collection
// doesn’t have the key and the property value doesn’t match the value
// in source.
// We return false if the above if statement is correct. Otherwise,
// we return true;

/*
// Intermediate Solution
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
} // I actually almost made this but I forgot 'every' and was not that
// comfortable using the Functional Programming terminology.

// Code Explanation:
// We filter through the collection using .filter().
// Next, we return a Boolean value for the .filter() method.
// Finally, we reduce to Boolean value to be returned for the .every() method.
*/

// Advanced Solution
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        //wow, rather than filter and every
        // can use filter, map, then reduce... pretty fancy.
        //note: using map and reduce instead of 'every' is interesting.
        //note: I should learn from this somehow.
        return a && b;
      });
  });
}

// Code Explanation:
// We start by filtering through collection using Array.filter().
// Next, we map through all keys and return Boolean values based
// on the check conditions: both the key and its corresponding value
// must exist within the object we are filtering through.
// Then we reduce the mapped Boolean values to a single Boolean
// that indicates whether all srcKeys pass the conditions checked above.
// This single Boolean will be used to filter through the collection.
