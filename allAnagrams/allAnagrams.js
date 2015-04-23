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
  var result = [];

  var recurse = function(currStrArr, currStr) {
    if(currStr.length === string.length) {
      return result.push(currStr);
    }

    for(var i = 0; i < currStrArr.length; i++) {
      recurse(currStrArr.slice(0,i) + currStrArr.slice(i + 1), currStr + string[i]);
    }
  };

  recurse(string, "");

  return result;
};
