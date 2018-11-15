/*
// my initial solution
// time: 40 mins
// debug time: 40 mins //fail: took way too long to debug b/c got confused
function rot13(str) {
  return str
    .split('')
    .map(letter =>
      letter.replace(
        letter.charAt(0),
        String.fromCharCode(
          letter.charCodeAt(0) > 77 && letter.charCodeAt(0) < 91
            ? letter.charCodeAt(0) + 13 - 26
            : letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 78
              ? letter.charCodeAt(0) + 13
              : letter.charCodeAt(0)
        )
      )
    )
    .join('');
}
*/

/*
// Basic Solution
function rot13(str) {
  // Split str into a character array
  return (
    str
      .split('')
      // Iterate over each character in the array
      .map.call(str, function(char) {
        // Convert char to a character code
        x = char.charCodeAt(0);
        // Checks if character lies between A-Z
        if (x < 65 || x > 90) {
          return String.fromCharCode(x); // Return un-converted character
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        // Otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
      })
      .join('')
  ); // Rejoin the array into a string
} // basically my solution but a little harder to follow
*/

/*
// Intermediate Solution
// Solution with Regular expression and Array of ASCII character codes
function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/;
  str = str.split('');
  for (var x in str) {
    if (regEx.test(str[x])) {
      // A more general approach
      // possible because of modular arithmetic
      // and cyclic nature of rot13 transform
      rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
} //note: I like this solution b/c the modulus operator
*/

/*
// Advanced Solution
function rot13(str) {
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}
*/

console.log(rot13('SERR PBQR PNZC')); // FREE CODE CAMP
console.log(rot13('SERR CVMMN!')); // FREE PIZZA!
console.log(rot13('SERR YBIR?')); // FREE LOVE?
console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

/*

// Practice Session 2

// time:  mins
// debug time:  mins
function rot13(str) {
  // LBH QVQ VG!

  return str;
}
*/
