/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing only the unique characters found in both strings, in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


var commonCharacters = function(string1, string2) {
  var common = {};
  var result = '';

  if( typeof string1 !== 'string' || typeof string1 !== 'string' ){
    return null;
  }

  for (var i = 0; i < string1.length; i++) {
    common[ string1[i] ] = 1;
  }

  for (var i = 0; i < string2.length; i++) {
    console.log(string2);
    
    if( common[ string2[i] ] ){
      common[ string2[i] ] += 1;
    }
  }


  for(chr in common){
    if( common[chr] > 1 ){
      result += chr;
    }
  }

  return result;
};
