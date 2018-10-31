/*
// my initial solution
// fail time: 60mins. // not sure how to go about it actually.
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
// time: 5 mins
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
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

/*
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
*/

/*
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
// I want to attempt this solution on 10/21/2018, 1 week.
*/

// Practice Session 2

/*
// fail time: 20 mins, 10/30/2018, 6:30pm
function mutation(arr) {
  return arr[0].includes(...arr[1].split('')); // I'm too tired to figure this out. Need break.
}
*/

//Go through and compare arr[0] to arr[1], going through each value and
// trying to see if each letter in the arr[1] is includes in the string that is in
// the array at the arr[0] position, and if all of them match, then call it
// a day and say that at least there is all the matches and therefore it is
// true. Otherwise it is false. If one is false, return false and exit the loop.

/*
// Idk the solution without using the easy way out
// I should have to used the intermediate solution: declarative
// time(to copy from memory): 5 mins, 10/31/2018, 12:50pm
// debug time: 2 mins
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(item => {
      return arr[0].toLowerCase().indexOf(item) !== -1;
    });
}
*/

// i was too bored and tired to try the procedural way

console.log('False(3):');
console.log(mutation(['hello', 'hey']));
console.log(mutation(['hello', 'neo']));
console.log(mutation(['voodoo', 'no']));
console.log('True(6):');
console.log(mutation(['hello', 'Hello']));
console.log(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']));
console.log(mutation(['Mary', 'Army']));
console.log(mutation(['Mary', 'Aarmy']));
console.log(mutation(['Alien', 'line']));
console.log(mutation(['floor', 'for']));
