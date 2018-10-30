/*
// my initial solution
function largestOfFour(arr) {
  let maxNum = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maxNum) {
        maxNum = arr[i][j]; //trip: arr is 2-dimensional
      }
    }
    result.push(maxNum);
    maxNum = -Infinity; //trip: reset maxNum to 0,
    // b/c one loop may resolve 27... which is too high to start.
    //trip2: 0 is not be low enough... array might negative values.
  }
  return result;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
  ])
);

// my solution attempt 2: using ?
//fail

// Basic solution: Procedural approach
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0]; //notice: no need for -Infinity
    for (var sb = 1; sb < arr[n].length; sb++) {
      //note skipped 1 loop
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber; //notice: they knew result array indices
  }

  return results;
}


// Intermediate solution: Declarative approach
function largestOfFour(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}


// Advanced solution: Declarative approach
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null)); //so mad
  //trip: idk how apply works with bind, or how Math.max works on all array values.
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
  ])
);

// my solution attempt 2... after reading Advanced solution
function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.max(...arr[i]));
    // same as Math.max.apply(Math, arr[i])
  }
  return result;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
  ])
);

// Attempt 1: Intermediate solution: Declarative approach
function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return prev > current ? prev : current;
    });
  });
}
//rock solid!
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
  ])
);
*/

/*
// Attempt 1: Advanced solution: Declarative approach
// fail time: 1 min
function largestOfFour(arr) {
  //trip: did not realize I still had to map it
  // Experienced declarative programmers don't make this mistake.
  return arr.map(Function.apply.bind(Math.max, null));
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ])
);

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
  ])
);
*/

//==========================Random bind example=======================
/*
this.x = 9; // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};

module.getX(); // 81

var retrieveX = module.getX; // adding .bind(module) here solves the issue too.

console.log(retrieveX()); // here is the difference... since it is the this of global.
// returns 9 - The function gets invoked at the global scope
// for some reason, I can't view 9... shows 'undefined'.

//Instead, do the following using bind.

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81
*/

// Practice

/*
// fail time: 10 mins.
// debug time: 10 mins
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
*/

// fail time: after looking at intermediate Sol, 10/30/2018 1:11pm
// debug time: 1 min // I was aiming for this at first but
// did not have the right structure to get it right the first time.
function largestOfFour(arr) {
  return arr.map(item => {
    return item.reduce((acc, val) => {
      return val > acc ? val : acc;
    });
  });
}

//rock solid!
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
); //[5, 27, 39, 1001]

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
); //[27, 5, 39, 1001]

console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ])
); //[9, 35, 97, 1000000]

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
  ])
); //[25, 48, 21, -3]
