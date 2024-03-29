/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 * 
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

// set array from arguments
  // return pop last element and return it
    // take last element
    // run it with the memorized item
    // continue until args is empty
    // return the current function ran with 'accumulated' one
      
'use strict';

var compose = function(){
  // set array from arguments
  var args = Array.prototype.slice.call(arguments);
  
  return function( val ){
    // return pop last element and return it
    return args.reduceRight( function(memo, current){
      // return the current function ran with 'accumulated' one
      return current(memo);
    }, val );
  };
};

var pipe = function(){
  var args = Array.prototype.slice.call(arguments);
  
  return function( val ){
    return args.reduce( function(memo, current){
      return current(memo);
    }, val );
  };
};
