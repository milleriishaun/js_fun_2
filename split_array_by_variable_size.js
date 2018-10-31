/*
// my initial solution
// time: 40mins //trip: have to slice before splice
function chunkArrayInGroups(arr, size) {
  let copy = arr.slice(0, arr.length);
  let monkey = [];
  for (let i = 0; i < arr.length; i += size) {
    let leftovers = i % size;
    if (leftovers > 0 && i + size > arr.length) {
      let chunk = copy.splice(0, leftovers);
      monkey.push(chunk);
    } else {
      let chunk = copy.splice(0, size);
      monkey.push(chunk);
    }
  }
  return monkey;
}
*/

/*
// Basic solution
function chunkArrayInGroups(arr, size) {
  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
} // this is interestign b/c uses push in two arrays
// also interesting because of the use of modulus with size
*/

/*
// Intermediate solution
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
} //note: this does not loop through arr, as in instructions
*/

/*
// Advanced solution 1
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
*/

/*
// Advanced solution 2
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
*/

/*
// Advanced solution 3
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr]; //The returned is the full final array
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    ); //note: return cut out sized arr, and use concat as glue, then
    //note: replay the function with the rest of arr.
    //note: Then if too small, return the full array.
    //trip: The last cut happens here, but the slice
    // of 0 to 2 just takes whatever's left and boxes it.console
    // The concat of undefined is just ineffective.
    // I do wonder what the specific rule is though.
  }
} // I like this recursion
*/

// Practice Session 2

// fail time: 20 mins
// debug time: ? mins
// my brain isn't functioning... I should go home. Met Brett at Pole Line church
function chunkArrayInGroups(arr, size) {
  if (arr.length / size > 1) {
    return arr.concat(chunkArrayInGroups([arr.slice(0, size)], size));
  } else {
    return arr.concat([arr.slice(0, size)]);
  }
  // each loop, splice size amount if the arr.length % size === 0, else
  // push the rest of it and call it an new array.
} // Idk, this hurts my brain

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)); //[["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); //[[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); //[[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //[[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); //[[0, 1, 2], [3, 4, 5], [6]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); //[[0, 1, 2, 3], [4, 5, 6, 7], [8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); //[[0, 1], [2, 3], [4, 5], [6, 7], [8]]
