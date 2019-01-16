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
function objectchanger(fnc, obj) {
  fnc.call(obj); // runs the method of the object being passed in
  // essentially o.add.call(o)
}
objectchanger(o.add, o);
console.dir(o.value); // the value is now 7, woohoo
