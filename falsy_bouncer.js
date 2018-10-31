/*
// my initial solution
// fail time: 40 mins.
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === false || //trip: idk why I can't get this blocked out
      arr[i] === null ||
      arr[i] === 0 ||
      arr[i] === '' ||
      arr[i] === undefined ||
      arr[i] === NaN
    ) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(bouncer([7, 'ate', '', false, 9]));
*/

// my second solution ... also is the Advanced solution
// time: 5 mins.
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

console.log(bouncer([7, 'ate', '', false, 9]));

// this solution is too easy... 10/30/2018, I remember
