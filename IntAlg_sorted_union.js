/*
// my initial solution
function uniteUnique(arr) {
  for (let i = 0; i < arguments.length; i++) {
    // can't finish this until I have memorized the clearer of arrays function
  }
  return arr;
}
*/

// after 4 days of practice of previous concepts, now ready for this

/*
// my initial solution 2
// time: 20 mins
// debug time: 40 mins
function uniteUnique(arr) {
  // get all the arguments in the first layer of their array in one array ordered as is
  // take out all subsequent duplicates using uniq... the special duplicate remover of ES6
  for (let y = 0; y < arguments.length; y++) {
    spreadArr = spreadArr.concat(arguments[y]);
  }
  const uniq = a => [...new Set(a)];
  let finalArr = uniq(spreadArr);
  let index = 0;
  for (let k = 0; k < arguments.length; k++) {
    for (let x = 0; x < arguments[k].length; x++) {
      if (typeof arguments[k][x] === 'array') {
        finalArr[index] = arguments[k][x];
      }
      index++;
    }
  }
  return finalArr;
}
*/

/*
// my initial solution 3
// time: 20 mins
// debug time: 40 mins
function uniteUnique(arr) {
  // get all the arguments in the first layer of their array in one array ordered as is
  // take out all subsequent duplicates using uniq... the special duplicate remover of ES6
  const spreadArr = [...arguments].reduce((curr, next) => {
    return curr.concat(next);
  });
  const uniq = a => [...new Set(a)];
  const finalArr = uniq(spreadArr);
  let index = 0;
  for (let k = 0; k < arguments.length; k++) {
    for (let x = 0; x < arguments[k].length; x++) {
      if (typeof arguments[k][x] === 'array') {
        finalArr[index] = arguments[k][x];
      }
      index++;
    }
  }
  return finalArr;
}
*/

/*
// Basic Solution 1
function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly made the program
  // work with two or more arrays instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}
*/

/*
// Basic Solution 2
function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for(var i = 0; i < args.length; i++) {
    for(var j = 0; j < args[i].length; j++) {
       if(!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}
*/

/*
// Intermediate Solution
function uniteUnique(arr1, arr2, arr3) {
  var newArr;
  //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA, arrB) {
    //Apply filter to remove the duplicate elements in the array
    return arrA.concat(
      arrB.filter(function(i) {
        return arrA.indexOf(i) === -1;
      })
    );
  });

  return newArr;
}
*/

/*
// Advanced Solution 1
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]) {
    concatArr = concatArr.concat(arguments[i]);
    i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}
*/

/*
// Advanced Solution 2(using ES5)
function uniteUnique(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
  // similar to   const uniq = a => [...new Set(a)]; let finalArr = uniq(spreadArr);
}
*/

// Practice Session 2, 11/0?/2018
// I'm going through the rest of the IntAlgs, then will go back to these practices
// Just need a change in pace, in the aftermath of part-time job find.

//
// time:  mins
// debug time:  mins
function uniteUnique(arr) {
  return arr[0];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //[1, 3, 2, 5, 4]
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); //[1, 3, 2, [5], [4]]
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); //[1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //[1, 2, 3, 5, 4, 6, 7, 8]
