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
