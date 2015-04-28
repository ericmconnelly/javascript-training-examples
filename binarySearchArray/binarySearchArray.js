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
    if( high === low || array.length === 1) return null;
    if( array.length === 1 && target > array.length ) return null;
    
    var mid = Math.floor((high - low)/2) + low;

    // if target found, return index
    if( array[mid] === target ){
      return mid;

    // if not, recurse on corresponding side
    } else if( array[mid] > target ){
      return recurse( low, mid );

    } else {
      return recurse( mid, high );
    }
  };

  return recurse(0, array.length);
};