/*
// my initial solution
// time: 60mins. // not sure how to go about it actually.
function mutation(arr) {
  arr[0].toLowerCase();
  arr[1].toLowerCase();
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[1].length; j++) {
      let count = 0;
      for (let k = 0; k < arr[1].length; k++) {
        if (arr[1][j] === arr[0][i]) {
          count++;
        }
        if (count === arr[1].length) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(mutation(['hello', 'hey']));
*/

/*
// my second solution
//fail time: 30 mins.
function mutation(arr) {
  arr[0].toLowerCase();
  arr[1].toLowerCase();
  let result = false;
  for (let i = 0; i < arr[1].length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      let test = arr[0].indexOf(arr[1][i]);
      if ((test = -1)) {
        result = false;
        return result;
      } else {
        result = true;
      }
    }
    if (arr[1].length === j) {
      return result;
    }
  }
}
*/

/*
// my third solution
time: 5 mins
function mutation(arr) {
  test = arr[1].toLowerCase();
  target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) === -1) {
      return false;
    }
  }
  return true;
}
*/

/*
// Basic solution: Procedural
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
 }
*/

// Intermediate solution: Declarative
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}
// this is interesting because it uses .every()

// Attempt 1: Intermediate solution: Declarative
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}
// I like this solution, but it is very involved...
// I want to attempt this solution on 10/15/2018, 1 week.

console.log(mutation(['hello', 'hey']));
console.log(mutation(['hello', 'neo']));
console.log(mutation(['voodoo', 'no']));
console.log(mutation(['hello', 'Hello']));
console.log(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']));
console.log(mutation(['Mary', 'Army']));
console.log(mutation(['Mary', 'Aarmy']));
console.log(mutation(['Alien', 'line']));
console.log(mutation(['floor', 'for']));
