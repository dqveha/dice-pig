//OBJECTS: Player1Counter{runningTotal, uniqueId}, Player2Counter{runningTotal, uniqueId}, gameMaster
//FUNCTIONS: holdCounter, rollDice, resetGame(maybe?), addZeroAtOne(skips turn without adding score), goodGame(when the person reaches to 100)
//TRIGGERS: Roll, Hold, Start, Reset

// function GameMaster(player1, player2) {
//   this.players = {
//     1: {player1, runningTotal: 0},
//     2: {player2, runningTotal: 0},
//   };
// }

function Player1(playerName, player1Counter) {
  this.playerName = playerName,
  this.player1Counter = player1Counter
}


function rollDice(min, max) {
  let counter = 0;
  min = Math.ceil(min);
  max = Math.floor(max);
  counter = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(counter)
  //return counter
}

$(document).ready(function() {
  
});

// co-authored-by: Kristen Hopper <hopperdavis@gmail.com>
// Co-authored-by: Brad Prettyman <brad.prettyman5@gmail.com>
// co-authored-by: Kevin Funez <kevin.funez315@gmail.com>
// co-authored-by: Ben Dunham <bendunhampdx@gmail.com>