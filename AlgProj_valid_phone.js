/*
// my initial solution
// time: 10 mins //fail: does not pass 5/27 tests
// debug time: 20 mins // best thing I could do without looking up solution
function telephoneCheck(str) {
  // Good luck!
  return (
    str.match(
      /^[1\s]?[\s]?[(\s]?\d\d\d[-)\s]?[\s]?\d\d\d[-\s]?\d\d\d\d/,
      'g'
    ) !== null
  );
}
*/

/*
// Basic Solution
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

// Code Explanation:
// ^ denotes the beginning of the string.
// (1\s?)? allows for “1” or “1 ” if there is one.
// \d{n} checks for exactly n number of digits so \d{3} checks for three
// digits.
// x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either
// three digits surrounded by parentheses, or three digits by themselves
// with no parentheses.
// [\s\-]? checks for spaces or dashes between the groups of digits.
// $ denotes the end of the string. In this case the beginning ^ and end
// of the string $ are used in the regex to prevent it from matching any
// longer string that might contain a valid
// phone number (eg. “s 555 555 5555 3”).
// Lastly we use regex.test(str) to test if the string adheres to the
// regular expression, it returns true or false.
*/

/*
// Intermediate Solution
function telephoneCheck(str) {
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
  return re.test(str);
} // This is an example of a very comprehensive and robust solution
// to validating US phone numbers client side. In such cases it might
// be much better and easier to implement this library libphonenumber.
*/

console.log(telephoneCheck('1 555-555-5555')); // true
console.log(telephoneCheck('1 (555) 555-5555')); // true
console.log(telephoneCheck('5555555555')); // true
console.log(telephoneCheck('555-555-5555')); // true
console.log(telephoneCheck('(555)555-5555')); // true
console.log(telephoneCheck('1(555)555-5555')); // true
console.log(telephoneCheck('1 555 555 5555')); // true
console.log(telephoneCheck('1 456 789 4444')); // true
console.log(telephoneCheck('555-5555')); // false
console.log(telephoneCheck('5555555')); // false
console.log(telephoneCheck('1 555)555-5555')); // false
console.log(telephoneCheck('123**&!!asdf#')); // false
console.log(telephoneCheck('55555555')); // false
console.log(telephoneCheck('(6054756961)')); // false
console.log(telephoneCheck('2 (757) 622-7382')); // false
console.log(telephoneCheck('0 (757) 622-7382')); // false
console.log(telephoneCheck('-1 (757) 622-7382')); // false
console.log(telephoneCheck('2 757 622-7382')); // false
console.log(telephoneCheck('10 (757) 622-7382')); // false
console.log(telephoneCheck('27576227382')); // false
console.log(telephoneCheck('(275)76227382')); // false
console.log(telephoneCheck('2(757)6227382')); // false
console.log(telephoneCheck('2(757)622-7382')); // false
console.log(telephoneCheck('555)-555-5555')); // false
console.log(telephoneCheck('(555-555-5555')); // false
console.log(telephoneCheck('(555)5(55?)-5555')); // false

/*

// Practice Session 2 ... to be honest, IDK if I should practice this code

// time:  mins
// debug time:  mins
function telephoneCheck(str) {
  return str;
}
*/
