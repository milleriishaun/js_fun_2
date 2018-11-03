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

//
// time:  mins
// debug time:  mins
function uniteUnique(arr) {
  return arr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //[1, 3, 2, 5, 4]
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); //[1, 3, 2, [5], [4]]
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); //[1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //[1, 2, 3, 5, 4, 6, 7, 8]
