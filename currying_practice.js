// Currying example:
// Here’s a simple example. We’ll write a function sum3 takes three numbers
// and returns their sum.

function sum3(x, y, z) {
  return x + y + z;
}
console.log(sum3(1, 2, 3)); // 6
// The curried version of sum3 behaves a differently. It accepts one
// argument and returns one function. The returned function also accepts
// one argument and also returns another function that also accepts one
// argument and …

// This cycle continues until the returned function accepts the last
// argument. The last one in the chain, finally returns the sum.

function sumThree(x) {
  return y => {
    return z => {
      return x + y + z;
    };
  };
}
// console.log(sumThree(1)(2)(3)); // 6
// This works because JS supports closures.

// Practice...
// Regular function:
function div3(x, y, z, z1) {
  return (x + y + z) / z1;
}
console.log(div3(1, 2, 3, 3));

// Curried function:
function div3c(x) {
  return y => {
    return z => {
      return z1 => {
        return (x + y + z) / z1;
      };
    };
  };
}
console.log(div3c(1)(2)(3)(3));

// This works because JS supports closures.
// closure: the combination of a function and the lexical environment
// within which that function was declared. -MDN

// General curry:
// Writing one curried function is all fine and dandy, but this can become
// a real chore when writing multiple functions. We need a more general
// approach.

// In most functional languages, like haskell, all we have to do is define
// the function and it gets curried automagically.

// We can’t rewrite the JS engine to curry-ify all functions, but we
// can come up with a strategy to do so.

// The Strategy:
// Examining the two forms of sum3 reveals that the actual function body
// from the plain function is moved as-is into the last function in the
// chain. Before we reach the last level, we won’t have all the arguments
// in the execution scope.

// This means that we can create a wrapper function that collects the
// arguments and passes them to the real function. All the intermediate
// nested functions are called accumulator functions — at least that’s what
// I call them.
/* function curry(fn) {
  return x => {
    return y => {
      return z => {
        return fn(x, y, z);
      };
    };
  };
}
const sumCurry3 = curry((x, y, z) => {
  return x + y + z;
});
console.log(sumCurry3(1)(2)(3)); */

// All we need now different arity curry functions, each of a different arity:
// 0 arguments, 1 argument, 2 arguments and so on …

// .. tutorial continues... but better move on.
// There are better things thta I should be working on.

// ...
// ...

// Another tutorial:

// Regular function for cylinder:
function volume1(l, w, h) {
  return l * w * h;
}

// Cylinder curried function example:
function volume2(h) {
  return w => {
    return l => {
      return l * w * h;
    };
  };
}

// General curry function(for most currying cases):
function curry(fn, ...args) {
  return (..._arg) => {
    return fn(...args, ..._arg);
  };
}

// General curry function applied:
function volume3(l, h, w) {
  return l * h * w;
}
const hCy = curry(volume3, 100);
console.log(hCy(200, 900)); // 18000000l
console.log(hCy(70, 60)); // 420000l

// Conclusion:
// Closure makes currying possible in JavaScript. It’s ability to retain
// the state of functions already executed, gives us the ability to create
// factory🏭 functions — functions that can add a specific value to their
// argument.

// It is quite tricky to wrap your head around currying, closures and
// functional programming. But I assure you with time⌚ and constant
// practice🏪, you will start to get the hang of it and see how worthwhile
// it is 😘.

function currying(base) {
  return function(num) {
    return num + base;
  };
}
let a = currying(30);
console.log(a(20));
console.log(a(10));
console.log(a(5));

function generator(input) {
  let index = 0;
  return {
    food: 'cake',
    next: function() {
      if (index < input.length) {
        index++;
        return input[index - 1];
      }
      return '';
    }
  };
}
var text = generator('brownie');
console.log(text.next());
console.log(text.next());
console.log(text.next());

text = generator('cookie');
console.log(text.next());
console.log(text.next());
console.log(text.next());
console.log(text.hasOwnProperty('food')); //true
console.log(text instanceof generator); //false... maybe because no constructor
console.log('text instanceof generator: ', !(text instanceof generator)); //true... for some reason
console.log(text instanceof Object); //true
console.log(Object.getPrototypeOf(generator)); //[Function]
console.log(generator.prototype); //generator ()

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var newCar = new Car('Honda', 'City', 2007);
console.log(newCar instanceof Car); //true
console.log(newCar instanceof Object); //true

// this deals with an object, rather than a function
var marks = { physics: 98, maths: 95, chemistry: 91 };
finalizedMarks = Object.freeze(marks);
finalizedMarks['physics'] = 86; // throws error in strict mode
console.log(marks); // {physics: 98, maths: 95, chemistry: 91}
console.log(Object.isFrozen(marks));

var marks = { physics: 98, maths: 95, chemistry: 91 };
Object.seal(marks);
delete marks.chemistry; // returns false as operation failed
marks.physics = 95; // Works!
console.log(marks);
marks.greek = 86; // Will not add a new property
console.log(marks);
console.log(Object.isSealed(marks)); // returns true
