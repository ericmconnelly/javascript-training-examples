/*

 In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

 1p piece
 2p piece
 5p piece
 10p piece
 20p piece
 50p piece
 1 euro (100p)
 2 euro (200p)

 It is possible to make £2 in the following way:

 1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
 How many different ways can £2 be made using any number of coins?

 example usage of `makeChange`:

 // aka, there's only one way to make 1p. that's with a single 1p piece
 makeChange(1) === 1
 // aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
 makeChange(2) === 2
 */

// Implementation 1: bad efficiency - takes 6443 ms for input of 500
/*
var makeChange = function(total) {
  var denominations = [1, 2, 5, 10, 20, 50, 100, 200];

  if( total === 0 ) return 1;
  var count = 0;

  var recurse = function(remain, start){
    for (var i = start; i < denominations.length; i++) {
      var change = remain - denominations[i];

      if( change < 0){
        return;
      }
      
      if( change === 0 ){
        return count++;
      }

      if( change > 0 ){
        recurse( change, i );
      }
    }
    
  };

  recurse(total, 0);

  return count;
};
*/

// Implementation 2:
var makeChange = function(total) {
  var count = 0;
  var denominations = [1, 2, 5, 10, 20, 50, 100, 200];

  var recurse = function(index, remain){
    
  }

  recurse( denominations.length-1, total);

  return count;
};



var timeTest = function(input){
  var start = new Date().getTime();
  
  var answer = makeChange(input);
  
  var end = new Date().getTime();

  var time = end - start;

  return ('The answer is ' + answer + ' and it took: ' + time + ' ms.');
};