/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/


var evenOccurrence = function(arr) {
  var occurrence = {};
  var result = [];
  
  for (var i = 0; i < arr.length; i++) {
    if( occurrence[ arr[i] ] === undefined ){
      occurrence[ arr[i] ] = [i, 1];
    // if element already present, increase counter
    } else {
      occurrence[ arr[i] ][1] += 1;
    }
  }


  var minIdx = Number.POSITIVE_INFINITY;
  var tempOcc = null;

  for(key in occurrence){
    if( occurrence[key][1] % 2 === 0 ){
      if( occurrence[key][0] < minIdx ){
        minIdx = occurrence[key][0];
        tempOcc = parseInt(key);
      }
    }
  }

  return tempOcc;
};
