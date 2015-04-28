
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  var letters = {};
  var result = [];

  // edge case, not a string or empty string
  if (typeof string !== 'string' || !string.length) return [];

  // iterate through each letter in string
  for (var i = 0; i < string.length; i++) {
    var letter = string.substr(i, 1);

    // if letter isn't present add it to object
    if(!letters[letter]) letters[letter] = 0; 

    // Increment letter count
    letters[letter]++;
  }

  // convert object to array
  for(var letter in letters){
    result.push([ letter, letters[letter] ]);
  }

  // sort the result array
  result.sort(function( inputA, inputB ){
    if(inputB[1] === inputA[1]){
      return inputB[0] < inputA[0];
    } else {
      return inputB[1] - inputA[1];
    }
  });

  return result;
};

/*
 * Time complexity: O(2n log n)
 */