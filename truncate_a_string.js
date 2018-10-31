/*
// my initial solution
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
*/

/*
// Basic solution //broken solution... doesn't work correctly
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, num - 3) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}
*/

/*
// Advanced solution... my solution was actually more elegant
// fails the FCC tests
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
    //note: this is called the Conditional(ternary) Operator
  }
}
*/

// Practice Session 1 10/30/2018 2:00pm

/*
// time: 15 mins // the num conditional was from what I remembered alone...
// debug time: 0 mins. 10/30/2018 2:46pm
function truncateString(str, num) {
  if (str.slice(0, str.length).length <= num) {
    return str;
  }
  if (str.slice(0, str.length) > num && num <= 3) {
    return str.slice(0, str.length) + '...';
  }
  if (str.slice(0, str.length).length > num) {
    return str.slice(0, num) + '...';
  }
}
*/

/*
// time: 20 mins // the num conditional was from what I remembered alone...
// debug time: 20 mins. 10/30/2018 3:11pm
function truncateString(str, num) {
  return num <= 3
    ? str.slice(0, num) + '...'
    : str.length <= num
      ? str
      : str.slice(0, num) + '...';
}
*/

/*
// time: 20 mins 10/30/2018 3:25pm
// debug time: 20 mins // b/c of confusion between slice/compare operator.
// working Advanced solution(original failed FCC)
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num) + '...';
  }
}
*/

// Practice Session 2 (insert time)
function truncateString(str, num) {
  return str;
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8)); //"A-tisket..."
console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11)); //"Peter Piper..."
console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  )
); //"A-tisket a-tasket A green and yellow basket"
console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length + 2
  )
); //"A-tisket a-tasket A green and yellow basket"
console.log(truncateString('A-', 1)); //"A..."
console.log(truncateString('Absolutely Longer', 2)); //"Ab..."
