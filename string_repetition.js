/*
// my initial solution
function repeatStringNumTimes(str, num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str; //trip: using str += str is exponential, instead store result
  }
  return num > 0 ? result : '';
}

console.log(repeatStringNumTimes('abc', 3));
*/

/*
// my solution attempt 2
// fail time: 1 min. I don't recall any JS repeater string methods.

// my solution attempt 3
// fail time: 10 mins. Actually, recall recursion... but slice only subtracts.
function repeatStringNumTimes(str, num) {
  if (num > 0) {
    return repeatStringNumTimes(str.slice(str), num - 1);
    //trip: should have used str + recursion line Intermediate solution
  }
  if (num === 0) {
    return str;
  }
}
console.log(repeatStringNumTimes('abc', 3));
*/

/*
// Basic solution
function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
*/

/*
// Intermediate solution
function repeatStringNumTimes(str, num) {
  if (num < 0) return '';
  if (num === 1) return str;
  else return str + repeatStringNumTimes(str, num - 1);
}
console.log(repeatStringNumTimes('abc', 3));
*/

/*
// Advanced solution: Declarative... my original solution but can't use repeat()
// This solution is a lie.
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes('abc', 3);
*/
