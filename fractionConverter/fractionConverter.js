/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // change number to string
  var str = '' + number;
  
  // set isNegative var number is negative
  var isNegative = ( str[0] === '-' ? true : false );
  
  // split at dot
  var strSplit = str.split('.');
  // change denominator into int, and multiply by 10 power of denom length
  var denom;

  if( parseInt( strSplit[1] ) > 0 ){
    denom = Math.pow(10, strSplit[1].length);
  } else {
    denom = 1;
  }

  // num = number * denom, rounded
  var num = Math.round( Math.abs(number) * denom );
  
  // reduce function takes numerator, denom
  var reduce = function( ){
    // set lowest between num || denom
    var lowest = Math.min( num, denom );
    // for-loop: decrement i while i > lowest of num || denom
    for( var i = lowest; i > 0; i-- ){
      // if i > num || i > denom
      if( i > num || i > denom ){
        // return [num, denom]
        return [num, denom];
      }
      // if num % i = 0 && denom % i = 0
      if( num % i === 0 && denom % i === 0 ){
        // num = num / i
        num /= i;
        // denom = denom / i
        denom /= i;
      }
    }

    // return [num, denom]
    return [num, denom];
  };


  // return array of numerator & denominator join with '/'
  return (isNegative ? '-' : '') + reduce( num, denom ).join('/');
};
