//OBJECTS: Player1Counter{runningTotal, uniqueId}, Player2Counter{runningTotal, uniqueId}, gameMaster
//FUNCTIONS: holdCounter, rollDice, resetGame(maybe?), addZeroAtOne(skips turn without adding score), goodGame(when the person reaches to 100)
//TRIGGERS: Roll, Hold, Start, Reset


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

