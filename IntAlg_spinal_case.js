/*
// my initial solution
// time: 40 mins //fail: time... just did some tom foolery.
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 91) {
      arr[i] = ',' + String.fromCharCode(arr[i].charCodeAt(0) + 32);
    }
  }
  return arr
    .join('')
    .replace(/[_,-\s]/g, '-')
    .toLowerCase()
    .replace(/[-]+/g, '-')
    .replace(/^[-]/g, '');
}

console.log(spinalCase('This Is Spinal Tap')); // "this-is-spinal-tap"
console.log(spinalCase('thisIsSpinalTap')); // "this-is-spinal-tap"
console.log(spinalCase('The_Andy_Griffith_Show')); // "the-andy-griffith-show"
console.log(spinalCase('Teletubbies say Eh-oh')); // "teletubbies-say-eh-oh"
console.log(spinalCase('AllThe-small Things')); // "all-the-small-things"
*/

/*
// my initial solution 2
// time: 30 mins //... better tom foolery.
function spinalCase(str) {
  function upperToHyphenLower(match, offset) {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }
  return str
    .replace(/[A-Z]/g, upperToHyphenLower)
    .replace(/[_\s]/g, '-')
    .replace(/[-]+/g, '-');
}

// Specifying a function as a parameter
You can specify a function as the second parameter. In this case, the
function will be invoked after the match has been performed. The function's
result (return value) will be used as the replacement string. (Note: the
  above-mentioned special replacement patterns do not apply in this case.)
  Note that the function will be invoked multiple times for each full match
  to be replaced if the regular expression in the first parameter is global.

// Possible name	Supplied value
match:	The matched substring. (Corresponds to $& above.)
p1, p2, ...:	The nth string found by a parenthesized capture group,
  provided the first argument to replace() was a RegExp object. (Corresponds
  to $1, $2, etc. above.) For example, if /(\a+)(\b+)/, was given, p1 is
  the match for \a+, and p2 for \b+.
offset:	The offset of the matched substring within the whole string being
  examined. (For example, if the whole string was 'abcd', and the matched
  substring was 'bc', then this argument will be 1.)
string:	The whole string being examined.
*/

/*
// my initial solution 3... after looking at hints and MDN
// time: 10 mins //... best tom foolery.
function spinalCase(str) {
  function replacer(match, p1, p2) {
    return [p1, '-', p2].join('');
  }
  return str
    .replace(/[_\s]/g, '-')
    .replace(/([a-z])([A-Z])/g, replacer)
    .toLowerCase();
}
*/

/*
// Basic Solution
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

//Basically...
function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+|_+/g, '-')
    .toLowerCase();
} // actually very close to my initial solution 3, but smaller
*/

/*
// Intermediate Solution
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores/spaces and join with dash
  return str.toLowerCase().split(/(?:_| )+/) .join('-'); // forgot what ?: means
  // forgot what ?: means.
  // Non-capturing groupings:
  // A group that is required to bundle a set of alternatives may or may
  // not be useful as a capturing group. If it isn't, it just creates a
  // superfluous addition to the set of available capture group values,
  // inside as well as outside the regexp. Non-capturing groupings, denoted
  // by (?:regexp), still allow the regexp to be treated as a single unit,
  // but don't establish a capturing group at the same time.
}
*/

// Advanced Solution
function spinalCase(str) {
  // I forget what ?= means... but I have a good guess.
  // (?=regex_here) is a positive lookahead. It is a zero-width assertion,
  // meaning that it matches a location that is followed by the regex
  // contained within (?= and ).
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}
// Code Explanation:
// Split the string at one of the following conditions (converted to an array)
// a whitespace character [\s] is encountered
// underscore character [_] is encountered
// or is followed by an uppercase letter [(?=[A-Z])]
// Join the array using a hyphen (-)
// Lowercase the whole resulting string

console.log(spinalCase('This Is Spinal Tap')); // "this-is-spinal-tap"
console.log(spinalCase('thisIsSpinalTap')); // "this-is-spinal-tap"
console.log(spinalCase('The_Andy_Griffith_Show')); // "the-andy-griffith-show"
console.log(spinalCase('Teletubbies say Eh-oh')); // "teletubbies-say-eh-oh"
console.log(spinalCase('AllThe-small Things')); // "all-the-small-things"
