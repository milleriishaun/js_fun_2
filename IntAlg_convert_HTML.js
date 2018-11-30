/*
// my initial solution 1
function convertHTML(str) {
  // &colon;&rpar;
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '&') {
      arr[i] = '&​amp;';
    }
    if (arr[i] === '<') {
      arr[i] = '&​lt;';
    }
    if (arr[i] === '>') {
      arr[i] = '&​gt;';
    }
    if (arr[i] === '"') {
      arr[i] = '&​quot;';
    }
    if (arr[i] === `'`) {
      arr[i] = '&​apos;';
    }
  }
  return arr.join('');
} // for some reason, solution looks right but doesn't pass; I think the tests are borked
*/

/*
// Basic Solution
function convertHTML(str) {
  // Split by character to avoid problems.
  var temp = str.split('');
  // Since we are only checking for a few HTML elements I used a switch
  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = '&apos;';
        break;
    }
  }

  temp = temp.join('');
  return temp;
}
*/

/*
// Intermediate Solution
function convertHTML(str) {
  //Chaining of replace method with different arguments
  str = str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
  return str;
}
*/

/*
// Advanced Solution
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split('')
    .map(entity => htmlEntities[entity] || entity)
    .join('');
}
*/

// my initial solution 2 // not sure how useful this solution is...

// Practice Session 2
// time:  pm
// debug time:  pm
function convertHTML(str) {
  // &colon;&rpar;
  return;
}

console.log(convertHTML('Dolce & Gabbana')); //Dolce &​amp; Gabbana
console.log(convertHTML('Hamburgers < Pizza < Tacos')); // Hamburgers &​lt; Pizza &​lt; Tacos
console.log(convertHTML('Sixty > twelve')); //Sixty &​gt; twelve
console.log(convertHTML('Stuff in "quotation marks"')); //Stuff in &​quot;quotation marks&​quot;
console.log(convertHTML("Schindler's List")); // Schindler&​apos;s List
console.log(convertHTML('<>')); //&​lt;&​gt;
console.log(convertHTML('abc')); //abc
