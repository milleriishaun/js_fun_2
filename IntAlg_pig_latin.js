/*
// my initial solution
// time: 15 mins //actually couldn't solve problem b/c uncertain rules
function translatePigLatin(str) {
  let arr = str.split('');
  if (
    arr[0] === 'a' ||
    arr[0] === 'e' ||
    arr[0] === 'i' ||
    arr[0] === 'o' ||
    arr[0] === 'u'
  ) {
    arr.push('way');
  } else {
    if (arr[0] === 'g') {
      let c1 = arr.shift();
      let c2 = arr.shift();
      arr.push(c1);
      arr.push(c2 + 'ay');
    } else {
      let c1 = arr.shift();
      arr.push(c1 + 'ay');
    }
  }
  return arr.join('');
}
*/

/*
// Basic Solution // With practice I can solve this. GL @ interviews though.
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;
  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + 'ay';
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  } //note: they used indexOf to get a number... then used it for pigLatin
  return pigLatin;
}

// Code Explanation:
// Make an empty string to hold your Pig Latin word.
// Assign your appropriate regular expression to a variable.
// If the first character is a vowel, just add way to end of string and
// return it.
// If the first character is not a vowel:

// Find number of consonants before first vowel with help
// of indexOf(), match() and regex.
// Start Pig Latin string with first vowel till the end.
// Add letters before first vowel to end of string.
// substr() is used for string manipulation here.
// Add ay to end of string and return it.
*/

/*
// Intermediate Solution
function translatePigLatin(str) {
  function check(obj) {
    return ['a', 'i', 'u', 'e', 'o'].indexOf(str.charAt(obj)) == -1
      ? check(obj + 1)
      : obj;
  }

  return str
    .substr(check(0))
    .concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
} // this is the perfect example of next-level coding for me...
//note: they use recursion, functions, and recursion and FP.
//note: I need to study this and be able to master it for practice doing
//note: other problem this way.
//IDK how this applies pigLatin well, but it is very good. Can't get
// better if I don't fully understand the rules. Even w/ next-level code.

// Code Explanation:
// This is a declarative as well as recursive approach to this problem.
// check() is a function which checks for first letter of string to be in
// the array of vowels, ['a','i','u','e','o'].
// In case of consonants, check() calls itself on the next characters until
// finding the first vowel.
// It’ll return the index of whatever it finds to be the last initial
// consonant i.e., Schmidtsville’s would be 3.
// Then, letters up until that index are removed from the string and
// concatenated with either that same chunk of removed string or w accordingly,
// and then ay regardless.
*/

/*
// Advanced Solution
function translatePigLatin(str) {
  var strArr = [];
  var tmpChar;
  // check if the char is consonant using RegEx
  function isConsonant(char) {
    return !/[aeiou]/.test(char);
  }
  // return initial str + "way" if it starts with vowel
  // if not - convert str to array
  if (!isConsonant(str.charAt(0))) return str + 'way';
  else strArr = str.split('');
  // push all consonats to the end of the array
  while (isConsonant(strArr[0])) {
    tmpChar = strArr.shift();
    strArr.push(tmpChar);
  }
  // convert array to string and concatenate "ay" at the end
  return strArr.join('') + 'ay';
} // this just identifies the need to know if the value is a consonant,
// and thus makes a function just for that... and uses it in multiple places.
// It is good but I find that it is too wordy. It does make the rules of
// the practice more easy to follow. I could learn a few things from being
// able to reproduce some of this.

// Code Explanation:
// isConsonant() is used to check if a character is a consonant.
// If first character is vowel, add way to end of string and return it.
// If first character is not a vowel:

// Split string into array using split().
// Push all consonants to end of array with help of shift() and push().
// Convert array to string using join() and add ay to end of
// string. Return it.
*/

// Practice Session 2

/*
// time: 40 mins // pretty pathetic solution and doesn't pass all FCC tests
// Reason being that I don't fully understand piglatin or what tests are run
// debug time: 20 mins
function translatePigLatin(str) {
  let regex = /[aeiou]/;
  if (str.slice(0, 2).match(regex) === null) {
    let consonant = str.slice(0, 2);
    return str
      .split('')
      .slice(2)
      .concat(String(consonant) + 'ay')
      .join('');
  } else if (str.slice(0, 1).match(regex) === null) {
    let consonant = str.slice(0, 1);
    return str
      .split('')
      .slice(1)
      .concat(String(consonant) + 'ay')
      .join('');
  } else if (str.slice(0, 1).match(regex) !== null) {
    return str
      .split('')
      .concat('way')
      .join('');
  }
}
*/

/*
// time: 2 mins
// debug time: 0 mins
// it is better to do this:
function translatePigLatin(str) {
  let regex = /[aeiou]/;
  if (str.slice(0, 1).match(regex) !== null) {
    return str
      .split('')
      .concat('way')
      .join('');
  } else if (str.slice(0, 1).match(regex) === null) {
    let vowelIndex = str.indexOf(str.match(regex)[0]);
    //note:important to find the index of the first match using the regex
    return str
      .split('')
      .slice(vowelIndex)
      .concat(str.slice(0, vowelIndex) + 'ay')
      .join('');
  } // not sure how the case of the no vowel will pass FCC tests
}
*/

/*
// time: 20 mins // this is an interesting example, different way of thinking
// debug time: 40 mins
function translatePigLatin(str) {
  let strArr = str.slice().split('');
  let regex = /[aeiou]/;
  if (str.slice(0, 1).match(regex) !== null) {
    return str.concat('way');
  } else if (str.slice(0, 1).match(regex) === null) {
    while (strArr[0].match(regex) === null) {
      let val = strArr.shift();
      strArr.push(val);
    }
    return strArr.concat('ay').join('');
  }
}
*/

// Practice Session 3
// time:  mins //note:doesn't pass all FCC tests
// debug time:  mins
function translatePigLatin(str) {
  return;
}

console.log(translatePigLatin('california')); // "aliforniacay"
console.log(translatePigLatin('paragraphs')); // "aragraphspay"
console.log(translatePigLatin('glove')); // "oveglay"
console.log(translatePigLatin('algorithm')); // "algorithmway"
console.log(translatePigLatin('eight')); // "eightway"
// Should handle words where the first vowel comes in the end of the word.
// Should handle words without vowels.
