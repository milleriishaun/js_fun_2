/*
// my initial solution
function confirmEnding(str, target) {
  return str.slice(-target.length, str.length) === target ? true : false;
}
*/

// True
console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('Congratulation', 'on'));
console.log(confirmEnding('He has to give me a new name', 'name'));
console.log(confirmEnding('Open sesame', 'same'));
console.log(confirmEnding('Abstraction', 'action'));

// False
console.log(confirmEnding('Connor', 'n'));
console.log(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  )
);
console.log(confirmEnding('Open sesame', 'pen'));
console.log(confirmEnding('Open sesame', 'game'));
console.log(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  )
);

// Intermediate solution: Declarative approach
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
  //note: no need for ending argument since it defaults to end of string
  //note: no need for conditional since comparison returns true/false
}
