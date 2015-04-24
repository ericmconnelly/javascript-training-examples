/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   [["rock", "rock", "rock"],
 *    ["rock", "rock", "paper"],
 *    ["rock", "rock", "scissors"],
 *    ["rock", "paper", "rock"],
 ...etc...
 ]
 *
 * Extra credit:
 *   - Make your function return answers for any number of rounds.
 * Example:
 * rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
 *
 */

var rockPaperScissors = function (rounds) {
  var result = [];
  var rps = ["rock", "paper", "scissors"];

  var recurse = function(tempArray){
    // base case
    if (tempArray.length === rounds) {
      result.push(tempArray);
      return;
    }

    // iterate over each possible outcome
    for (var i = 0; i < rps.length; i++) {
      var copyArray = tempArray.slice();
      copyArray.push( rps[i] );
      recurse( copyArray );
    }

  };

  recurse([]);

  return result;
}
