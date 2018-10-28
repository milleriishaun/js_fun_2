// my inital solution
// time: 10 mins. //fail: didn't really work, so I had to move it here.
function fearNotLetter(str) {
  let arr = str.split();
  // let start = 97;
  // let end = 122;
  let startx = arr[0];
  let endx = arr[arr.length];
  let code = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = startx; j < endx; j++) {
      if (arr[j] !== String.fromCharCode(j)) {
        return (code = String.fromCharCode(j));
      }
    }
    return undefined;
  }
  return code;
}

fearNotLetter('abce');
