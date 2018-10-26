/*
// my initial solution
// time 40 mins. //fail: took way too long stuck on loop rules
function sumAll(arr) {
  let newArr = arr.slice();
  let result = 0;
  if (newArr[0] > newArr[1]) {
    for (let i = newArr[1] + 1; i < newArr[0]; i++) {
      newArr.splice(1, 0, i);
    }
  } else {
    for (let i = newArr[0] + 1; i < newArr[newArr.length - 1]; i++) {
      newArr.splice(newArr.length - 1, 0, i);
    }
  }
  for (let j = 0; j < newArr.length; j++) {
    result += newArr[j];
  }
  return result;
}

console.log(sumAll([1, 4])); //10
console.log(sumAll([4, 1])); //10
console.log(sumAll([5, 10])); //45
console.log(sumAll([10, 5])); //45
*/

/*
// my solution 2
// fail time: 20 mins.
function sumAll(arr) {
  let newArr = arr.slice();
  let result = 0;
  let temp = [];
  let newEstArr = [];
  if (newArr[0] > newArr[1]) {
    temp = newArr.splice(0, 1);
    newEstArr = [newArr[1]];
    newEstArr.unshift(temp - 1);
    return newArr.concat([arr[0]]); //fail: didn't think of an easy recursion
  } else {
    for (let i = newArr[0] + 1; i < newArr[newArr.length - 1]; i++) {
      newArr.splice(newArr.length - 1, 0, i);
    }
  }
  for (let j = 0; j < newArr.length; j++) {
    result += newArr[j];
  }
  return result;
}

console.log(sumAll([1, 4])); //10
console.log(sumAll([4, 1])); //10
console.log(sumAll([5, 10])); //45
console.log(sumAll([10, 5])); //45
*/

// wow, my solution failed big time... could have just iterated over loop

/*
// Basic Solution:
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

console.log(sumAll([1, 4])); //10
console.log(sumAll([4, 1])); //10
console.log(sumAll([5, 10])); //45
console.log(sumAll([10, 5])); //45
*/

/*
// Intermediate Solution:
// this one went over my head as I forgot this formula completely
function sumAll(arr) {
  // Buckle up everything to one!

  // Using ES6 arrow function (one-liner)
  var sortedArr = arr.sort((a, b) => a - b);
  var firstNum = arr[0];
  var lastNum = arr[1];
  // Using Arithmetic Progression summing formula

  var sum = ((lastNum - firstNum + 1) * (firstNum + lastNum)) / 2;
  return sum;
}
*/

/*
// Advanced Solution:
function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
// this would have been the most practical/my level
*/

/*
// Practice time 1
// time: 10 mins
function sumAll(arr) {
  let temp = 0;
  let sum = 0;
  if (arr[0] > arr[1]) {
    temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

// time: 3 mins
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

function sumAll(arr) {}
*/

/*
// time: 20 mins //forgot to include 'return' in the reduce
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (let i = min + 1; i < max; i++) {
    arr.splice(1, 0, i);
  }
  return arr.reduce((acc, item) => {
    return acc + item;
  });
}


// time: 10 mins
function sumAll(arr) {
  let sum = 0;
  if (arr[0] > arr[1]) {
    arr = arr.reverse();
  }
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
*/

// time: 1 mins
function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4])); //10
console.log(sumAll([4, 1])); //10
console.log(sumAll([5, 10])); //45
console.log(sumAll([10, 5])); //45
