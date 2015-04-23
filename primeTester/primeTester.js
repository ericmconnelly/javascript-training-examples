/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {

};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {

};

var crossOff = function(flags, prime, end){
  // Start with prime * prime, because for k * prime, where k < prime,
  // this value would would have already been crossed off in previous iteration.
  for(var j=prime * prime;j<=end;j+=prime){
    flags[j] = false;
  }
};

var getNextPrime = function(flags, prime, end){
  var next = prime + 1;
  while (next <= end && !flags[next]){
    next++;
  }

  return next;
};


