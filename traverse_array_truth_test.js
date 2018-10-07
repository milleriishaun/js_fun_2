/*
*/
// my initial solution
// time: 20 mins.
function findElement(arr, func) {
  let num = 0;
  let truthArr = arr.map(func); //trip: idk how to use func arrow
  let i = 0;
  while (i < truthArr.length) {
    if (truthArr[i] === true) {
      return arr[i];
    }
    i++;
  }
  return undefined;
}
//note: this solution feels very bloated
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
