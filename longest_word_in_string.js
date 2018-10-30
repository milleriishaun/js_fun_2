/*
// my initial solution
function findLongestWordLength(str) {
  let arr = str.split(' ');
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1].length > arr[i].length) {
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
      str = arr[i];
    } else if (i === arr.length - 1 && arr[i - 1].length < arr[i].length) {
      str = arr[i];
    }
  }
  return str.length;
}
console.log(
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  )
);


// critique: They used a maxLength variable to compare against,
// while I used sort until the longest word is at the end. Theirs
// addresses the goal of getting the letter number better than mine.

// Basic solution
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}
console.log(
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  )
);

// Intermediate solution
function findLongestWordLength(str) {
  return str.split(' ').reduce(function(x, y) {
    return Math.max(x, y.length);
  }, 0);
}
console.log(
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  )
);
// critique: This uses .reduce() which I needed a lot of time to study.
// The .reduce() can be used for any string or array manipulation,
// so I should be practicing solutions like this.
//  much more examples of reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//  Personal snippets: https://codepen.io/milleriishaun/pen/ePZgWL?editors=1000

// Advanced solution
function findLongestWordLength(str) {
  // split the string into individual words
  // (important!!, you'll see why later)
  str = str.split(' ');

  // str only has 1 element left that is the longest element,
  // return the length of that element
  if (str.length == 1) {
    return str[0].length;
  }

  // if the first element's length is greater than the second element's (or equal)
  // remove the second element and recursively call the function)
  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return findLongestWordLength(str.join(' '));
  }

  // if the second element's length is greater than the first element's start
  // call the function past the first element
  if (str[0].length <= str[1].length) {
    // from the first element to the last element inclusive.
    return findLongestWordLength(str.slice(1, str.length).join(' '));
  }
}
console.log(
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  )
);

// critique: This solution uses recursion by comparing to next word,
// then removing the next word if shorter or equal. Note that the
// case in which the second word is greater must be accounted for.
// Then the recursion happens and we have to make sure to .join()
// after each recursion step.

// Attempt 1: Intermediate Solution
function findLongestWordLength(str) {
  let words = str.split(' ');
  let longest = words.reduce(function(x, y) {
    return Math.max(x, y.length);
  }, 0);
  return longest; // trip: used longest.length here
}

console.log(
  findLongestWordLength('What if we try a word such as otorhinolaryngology')
);

// Attempt 1: Advanced Solution
// Fail time = 20mins
function findLongestWordLength(str) {
  let words = str.split(' ');
  if (words.length === 1) {
    return words[0].length;
  }
  if (words[0].length >= words[1].length) {
    return findLongestWordLength(
      str.slice(words[0].length - 1, words[0].length + 1 + words[1].length - 1)
    );
  }
  if (words[0].length < words[1].length) {
    return findLongestWordLength(str.slice(0, words[0].length));
  }
}
console.log(
  findLongestWordLength('What if we try a word such as otorhinolaryngology')
);

// Advanced solution
function findLongestWordLength(str) {
  str = str.split(' ');
  if (str.length == 1) {
    return str[0].length;
  }
  if (str[0].length >= str[1].length) {
    str.splice(1, 1); //notice they use splice, not slice... so changes orig array
    return findLongestWordLength(str.join(' '));
  }
  if (str[0].length <= str[1].length) {
    //they decided to do <=
    return findLongestWordLength(str.slice(1, str.length).join(' '));
  }
}
console.log(
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  )
);

*/

/*
// Attempt 1(continued): Advanced Solution
// Tweaks
function findLongestWordLength(str) {
  let words = str.split(' ');
  if (words.length === 1) {
    return words[0].length;
  }
  if (words[0].length >= words[1].length) {
    words.splice(1, 1); // trip: the original array is splice.
    return findLongestWordLength(words.join(' '));
  }
  if (words[0].length < words[1].length) {
    return findLongestWordLength(words.slice(1, words.length).join(' '));
    // trip: slice uses start and end 0-indexing, with end not included.
    // trip: slice creates a shadow array, and does not change original.
  }
}
*/

console.log(
  findLongestWordLength('What if we try a word such as otorhinolaryngology')
);

// Practice

/*
// time: 15 mins
function findLongestWordLength(str) {
  return str.split(' ').reduce((acc, item) => {
    return Math.max(acc, item.length);
  }, 0);
}
*/

/*
// time: 15 mins, 10/30/2018 12:46pm
function findLongestWordLength(str) {
  str = str.split(' ');
  if (str.length === 1) {
    return str[0].length;
  }
  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
  }
  if (str[0].length < str[1].length) {
    return findLongestWordLength(str.slice(1, str.length).join(' '));
  }
  return findLongestWordLength(str.join(' '));
}
*/
