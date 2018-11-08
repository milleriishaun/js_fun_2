// my initial solution
function sumFibs(num) {
  function fib2(val) {
    if (val <= 1) {
      return 1;
    }
    return fib2(val - 2) + fib2(val - 1);
  }
  arr = fib2(num);
  return arr;
  // return arr.filter(item => item % 2 !== 0).reduce((a, b) => {
  //   return a + b;
  // }, 0);
}

// console.log(sumFibs(1)); //a number
console.log(sumFibs(1000)); //1785
// console.log(sumFibs(4000000)); //4613732
// console.log(sumFibs(4)); //5
// console.log(sumFibs(75024)); //60696
// console.log(sumFibs(75025)); //135721
