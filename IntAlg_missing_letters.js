// my initial solution
// time: 10 mins. //fail: didn't really work, so I had to move it here.
function fearNotLetter(str) {
  let count = 0;
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let start = str[0];
  let startx = 0;
  for (let i = 0; i < alpha.length; i++) {
    if (start === alpha[i]) {
      startx = i;
    }
  }
  for (let k = 0; k < str.length + 1; k++) {
    if (str[k] !== alpha[k + startx]) {
      return alpha[k + startx]; //only use startx, no need for endx
    }
  }
  return undefined;
}

console.log(fearNotLetter('abce')); // d
console.log(fearNotLetter('abcdefghjklmno')); // i
console.log(fearNotLetter('stvwx')); // u
console.log(fearNotLetter('bcdf')); // e
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz')); // undefined
