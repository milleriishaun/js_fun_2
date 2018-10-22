// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // Add your code below this line
  this.forEach(function(a) {
    if (a === "true") {
      newArray.push(callback(a));
    }
    return newArray;
  }
  // Add your code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);

// new_s should equal [23, 65, 5].
