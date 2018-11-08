// my initial solution
function sumPrimes(num) {
  // find all the prime numbers and store them in an array
  let arr = [1, num];
  function isPrime(val) {
    let i = 0;
    let count = 0;
    while (i++ < val) {
      if (val % i === 0) {
        count++;
      }
      if (count > 1) {
        return false;
      }
    }
    return true;
  }
  for (let i = 1; i < num; i++) {
    // use a method to find the primes
    if (isPrime(i)) {
      console.log('i:', i);
      arr.push(i);
    }
  }
  // sum all the values in the array to get the final value
  // return arr.reduce((a, b) => a + b);
  return arr;
}

console.log(sumPrimes(10)); // 17
// console.log(sumPrimes(977)); // 73156
