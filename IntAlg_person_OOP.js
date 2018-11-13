// my first solution ... only need one
// time: 20 mins
// debug time: 40 mins
var Person = function(firstAndLast) {
  let fullName = firstAndLast;
  this.getFullName = function() {
    return fullName;
  };
  this.setFullName = function(name) {
    fullName = name;
  };
  this.getFirstName = function() {
    return fullName
      .split(' ')
      .slice(0, 1)
      .join('');
  };
  this.setFirstName = function(name) {
    fullName =
      name +
      ' ' +
      fullName
        .split(' ')
        .slice(1)
        .join('');
  };
  this.getLastName = function() {
    return fullName
      .split(' ')
      .slice(1)
      .join('');
  };
  this.setLastName = function(name) {
    fullName =
      fullName
        .split(' ')
        .slice(0, 1)
        .join('') +
      ' ' +
      name;
  };
}; //fail: I need practice

// Practice Session 2, 11//2018,  pm

// time:  mins
// debug time:  mins
var Person = function(firstAndLast) {
  this.getFullName = function() {
    return;
  };
};
