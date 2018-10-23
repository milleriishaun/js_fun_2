/*
// my initial solution
// fail time: 15 mins
// the global variable
var globalTitle = 'Winter Is Coming';
var globalTitle2 = ' Winter Is  Coming';

// Add your code below this line
function urlSlug(title) {
  return title
    .toLowerCase() // trim() would have worked here
    .split(/\s+/)
    .join('-');
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
var winterComing2 = urlSlug(globalTitle2); // Should be "winter-is-coming"
console.log(winterComing);
console.log(winterComing2);
*/

// FCC Solution1
// the global variable
var globalTitle = 'Winter Is Coming';
var globalTitle2 = ' Winter Is  Coming';

// Add your code below this line
function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(obj => {
      return obj !== ''; // this is interesting because split uses
      // empty strings to represent the spaces between words
    })
    .join('-')
    .toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
var winterComing2 = urlSlug(globalTitle2);
console.log(winterComing2);

/*
// FCC Solution2
// the global variable
var globalTitle = 'Winter Is Coming';
var globalTitle2 = ' Winter Is  Coming';

// Add your code below this line
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join('-');
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
var winterComing2 = urlSlug(globalTitle2);
console.log(winterComing2);
*/
