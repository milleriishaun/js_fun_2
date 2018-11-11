/*
// my initial solution
// time: 2 mins // it was a lookup and understand then apply
// debug time: 0 mins
function binaryAgent(str) {
  return str
    .split(' ')
    .map(item => String.fromCharCode(parseInt(item, 2)))
    .join('');
} // my solution doesn't look too bad too me
*/

/*
// Basic Solution
function binaryAgent(str) {
  biString = str.split(' ');
  uniString = [];
// using the radix (or base) parameter in parseInt, we can convert the binary
//   number to a decimal number while simultaneously converting to a char
  for(i=0;i < biString.length;i++){
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  // we then simply join the string
  return uniString.join('');
} //note: this is basically my solution, but mine is more idiomatic
*/

/*
// Intermediate Solution
function binaryAgent(str) {
  // Separate the binary code by space.
  str = str.split(' ');
  var power;
  var decValue = 0;
  var sentence = '';
  // Check each binary number from the array.
  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;
        // Record the decimal value by adding the number to the previous one.
      }
    }
    // After the binary number is converted to decimal, convert it to string and store
    sentence += String.fromCharCode(decValue);
    // Reset decimal value for next binary number.
    decValue = 0;
  }
  return sentence;
} //note: this solution is so convoluted, and tracks numbers
*/

/*
// Advanced Solution
function binaryAgent(str) {
  return String.fromCharCode(...str.split(' ').map(char => parseInt(char, 2)));
} //note: this is basically my solution... except uses the spread operator
//note: I used join('') after rather than spread on the new mapped array
//note: to be honest... this is a bit of magic since String is outside.
//note: I wonder how this is working really
*/

// Practice Session 2, 11//2018,  pm

// time:  pm
// debug time:  pm
function binaryAgent(str) {
  return str;
}

console.log(
  binaryAgent(
    '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
  )
); // "Aren't bonfires fun!?"
console.log(
  binaryAgent(
    '01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001'
  )
); // "I love FreeCodeCamp!"
