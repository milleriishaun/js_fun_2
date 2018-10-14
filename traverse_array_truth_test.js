/*

// my initial solution
// time: 20 mins.
function findElement(arr, func) {
  let num = 0;
  let truthArr = arr.map(func); //trip: idk how to use func arrow
  let i = 0;
  while (i < truthArr.length) {
    if (truthArr[i] === true) {
      return arr[i];
    }
    i++;
  }
  return undefined;
}
//note: this solution feels very bloated
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
*/

/*
// This is something interesting about the function arrow:
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element ) {
  return element.length;
}); // [8, 6, 7, 9]

elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

elements.map(element => element.length); // [8, 6, 7, 9]

elements.map(({ length }) => length); // [8, 6, 7, 9], especially interesting.
*/

/*
// This example is interesting too, since it describes how 'this' ought to be
function Person() {
  this.age = 0;

  setInterval(() => {
    // remember that setInterval used to refer to the 'this' in
    // global scope rather than the 'this' in Person object(ES5)
    // But the usage here refers to ES6 fix.
    this.age++; // |this| properly refers to the Person object
  }, 1000);
}

var p = new Person();
*/

// my solution 2
// time: 20 mins. This solution was more concise.
function findElement(arr, func) {
  let even = arr.filter(func); //trip: don't forget to define variable
  return even[0] ? even[0] : undefined;
}
//note: this solution feels very bloated
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// Basic solution
function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
