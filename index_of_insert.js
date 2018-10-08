/*
*/
// my initial solution
// time: 30 mins
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort;
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    let left = arr[i];
    let right = arr[i + 1];
    if (num > left && num < right) {
      return i + 1;
    } else if (num === left) {
      return i;
    } else if (arr.length === 0) {
      return 0;
    }
  }
  return num;
}

console.log(getIndexToIns([5, 3, 20, 3], 5)); //2
console.log(getIndexToIns([2, 20, 10], 19)); //2
console.log(getIndexToIns([2, 5, 10], 15)); //3
console.log(getIndexToIns([], 1)); //0
