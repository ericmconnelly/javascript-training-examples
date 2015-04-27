/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

// O(n^3) time complexity
var allAnagrams = function(string) {
  var result = {};

  var recurse = function(newWord, remaining){
    // base case
    // add to result obj when newWord is length of given string
    if( newWord.length === string.length ){
      result[newWord] = true;
      return;
    }

    var newRemaining;

    // iterate over each letter
    for (var i = 0; i < remaining.length; i++) {
      newRemaining = remaining.slice(0,i) + remaining.slice(i+1);
      // recurse on remaining letters
      recurse( newWord + remaining.charAt(i), newRemaining );
    }
  };

  recurse('', string);

  // return result
  return Object.keys(result);
};
