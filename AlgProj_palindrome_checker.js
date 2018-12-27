/*
// my initial solution
// time: 20 mins // not a bad solution
// debug time: 10 mins
function palindrome(str) {
  // Good luck!
  let lettersOnly = str.replace(/[_\W]/g, '').toLowerCase();
  console.log(lettersOnly);
  let reved = lettersOnly
    .split('')
    .slice()
    .reverse()
    .join('');
  console.log(reved);
  if (reved === lettersOnly) {
    return true;
  }
  return false;
} //note: my solution is just a bit messy and the extra conditions are hard
*/

/*
// Basic Solution
function palindrome(str) {
  return (
    str.replace(/[\W_]/g, '').toLowerCase() ===
    str
      .replace(/[\W_]/g, '')
      .toLowerCase()
      .split('')
      .reverse()
      .join('')
  );
}
*/

/*
// Intermediate Solution
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  for (var i = 0, len = str.length - 1; i < len / 2; i++) {
    //note: this is a way to make sure the split is at an agreed # of letters
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}
*/

// Advanced Solution(most performant of the ones given)
//this solution performs at minimum 7x better, at maximum infinitely better.
//read the explanation for the reason why. I just failed this in an interview.
function palindrome(str) {
  //assign a front and a back pointer
  let front = 0;
  let back = str.length - 1;
  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    if (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }
    //decrements back pointer if current character doesn't meet criteria
    if (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }
    //finally does the comparison on the current character
    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
    front++;
    back--;
  }
  //if the whole string has been compared without returning false, it's a palindrome!
  return true;
} // need to really practice this one since it's a crowd favorite

// Code Explanation:
// I was given this problem in an interview (spoiler: I wasn’t hired
//   :frowning: ) I quickly arrived at the basic solution, and the
//   interviewer told me to make it better. The algorithm would take way
//   too long if he passed the Bible as the string. He wanted it to be instant.

// The simpler solutions perform very poorly on long strings because they
// operate on the whole string multiple times (toLowerCase(), replace(),
// split(), reverse(), join()) before comparing the whole string twice.

// The beauty of this solution is it never needs to read through the whole
// string, even once, to know that it’s not a palindrome. Why read through
// the whole string if you can tell that it’s not a palindrome just by
// looking at two letters?

// Uses a while loop instead of a for loop as a best practice - because we
// are using two variables, one is the index starting from the beginning of
// the string, and the other starts at the end of the string.
// https://en.wikipedia.org/wiki/Cyclomatic_complexity

// Practice Session 2, 12/08/2018,  pm

// time:  mins
// debug time:  mins
function palindrome(str) {
  return false;
}

console.log(palindrome('eye')); // true
console.log(palindrome('2eye2')); // true
console.log(palindrome('_eye')); // true
console.log(palindrome('race car')); // true
console.log(palindrome('A man, a plan, a canal. Panama')); // true
console.log(palindrome('never odd or even')); // true
console.log(palindrome('My age is 0, 0 si ega ym.')); // true
console.log(palindrome('0_0 (: /- :) 0-0')); // true
console.log(palindrome('not a palindrome')); // false
console.log(palindrome('nonpalindrome')); // false
console.log(palindrome('1 eye for of 1 eye.')); // false
console.log(palindrome('five|_/|four')); // false
