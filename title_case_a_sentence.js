/*

// my initial solution
// time: 30 mins //forgot strings are immutable
function titleCase(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      arr[i] = arr[i].toUpperCase();
    } else if (arr[i - 1] === ' ') {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr.join('');
}

console.log(titleCase("i'm a little tea pot"));
*/

/*
// my second solution
// fail time: 2 mins //realized I could make everything lowercase first
// thought I could push it all into one line... probably could if I was pro
*/

/*
// Basic solution
String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};
*/

/*
// Basic solution
function titleCase(str) {
  var newTitle = str.split(' ');
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(' ');
}
*/

/*
// Intermediate solution
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(' '); //note: you can lowercase a string... just not change it
  //note: though this is split, the values inside are still strings.
  var result = convertToArray.map(function(val) {
    //note: val is the variable passed back through the callback function.
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    //note: .replace(certain character location, desired character)
    //note: this is not stored... since it is returned to a mapped position.
  });
  return result.join(' ');
}

titleCase("I'm a little tea pot");
// I find this solution interesting... I'll try it on my own.console

*/

/*

// Advanced solution
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
// I really like this solution... I will try it as well.

// The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.
// Lowercase the whole string using str.toLowerCase().
// Replace every word’ first character to uppercase using .replace.
// Search for character at the beginning of each word i.e. matching any character following a space or matching the first character of the whole string, by using the following pattern.
// Regex explanation:
// Find all non-whitespace characters (\S)
// At the beginning of string (^)
// Or after any whitespace character (\s)
// The g modifier searches for other such word pattern in the whole string and replaces them.

// This solution works with national symbols and accented letters as illustrated by following examples
// international characters: ‘бабушка курит трубку’ // -> ‘Бабушка Курит Трубку’
// accented characters: ‘località àtilacol’ // -> ‘Località Àtilacol’
*/

/*
// Practice Session 1 10/08/2018
// Attempt 1: Intermediate Solution
//copied much but I get the usage now.
function titleCase(str) {
  let convertToArray = str.toLowerCase().split(' ');
  let result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(' ');
}
console.log(titleCase("I'm a little tea pot"));
*/

/*
// Attempt 2: Intermediate solution
//time: 5 mins, no looking!
function titleCase(str) {
  let toArr = str.toLowerCase().split(' ');
  let result = toArr.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
*/

/*
// Attempt 1: Advanced solution
// time: 5 mins
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
} //trip: toLowerCase needs invokation
//trip: regex needs to use backslashes, not forwardslashes
console.log(titleCase("I'm a little tea pot"));
*/

// Practice Session 2 10/30/2018

/*
// time: 10 mins, 10/30/2018 4:09pm
// debug time: 0 mins
function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
*/

/*
// time: 5 mins, 10/30/2018 4:20pm, right after looking at Adv Sol
// debug time: 0 mins
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
*/

// Practice Session 3 10/?/2018
// time: ? mins, 10/?/2018 ?pm
// debug time: ? mins
function titleCase(str) {
  return str;
}

console.log(titleCase("I'm a little tea pot")); //I'm A Little Tea Pot
console.log(titleCase('sHoRt AnD sToUt')); //Short And Stout
console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')); //Here Is My Handle Here Is My Spout
