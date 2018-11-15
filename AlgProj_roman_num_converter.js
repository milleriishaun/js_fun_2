/*
// my initial solution(fail, don't try this at home!)
// time: 60 mins
// debug time: 240 mins //fail: longest problem I wanted to solve.
function convertToRoman(num) {
  let arr = [];
  while (num > 0) {
    if (num / 1000 > 1) {
      for (let i = 0; i < Math.round(num / 1000); i++) {
        arr.push('M');
        num = num - 1000;
      }
    } else if (num / 500 > 1) {
      for (let i = 0; i < Math.round(num / 500); i++) {
        arr.push('D');
        num = num - 500;
      }
    } else if (num / 100 > 1) {
      for (let i = 0; i < Math.round(num / 100); i++) {
        arr.push('C');
        num = num - 100;
      }
    } else if (num / 50 > 1) {
      for (let i = 0; i < Math.round(num / 50); i++) {
        arr.push('L');
        num = num - 50;
      }
    } else if (num / 10 >= 1) {
      for (let i = 0; i < Math.round(num / 10); i++) {
        arr.push('X');
        num = num - 10;
      }
    } else if (num / 5 >= 1) {
      for (let i = 0; i < Math.round(num / 5); i++) {
        arr.push('V');
        num = num - 5;
      }
    } else if (num > 0) {
      for (let i = 0; i < Math.round(num); i++) {
        arr.push('I');
        num = num - 1;
      }
    }
  }
  for (let j = 0; j < arr.length - 3; j++) {
    switch (arr.slice(j, j + 4).join('')) {
      case 'CCCC':
        if (arr[j + 3] !== 'C') {
          arr[j - 1] === 'D'
            ? arr.splice(j - 1, 5, 'C', 'M')
            : arr.splice(j + 1, 3, 'D');
        } else {
          if (arr[j + 4] !== 'L') {
            arr.splice(j - 1, 5, 'M');
          } else {
            if (arr[j - 1] !== 'D') {
              arr.splice(j - 10, 11, 'D');
            } else {
              if (arr[j + 9] !== 'X') {
                arr.splice(j - 1, 5, 'C', 'M');
              } else {
                arr.splice(j - 1, 11, 'M');
              }
            }
          }
        }
        j = -1;
        break;
      case 'XXXX':
        if (arr[j + 4] !== 'X') {
          arr[j - 1] === 'L'
            ? arr.splice(j - 1, 5, 'X', 'C')
            : arr.splice(j + 1, 3, 'L');
        } else {
          arr.splice(j - 3, 8, 'D');
        }
        j = -1;
        break;
      case 'IIII':
        arr[j - 1] === 'V'
          ? arr.splice(j - 1, 5, 'I', 'X')
          : arr.splice(j + 1, 3, 'V');
        j = -1;
        break;
      default:
        break;
    }
  }
  return arr.join('');
} //note: case object, not contents of the object array(so no case ['D', 'D'])
*/

/*
// Basic Solution
var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}; //note: someone would have to know this solution before they were tested.
*/

/*
// Intermediate Solution 1
function convertToRoman(num) {
  var romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
    ints = [],
    romanNumber = [],
    numeral = '';
  while (num) {
    ints.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (i = 0; i < ints.length; i++) {
    units(ints[i]);
  }
  function units() {
    numeral = romans[i * 2];
    switch (ints[i]) {
      case 1:
        romanNumber.push(numeral);
        break;
      case 2:
        romanNumber.push(numeral.concat(numeral));
        break;
      case 3:
        romanNumber.push(numeral.concat(numeral).concat(numeral));
        break;
      case 4:
        romanNumber.push(numeral.concat(romans[i * 2 + 1]));
        break;
      case 5:
        romanNumber.push(romans[i * 2 + 1]);
        break;
      case 6:
        romanNumber.push(romans[i * 2 + 1].concat(numeral));
        break;
      case 7:
        romanNumber.push(romans[i * 2 + 1].concat(numeral).concat(numeral));
        break;
      case 8:
        romanNumber.push(
          romans[i * 2 + 1]
            .concat(numeral)
            .concat(numeral)
            .concat(numeral)
        );
        break;
      case 9:
        romanNumber.push(romans[i * 2].concat(romans[i * 2 + 2]));
    }
  }
  return romanNumber
    .reverse()
    .join('')
    .toString();
} //note: I would never get this without studying or something.
*/

/*
// Intermediate Solution 2
function convertToRoman(num) {
  var romans = [
      // 10^i 10^i*5
      ['I', 'V'], // 10^0
      ['X', 'L'], // 10^1
      ['C', 'D'], // 10^2
      ['M'] // 10^3
    ],
    digits = num
      .toString()
      .split('')
      .reverse()
      .map(function(item, index) {
        return parseInt(item);
      }),
    numeral = '';

  // Loop through each digit, starting with the ones place
  for (var i = 0; i < digits.length; i++) {
    // Make a Roman numeral that ignores 5-multiples and shortening rules
    numeral = romans[i][0].repeat(digits[i]) + numeral;
    // Check for a Roman numeral 5-multiple version
    if (romans[i][1]) {
      numeral = numeral
        // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
        .replace(romans[i][0].repeat(5), romans[i][1])
        // Shorten occurrences of 9 * 10^i
        .replace(
          romans[i][1] + romans[i][0].repeat(4),
          romans[i][0] + romans[i + 1][0]
        )
        // Shorten occurrences of 4 * 10^i
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
    }
  }

  return numeral;
} // note: this is not easy either, but the steps are clear which is nice.
*/

console.log(convertToRoman(2)); //"II"
console.log(convertToRoman(3)); //"III"
console.log(convertToRoman(4)); //"IV"
console.log(convertToRoman(5)); //"V"
console.log(convertToRoman(9)); //"IX"
console.log(convertToRoman(12)); //"XII"
console.log(convertToRoman(16)); //"XVI"
console.log(convertToRoman(29)); //"XXIX"
console.log(convertToRoman(44)); //"XLIV"
console.log(convertToRoman(45)); //"XLV"
console.log(convertToRoman(68)); //"LXVIII"
console.log(convertToRoman(83)); //"LXXXIII"
console.log(convertToRoman(97)); //"XCVII"
console.log(convertToRoman(99)); //"XCIX"
console.log(convertToRoman(400)); //"CD"
console.log(convertToRoman(500)); //"D"
console.log(convertToRoman(501)); //"DI"
console.log(convertToRoman(649)); //"DCXLIX"
console.log(convertToRoman(798)); //"DCCXCVIII"
console.log(convertToRoman(891)); //"DCCCXCI"
console.log(convertToRoman(1000)); //"M"
console.log(convertToRoman(1004)); //"MIV"
console.log(convertToRoman(1006)); //"MVI"
console.log(convertToRoman(1023)); //"MXXIII"
console.log(convertToRoman(2014)); //"MMXIV"
console.log(convertToRoman(3999)); //"MMMCMXCIX"

// Practice Session 2, 11//2018,  pm

// time:  mins
// debug time:  mins
