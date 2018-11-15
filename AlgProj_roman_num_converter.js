// my initial solution
// time:  mins
// debug time:  mins
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
        console.log(arr, 'CCCC hit');
        arr[j - 1] === 'V'
          ? arr.splice(j - 1, 5, 'I', 'X') //, arr.splice((j, 0, 'V')))
          : arr.splice(j + 1, 3, 'V');
        console.log(arr, 'CCCC hit');
        j = 0;
      case 'XXXX':
        console.log(arr, 'XXXX hit');
        arr[j - 1] === 'L'
          ? arr.splice(j - 1, 5, 'X', 'C') //, arr.splice((j, 0, 'V')))
          : arr.splice(j + 1, 3, 'L');
        console.log(arr, 'XXXX hit');
        j = 0;
      case 'IIII':
        console.log(arr, 'IIII hit');
        arr[j - 1] === 'V'
          ? arr.splice(j - 1, 5, 'I', 'X') //, arr.splice((j, 0, 'V')))
          : arr.splice(j + 1, 3, 'V');
        console.log(arr, 'IIII hit');
        j = 0;
        break;
      default:
        break;
    }
  }
  return arr.join('');
} //note: case object, not contents of the object array(so no case ['D', 'D'])

console.log(convertToRoman(2)); //"II"
console.log(convertToRoman(3)); //"III"
console.log(convertToRoman(4)); //"IV"
console.log(convertToRoman(5)); //"V"
console.log(convertToRoman(9)); //"IX"
console.log(convertToRoman(12)); //"XII"
console.log(convertToRoman(16)); //"XVI"
console.log(convertToRoman(29)); //"XXIX"
console.log(convertToRoman(44)); //"XLIV"
// console.log(convertToRoman(44)); //"XLV"
// console.log(convertToRoman(68)); //"LXVIII"
// console.log(convertToRoman(83)); //"LXXXIII"
// console.log(convertToRoman(97)); //"XCVII"
// console.log(convertToRoman(99)); //"XCIX"
// console.log(convertToRoman(400)); //"CD"
// console.log(convertToRoman(500)); //"D"
// console.log(convertToRoman(501)); //"DI"
// console.log(convertToRoman(649)); //"DCXLIX"
// console.log(convertToRoman(798)); //"DCCXCVIII"
// console.log(convertToRoman(891)); //"DCCCXCI"
// console.log(convertToRoman(1000)); //"M"
// console.log(convertToRoman(1004)); //"MIV"
// console.log(convertToRoman(1006)); //"MVI"
// console.log(convertToRoman(1023)); //"MXXIII"
// console.log(convertToRoman(2014)); //"MMXIV"
// console.log(convertToRoman(3999)); //"MMMCMXCIX"

// Practice Session 2, 11//2018,  pm

// time:  mins
// debug time:  mins
