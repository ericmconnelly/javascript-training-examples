/*
given a sorted array, find the index of an element
using a binary search algorithm.

Test for linear vs binary by applying a data set that
exhibits the desired characteristics.
*/

/**
 * example usage
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
**/

var binarySearch = function(array, target) {

  var recurse = function(low, high){
    // if low is also high, then index isn't found
    if( low === high ){ return null; }

    var mid = Math.floor( (high - low)/2 + low );

    console.log( low, mid, high );

    // if target found, return index
    if( array[mid] === target ){
      return mid;
    // if not, recurse on corresponding side
    } else if( array[mid] > target ){
      console.log('left');
      recurse( low, mid );
    } else {
      console.log('right');
      recurse( mid, high );
    }
  };

  return recurse(0, array.length);
};