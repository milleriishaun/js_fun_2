/*
// my initial solution 1
// time: 15 mins // actually solving was easy...
function myReplace(str, before, after) {
  if (/(^[A-Z])/.test(before)) {
    //fail: needed a review of .test()
    after = after.split('');
    after[0] = after[0].toUpperCase(); //fail: forgot to store upperCased
    after = after.join('');
  }
  return str.replace(before, after);
}
*/

/*
// my initial solution 2
// fail time: 5 mins //fail: couldn't simplify correctly
function myReplace(str, before, after) {
  if (/(^[A-Z])/.test(before)) {
    //fail: needed a review of .test()
    after = after.split('');
    after[0] = after[0].toUpperCase(); //fail: forgot to store upperCased
    after = after.join('');
  }
  return str.replace(/(^[A-Z])/.test(before) ? before : before, after.replace);
}
*/

/*
// Basic Solution
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
    // fail: I lost sight of this after.charAt(0).toUpperCase() soln
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);
  return str;
}
*/

/*
// Intermediate Solution
function myReplace(str, before, after) {
  //Create a regular expression object
  var re = new RegExp(before, 'gi'); // idk why we need a new RegExp obj
  //Check whether the first letter is uppercase or not
  if (/[A-Z]/.test(before[0])) {
    //Change the word to be capitalized
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  //Replace the original word with new one
  var newStr = str.replace(re, after);

  return newStr;
} // this would be my solution if I remembered
// the after.charAt(0).toUpperCase()
*/

/*
// Advanced Solution 1
function myReplace(str, before, after) {
  // create a function that will change the casing of any number
  // of letter in parameter "target"
  // matching parameter "source"
  function applyCasing(source, target) {
    // split the source and target strings to array of letters
    var targetArr = target.split('');
    var sourceArr = source.split('');
    // iterate through all the items of sourceArr and targetArr arrays
    // till loop hits the end of shortest array
    for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
      // find out the casing of every letter from sourceArr using regular
      // expression
      // if sourceArr[i] is upper case then convert targetArr[i] to upper
      // case
      if (/[A-Z]/.test(sourceArr[i])) {
        targetArr[i] = targetArr[i].toUpperCase();
      }
      // if sourceArr[i] is not upper case then convert targetArr[i] to
      // lower case
      else targetArr[i] = targetArr[i].toLowerCase();
    }
    // join modified targetArr to string and return
    return targetArr.join('');
  }

  // replace "before" with "after" with "before"-casing
  return str.replace(before, applyCasing(before, after));
}
*/

/*
// Advanced Solution 2
// This solution works but I'm more or less not really going to be
// using something like this because I don't need to create a whole
// utility function + getters/setters.
// Add new method to the String object, not overriding it if one
// exists already.
String.prototype.capitalize =
  String.prototype.capitalize ||
  function() {
    return this[0].toUpperCase() + this.slice(1);
  };
const Util = (function() {
  // Create utility module to hold helper functions
  function textCase(str, tCase) {
    // Depending if the tCase argument is passed we either set
    // the case of the given string or we get it.
    // Those functions can be expanded for other text cases.
    if (tCase) {
      return setCase(str, tCase);
    } else {
      return getCase(str);
    }
    function setCase(str, tCase) {
      switch (tCase) {
        case 'uppercase':
          return str.toUpperCase();
        case 'lowercase':
          return str.toLowerCase();
        case 'capitalized':
          return str.capitalize();
        default:
          return str;
      }
    }
    function getCase(str) {
      if (str === str.toUpperCase()) {
        return 'uppercase';
      }
      if (str === str.toLowerCase()) {
        return 'lowercase';
      }
      if (str === str.capitalize()) {
        return 'capitalized';
      }
      return 'normal';
    }
  }
  return {
    textCase
  };
})();
function myReplace(str, before, after) {
  const { textCase } = Util;
  const regex = new RegExp(before, 'gi');
  const replacingStr = textCase(after, textCase(before));
  return str.replace(regex, replacingStr);
}
*/

// Practice Session 2

/*
// time: 20 mins // I need practice with this, but I am learning for sure
// debug time: 40 mins
function myReplace(str, before, after) {
  return str.replace(
    before,
    before.charCodeAt(0) <= 90
      ? after.replace(/(^[a-z])/, x => x.toUpperCase())
      : after
  );
} // to me, this is actually a good solution
*/

/*
// time: 20 mins // this is an interesting way to solve
// debug time: 5 mins
function myReplace(str, before, after) {
  // textbook method-lookup of String: if already defined, use it,
  // or if not defined, then creating it on String.prototype and use it.
  String.prototype.capitalize =
    String.prototype.capitalize ||
    function() {
      return this[0].toUpperCase() + this.slice(1);
    };
  return str.replace(
    before,
    before.charCodeAt(0) <= 90 ? after.capitalize() : after
  );
}
*/

// Practice Session 3

// time:  mins
// debug time:  mins
function myReplace(str, before, after) {
  return;
}

console.log(myReplace('Let us go to the store', 'store', 'mall')); // "Let us go to the mall"
console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')); // "He is Sitting on the couch"
console.log(myReplace('This has a spellngi error', 'spellngi', 'spelling')); // "This has a spelling error"
console.log(myReplace('His name is Tom', 'Tom', 'john')); // "His name is John"
console.log(
  myReplace('Let us get back to more Coding', 'Coding', 'algorithms')
); // "Let us get back to more Algorithms"
