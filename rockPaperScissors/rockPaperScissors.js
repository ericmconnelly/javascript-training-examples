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

var rockPaperScissors = function( rounds ){
  var rps = ['rock', 'paper', 'scissors'];
  // create a result array
  result = [];
  rounds = rounds || 3;


  var recurse = function(recurseIdx, turn){
    var turn = turn || [];

    // base case
    if( recurseIdx === rounds ){
      result.push(turn);
      return;
    }

    for (var i = 0; i < rps.length; i++) {
      turn.push(rps[i]);
      recurse(recurseIdx+1, turn);
    }
  };
  
  recurse(0);

  return result;
};
