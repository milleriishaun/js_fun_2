/*
// my initial solution 1
// time: 30 mins // way too long for this kind of problem.
// I was also very tired near the end of the day
function pairElement(str) {
  let arr = str.split('');
  let arrCopy = arr.slice();
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] === 'A') {
      arrCopy.splice(i + 1, 0, 'T');
    } else if (arrCopy[i] === 'T') {
      arrCopy.splice(i + 1, 0, 'A');
    } else if (arrCopy[i] === 'C') {
      arrCopy.splice(i + 1, 0, 'G');
    } else if (arrCopy[i] === 'G') {
      arrCopy.splice(i + 1, 0, 'C');
    }
    i += 1;
  }
  let tempArr = [];
  let newArr = [];
  for (let j = 0; j < arr.length; j++) {
    tempArr = arrCopy.splice(0, 2);
    newArr.push(tempArr);
  }
  return newArr;
}
*/

console.log(pairElement('ATCGA')); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
// console.log(pairElement('TTGAG')); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
// console.log(pairElement('CTCTA')); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

/*
// my initial solution 2
// time: 40 mins // way too long, but I tired something new
// I'm a actually just glad it worked
function pairElement(str) {
  let arr = str.split('');
  let j = 0;
  for (let i = 1; i < 11; i += 2) {
    switch (str[j]) {
      case 'A':
        arr.splice(i, 0, 'T');
        break;
      case 'T':
        arr.splice(i, 0, 'A');
        break;
      case 'G':
        arr.splice(i, 0, 'C');
        break;
      case 'C':
        arr.splice(i, 0, 'G');
        break;
    }
    j += 1;
  }
  let newArr = [];
  for (let i = 0; i < 10; i += 2) {
    newArr.push(arr.splice(0, 2));
  }

  return newArr;
}
*/

/*
// Basic Solution
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
} // I like this solution because it is what I wanted my solution to be
// It was eye-opening to just push correct value arrays into the final array.
*/

// Intermediate Solution
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
  //split string into array of characters
  var arr = str.split('');
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
} // I like this solution because it looks very tight and clean
// The key is to make the key,value pairs object... then returning the map
// of the correct pairs... each in their own 2 index position arrays.
