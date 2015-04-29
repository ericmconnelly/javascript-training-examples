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


var commonCharacters = function() {
  var common = {};
  var result = '';

  // if( typeof string1 !== 'string' || typeof string1 !== 'string' ){
  //   return null;
  // }

  var insertChr = function(str){
    str = str.toLowerCase();
    var temp = {};

    for (var i = 0; i < str.length; i++) {
      var chr = str.charAt(i);

      if( common[ chr ] === undefined && chr !== ' ' ) common[ chr ] = 0;
      if( temp[ chr ] === undefined ) temp[ chr ] = 0;

      temp[ chr ]++;

      if( temp[ chr ] === 1 ) common[ chr ]++;
    }
  };

  for (var i = 0; i < arguments.length; i++) {
    insertChr( arguments[i] );
  }

  for(chr in common){
    if( common[chr] === arguments.length ){
      result += chr;
    }
  }

  return result;
};
