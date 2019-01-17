// 01/16/2019
function myobject() {
  this.value = 5;
}
myobject.prototype.add = function() {
  this.value++;
};
var o = new myobject();
console.dir(o.value); // o.value = 5
o.add();
console.dir(o.value); // o.value = 6
/*
function objectchanger(fnc) {
  fnc(); // runs the function being passed in
}
objectchanger(o.add);
console.dir(o.value); // sadly, the value is still 6
*/
/*
function objectchanger(fnc, obj) {
  fnc.call(obj); // runs the method of the object being passed in
  // essentially o.add.call(o)
}
objectchanger(o.add, o);
console.dir(o.value); // the value is now 7, woohoo
*/

//this also works with bind in this way
function objectchanger(fnc) {
  fnc(); // runs the function being passed in
}
objectchanger(o.add.bind(o));
console.dir(o.value); // value is 7
// extra benefit of using bind is that it can be called at a later time,
// as opposed to only immediately, as with call and apply.

/* Second Example of pass value or by reference */
// Q: Does JavaScript pass parameter by value or by reference?

// Answer: Primitive type (string, number, etc.) are passed by value
// and objects are passed by reference. If you change a property of
// the passed object, the change will be affected. However, you assign
// a new object to the passed object, the changes will not be reflected.

var num = 10,
  name = 'Addy Osmani',
  obj1 = {
    value: 'first value'
  },
  obj2 = {
    value: 'second value'
  },
  obj3 = obj2;

function change(num, name, obj1, obj2) {
  num = num * 10;
  name = 'Paul Irish';
  obj1 = obj2;
  obj2.value = 'new value';
}

change(num, name, obj1, obj2);

console.log(num); // 10
console.log(name); // "Addy Osmani"
console.log(obj1.value); //"first value"
console.log(obj2.value); //"new value"
console.log(obj3.value); //"new value"
