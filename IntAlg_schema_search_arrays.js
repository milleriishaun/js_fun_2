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

// my solution 2(after a night of thinking about it)
// fail time: ? mins
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let collectionProps = [];
  let sourceProps = Object.keys(source);
  for (let i = 0; i < collection.length; i++) {
    let collectionProps = Object.keys(collection[i]);
  }

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
