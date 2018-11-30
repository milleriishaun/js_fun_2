// my initial solution, 11/08/2018, 4:48pm
// fail... lost track... but found track again... now fixed
// created my very own Sieve of Eratosthenes! woot!
function sumPrimes(num) {
  let arr = [];
  function isPrime(val) {
    let i = 0;
    let count = 0;
    while (i++ < val) {
      if (val % i === 0) {
        count++;
      }
      if (count > 2) {
        return false;
      }
    }
    return true;
  }
  for (let j = 2; j <= num; j++) {
    if (isPrime(j)) {
      arr.push(j);
    }
  }
  return arr.reduce((a, b) => a + b);
}

/*
// Basic Solution... though, this is not basic or easy to follow
function sumPrimes(num) {
  var res = 0;
  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  }
  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }
  return res;
}

// Code Explanation:
// Create a function that generates the numbers from 1 to num and check
// if they are prime along the way.
// Declare the variables that will be needed.
// Start with 2, if it has not been marked and added to the sieve array
// then it is a prime and we add it to the prime array.
// Add the others to the sieve array.
// Return the primes
// Loop through the returned array and add all the elements to then return
// the final value.
*/

/*
// Intermediate Solution
function sumPrimes(num) {
  // function to check if the number presented is prime
  function isPrime(number) {
    for (i = 2; i <= number; i++) {
      if (number % i === 0 && number != i) {
        // return true if it is divisible by any number that is not itself.
        return false;
      }
    }
    // if it passes the for loops conditions it is a prime
    return true;
  }
  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if (num === 1) {
    return 0;
  }
  // Check if your number is not prime
  if (isPrime(num) === false) {
    // for non primes check the next number down from your maximum
    // number, do not add anything to your answer
    return sumPrimes(num - 1);
  }
  // Check if your number is prime
  if (isPrime(num) === true) {
    // for primes add that number to the next number in the sequence
    // through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
} //note: I like this because the sum is recursive, and handles ends.
*/

/*
// Advanced Solution
function sumPrimes(num) {
  // step 1
  let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
  // this array initializing formula is really useful and interesting!
  console.log(arr);
  // step 2
  let onlyPrimes = arr.filter(n => {
    let m = n - 1;
    while (m > 1 && m >= Math.sqrt(n)) {
      if (n % m === 0) return false;
      m--;
    }
    return true;
  });
  // step 3
  return onlyPrimes.reduce((a, b) => a + b);
} //note: this one is quite advanced... bit hard to practice since it
//note: uses the Sieve of Eratosthenes algorithm. Filter out the ones
//note: that their -1 is greater than their sqrt... since means prime.

// Code Explanation:
// Step 1: Use Array.from() to generate a sequence of numbers up to and
// including num. Combine with .slice() to slice off first two
// indices [0, 1] since all prime numbers must be greater than 1.
// Step 2: Filter all numbers off of arr that are not prime by subjecting
// each element to the “trial division test” which “consists of dividing n
// by each integer m that is greater than 1 and less than or equal to the
// square root of n”. This test returns false if any number less than the
// element being operated on (m) produces no remainder when said element (n)
// is divided by it. See link below for more on this.
// Step 3: Return the sum of all remaining elements of arr using .reduce().
*/

// Practice Session 2, 11//2018,  pm

// time:  mins
// debug time:  mins
// function sumPrimes(num) {
//   return;
// }

console.log(sumPrimes(10)); // 17
console.log(sumPrimes(977)); // 73156
