/*
// my initial solution
// time: 60 mins //pretty long time... I would not take this approach again
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    let left = arr[i];
    let right = arr[i + 1];
    if (num > left && num < right) {
      return i + 1;
    } else if (num === left) {
      return i;
    }
  }
  return arr.length;
}
*/

/*
*/

/*
// Basic solution
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}
*/

/*
// Basic solution 2
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var times = arr.length; // runs the for loop once for each thing in the array
  var count = 0;
  for (var i = 0; i < times; i++) {
    if (num > arr[i]) {
      count++;
    }
  } // counts how many array numbers are smaller than num
  return count; // the above equals num's position in a sorted array
}

// Basic solution 3
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  var i = 0;
  while (num > arr[i]) {
    i++;
  }

  return i;
}

// Intermediate solution 1
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}
// i like this solution because they push in the number
// then they sort it. It makes it much faster

// Intermediate solution 2
function getIndexToIns(arr, num) {
  // sort and find right index
  var index = arr
    .sort((curr, next) => curr > next)
    .findIndex(currNum => num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}
// this solution is good because it uses functions for minimal footprint.

// Advanced solution
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}
*/

// Practice Session 2, 10/30/2018

/*
// time: 20 mins, 10/30/2018 5:48pm
// debug time: 10 mins
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a > b);
  for (let i = 1; i <= arr.length; ++i) {
    if (arr[i - 1] < num && (arr[i] >= num || arr[i] === undefined)) {
      return i;
    }
  }
  return 0;
}
*/

/*
// time: 3 mins ... after looking at Int Sol 2 and Adv Sol
// debug time: 1 mins
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b) //fail: forgot params of arguments in arrow func
    .indexOf(num);
}
*/

/*
// time: 1 mins
// debug time: 0 mins
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a > b);
  return arr.indexOf(num);
}
*/

// Practice Session 3, 11/?/2018

// time: ? mins, 11/?/2018 ?pm
// debug time: 0 mins
function getIndexToIns(arr, num) {
  return;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); //3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //2
console.log(getIndexToIns([40, 60], 50)); //1
console.log(getIndexToIns([3, 10, 5], 3)); //0
console.log(getIndexToIns([5, 3, 20, 3], 5)); //2
console.log(getIndexToIns([2, 20, 10], 19)); //2
console.log(getIndexToIns([2, 5, 10], 15)); //3
console.log(getIndexToIns([], 1)); //0
