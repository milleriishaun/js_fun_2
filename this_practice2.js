// Q: Create a function called spacify that makes spaces between letters.
function spacify(str) {
  return str.split('').join(' ');
}
console.log(spacify('hello world'));

// Q: Place the spacify function directly on the String object.
String.prototype.spacify = function() {
  return this.split('').join(' ');
};
console.log('hello world'.spacify());

// Q: Difference between a function expression and a function declaration.
// A function declaration is hoisted before any other code runs, and accessible
// to a call anywhere in the program.
// A function expression is not hoisted, and is a function stored in a variable.

// Q: Given:
// Code:
// log('hello world');
// , define log so that it proxies its string argument to console.log().
function log(msg) {
  console.log(msg);
}
log('hello world');

//  Q: log is now called while passing in multiple arguments. I expect that
// log will take multiple arguments, not just 2.
// sample call:
// log('hello', 'world');
function log() {
  console.log.apply(console, arguments);
}
log('hello', 'world');

// Q: Prefix all console logs with '(app)'. For example, '(app) hello world'.
function log() {
  let args = Array.prototype.slice.call(arguments);
  args.unshift('(app)');
  console.log.apply(console, args);
}
log('hello', 'world');

// Q: Given the following code,
// var User = {
//   count: 1,
//   getCount: function() {
//     return this.count;
//   }
// }
//
// console.log(User.getCount())
// var func =  User.getCount;
// console.log(func());
// , what will be logged?
// Answer: 1 and undefined. Undefined because func gets the window context(so
// it loses its 'count' property), and not the context of the User object.
//
// Q: How could we ensure  the context of 'func' was always bound to 'User',
// so that it would always return 1?
//
var User3 = {
  count: 1,
  getCount: function() {
    return this.count;
  }
};

console.log(User3.getCount());
var func = User3.getCount.bind(User3);
console.log(func());

// Q: This function is not available for older browsers, please shim it.
Function.prototype.bind =
  Function.prototype.bind ||
  function(context) {
    let self = this;
    return function() {
      return self.apply(context, arguments);
    };
  };
