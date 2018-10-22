/*
// my initial solution
// time: 1 hour // took a long time understanding filter/callback

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // Add your code below this line
  this.forEach(function(a) {
    if (a % 2 === 1) { // this code fails as solution since I use
      //my own filter condition statement... I should be using
      //the one that was given to me.
      newArray.push(a);
    }
  });
  // Add your code above this line
  return newArray;
};
// I should have noticed the variable "callback" was a function being passed through.
// Then I would have seen that there was something that was right with
// calling the callback(x) since x was the index given the filter condition.
var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);

// new_s should equal [23, 65, 5].
*/

/*
// Implement the filter method on a prototype Solution 1
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // Add your code below this line
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  // Add your code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);
*/

var s = [23, 65, 98, 5];
// Use Loop in Solution2
Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // Add your code below this line
  // This is different because of the loop... and b/c the use of
  // this[i]. I didn't know it was possible to use this until now.console
  // I thought you could only use the value this.somethingElse.
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  // Add your code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);
