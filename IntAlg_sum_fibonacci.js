/*
// my initial solution
// time: 30 mins, 11/07/2018 5:09pm
// debug time: 30 mins // this solution came from trial and error
function sumFibs(num) {
  let arr = [];
  let temp = 0;
  function fib2(val) {
    if (val <= 1) {
      return 1;
    }
    val = fib2(val - 2) + fib2(val - 1);
    return val;
  }
  for (let i = 0; i < num; i++) {
    temp = fib2(i);
    if (temp < num) {
      arr.push(fib2(i)); // even with unshift and no filter, this fails
    }
  }
  return arr.filter(item => item % 2 !== 0).reduce((a, b) => {
    return a + b;
  }, 0);
} // this solution begins to take too long after sumFibs(45)
*/

/*
// Basic Solution
function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
} //note: this goes in depth in the meaning of the Fibonacci numbers
//note: it was just too involved at the ground level for me to create
*/

/*
// Intermediate Solution //fail: this fails FCC tests, without reverse()
function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // Sum only the odd numbers and return the value
  return arrFib.reduce((acc, curr) => {
    return acc + curr * (curr % 2);
  });
} //note: this not using filter, but using curr%2 as a multiplier is smart.
//note: Using arrFib with initial values is smart b/c it accounts for the loop.
//note: Need to figure out why my own solution can't match this speed.
*/

/*
// my initial solution(revamped), 11/07/2018 5:44pm
function sumFibs(num) {
  let arr = [1, 1];
  let temp = 0;
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;
  while ((temp = arr[0] + arr[1]) <= num) {
    arr.unshift(temp); //NOTE: using push() requires a recalculation of the
    //NOTE: array length each iteration, and slows down computation to a drag
    //IMPORTANT NOTE: the "temp =" in the while declaration is the final calc.
    //IMPORTANT NOTE: if temp not settled in the declaration, would do one
    //IMPORTANT NOTE: last undesirable iteration.
  }
  console.log(arr);
  return arr.reverse().reduce((a, b) => {
    // without reverse, this fails a few FCC tests
    console.log(a);
    return a + b * (b % 2); // taking out filter helped a bit but not enough
  });
} //fail: there was a lot learned from this problem, great for practice
*/

// Practice Session 2, 11//2018  pm

// time:  mins
// debug time:  mins

function sumFibs(num) {
  return;
}

// console.log(sumFibs(1)); //a number
console.log(sumFibs(10)); //1785
// console.log(sumFibs(4000000)); //4613732
console.log(sumFibs(4)); //5
// console.log(sumFibs(75024)); //60696
// console.log(sumFibs(75025)); //135721
