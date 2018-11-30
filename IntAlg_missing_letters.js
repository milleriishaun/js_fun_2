/*
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
*/

/*
// my initial solution 2... after looking at the 3 hints(need ASCII)
// time: 15 mins
function fearNotLetter(str) {
  let startx = str.charCodeAt(0);
  for (let j = 0; j < str.length; j++) {
    if (str[j] !== String.fromCharCode(startx + j)) {
      return String.fromCharCode(startx + j);
    }
  }
  return undefined;
}
/*

/*
// Basic Solution
function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    // code of current character
    var code = str.charCodeAt(i);
    // if code of current character is not equal to first character + no of
    // iteration hence character has been escaped
    if (code !== str.charCodeAt(0) + i) {
      //note: slightly tricky but works
      // if current character has escaped one character find previous
      // char and return
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
} // this code is clean, except the code -1 at the end
*/

/*
// Intermediate Solution
// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.
function fearNotLetter(str) {
  var compare = str.charCodeAt(0),
    missing;
  str.split('').map(function(letter, index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });
  return missing;
}
// Code Explanation:
// First we define variables to store the character code for the first letter
// in the string, and to store whatever missing letters we may find.
// We turn the string to an array in order to map through it instead of using
// for and while loops.
// As we map through our letters’ character codes, we go comparing with the
// one that should be in that position.
// If the current letter matches, we move the comparison variable to its next
// position so we can compare on the next cycle.
// If not, the missing letter will be assigned to the missing variable, which
// will be returned after the map is finished.
// If there are no missing characters, return undefined.
*/

/*
// Simplified Advanced Solution 1
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
} //note: this is smart because just find if difference between char codes
//note: is greater than 1. If so, then that's the charCode missing.
//note: smart to go i = 1... then use ++i, when comparing i to i-1, b/c
//note: there would be no issue with the max and min i indices.
*/

// Advanced Solution 2
function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^' + str + ']', 'g');
  for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
  return allChars.match(notChars)
    ? allChars.match(notChars).join('')
    : undefined;
} // this finds all those letter not included, which makes it pro
//note: to me, it is very wordy but demonstrates deep knowledge of coding
// I should practice this one a lot because then I can expand my thinking
/*
// Code Explanation:
// A new string allChars is created.
// Create a regular expression notChars which selects everything except str.
// The for loop is used to add all the letters in the range to allChars.
// match() is used to strip off the str letters from the newly created
// string and it is returned.
// If there are no missing characters, return undefined.
*/

// Practice Session 2, 11/02/2018

/*
// time: 15 mins, 11/02/2018, 8:23am // not a bad solution
// debug time: 0 mins
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== String.fromCharCode(i + str.charCodeAt(0))) {
      return String.fromCharCode(i + str.charCodeAt(0));
    }
  }
} // though, if this is possible, I can do FP...
// spent 60 mins trying to write a FP solution with map, filter, and reduce
// but failed ultimately.
*/

// Practice Session 3

// time:  mins
// debug time:  mins
// function fearNotLetter(str) {
//   return;
// }

console.log(fearNotLetter('abce')); // d
console.log(fearNotLetter('abcdefghjklmno')); // i
console.log(fearNotLetter('stvwx')); // u
console.log(fearNotLetter('bcdf')); // e
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz')); // undefined
