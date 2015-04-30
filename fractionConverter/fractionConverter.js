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
  
  var reduce = function(numerator, denominator){
    var lowest = Math.min(numerator, denominator);

    for( var i = lowest; i > 0; i-- ){
      if( i > numerator || i > denominator){
        return [numerator, denominator];
      }
      if( numerator % i === 0 && denominator % i === 0){
        numerator /= i;
        denominator /= i;
      }
    }

    return [numerator, denominator];
  };

  var str = '' + number;
  var strSplit = str.split('.');
  var isNegative = strSplit[0][0] === '-';
  var denominator;
 
  if( strSplit[1] ){
    denominator = Math.pow(10, strSplit[1].length)
  } else {
    denominator = 1;
  }
  var numerator = Math.round( Math.abs(number) * denominator );

  // add '-' if negative
  return ( isNegative ? '-' : '' ) + reduce( numerator, denominator ).join('/');
};
