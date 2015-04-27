/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

/* Time complexity: O(n) */
var balancedParens = function(input) {
  // implement a stack
  var stack = [];
  var pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  var closing = {
    ')': true,
    ']': true,
    '}': true
  };

  // iterate through input characters
  for (var i = 0; i < input.length; i++) {
    var chr = input[i];
    // if opening paren, add to stack
    if( chr in pairs ){
      stack.push( pairs[chr] );
    // if closing paren, pop last paren from stack
    } else if( closing[chr] ) {
      // if doesn't matches, return false
      if( stack.pop() !==  chr ) return false;
    }
    // otherwise continue to next paren in input
  }

  // return true if all parens are poped
  if( stack.length === 0 ){
    return true;
  } else {
    return false;
  }
};