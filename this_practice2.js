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

// Now, we play with classes and understanding prototype inheritance
var animalGroups = {
  MAMMAL: 1,
  REPTILE: 2,
  AMPHIBIAN: 3,
  INVERTEBRATE: 4
};
function Animal(name, type) {
  this.name = name;
  this.type = type;
}
var dog = new Animal('dog', animalGroups.MAMMAL);
var crocodile = new Animal('crocodile', animalGroups.REPTILE);

Animal.prototype.shout = function() {
  console.log(this.name + 'is ' + this.sound + 'ing...');
};

function Dog(name, type) {
  Animal.call(this, name, type);
  this.sound = 'bow';
}

// var pet = Dog('germanShepard', animalGroups.MAMMAL);
// console.log(pet); // returns Dog {name: "germanShepard", type: 1, sound: "bow"}
// console.log(pet.shout()); // error

// Link prototype chains(add class's prototype = Object.create(parent prototype))
// (also, use 'new' in creating the instance of the class you're interested in)
Dog.prototype = Object.create(Animal.prototype);
var pet = new Dog('germanShepard', animalGroups.MAMMAL);
// Now shout method is available
pet.shout(); // germanShepard is bowing... (now, no error)
console.log(pet.constructor); // returns [Function: Animal]
console.log(Dog.prototype.constructor); // returns [Function: Animal]
Dog.prototype.constructor = Dog; //Always set child class constructor to
// itself for getting the right identity of its objects
console.log(pet.constructor); // returns [Function: Dog]
console.log(Dog.prototype.constructor); // returns [Function: Dog]
console.log(pet.hasOwnProperty(animalGroups.MAMMAL));
console.log(pet.hasOwnProperty(animalGroups));
console.log(pet.type);
console.log(pet['type']);
for (let prop in pet) {
  console.log('property:', prop);
}

let fruit = {
  f1: 'apple',
  f2: 'orange',
  f3: 'banana',
  f4: 'cherry',
  f5: 'pomegranate'
};

function Sugar(name, flavor) {
  this.name = name;
  this.flavor = flavor;
}

Sugar.prototype.label = function() {
  console.log(
    this.name + 'is a ' + this.flavor + ' flavored ' + this.sweet + '!'
  );
};

function Candy(type, name) {
  Sugar.call(this, name, type);
  this.sweet = 'candy';
}

//Link the prototypes
Candy.prototype = Object.call(Sugar.prototype);
let edibleSugar = new Candy('JollyRancher', fruit.f1);
console.log(edibleSugar.label);
console.log(edibleSugar);
