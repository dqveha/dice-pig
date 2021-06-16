function Player1(playerName, count1, count2) {
  this.playerName = playerName,
  this.player1TotalCount = count1
  this.player1TurnCount = count2
}

Player1.prototype.rollDice = function() {
  let counter = 0;
  min = Math.ceil(1);
  max = Math.floor(6);
  counter = Math.floor(Math.random() * (max - min + 1) + min);
  return counter
}

Player1.prototype.addDiceCount = function() {
  switch (this.rollDice()) {
    case (1):
        this.player1TurnCount = 0;    
        console.log(this.player1TurnCount);
        break;
    case (2):
      this.player1TurnCount += 2;
      break;
    case (3):
      this.player1TurnCount += 3;
      break;
    case (4):
      this.player1TurnCount += 4;
      break;
    case (5):
      this.player1TurnCount += 5;
      break;
    case (6):
      this.player1TurnCount += 6;
      break;
    }
  }

Player2.prototype.hold = function() {
  if (this.hold) {
  this.player2TotalCount += this.player2TurnCount;
  console.log(this.player2TotalCount);
  }
}
function Player2(playerName, count1, count2) {
  this.playerName = playerName,
  this.player2TotalCount = count1
  this.player2TurnCount = count2
}

Player2.prototype.rollDice = function() {
  let counter = 0;
  min = Math.ceil(1);
  max = Math.floor(6);
  counter = Math.floor(Math.random() * (max - min + 1) + min);
  return counter
}

Player2.prototype.addDiceCount = function() {
  switch (this.rollDice()) {
    case (1):
        this.player2TurnCount = 0;    
        console.log(this.player2TurnCount);
        break;
    case (2):
      this.player2TurnCount += 2;
      break;
    case (3):
      this.player2TurnCount += 3;
      break;
    case (4):
      this.player2TurnCount += 4;
      break;
    case (5):
      this.player2TurnCount += 5;
      break;
    case (6):
      this.player2TurnCount += 6;
      break;
    }
  }

Player2.prototype.hold = function() {
  if (this.hold) {
  this.player2TotalCount += this.player2TurnCount;
  console.log(this.player2TotalCount);
  }
}
$(document).ready(function() {
  
});

// co-authored-by: Kristen Hopper <hopperdavis@gmail.com>
// Co-authored-by: Brad Prettyman <brad.prettyman5@gmail.com>
// co-authored-by: Kevin Funez <kevin.funez315@gmail.com>
// co-authored-by: Ben Dunham <bendunhampdx@gmail.com>

//OBJECTS: Player1Counter{runningTotal, uniqueId}, Player2Counter{runningTotal, uniqueId}, gameMaster
//FUNCTIONS: holdCounter, rollDice, resetGame(maybe?), addZeroAtOne(skips turn without adding score), goodGame(when the person reaches to 100)
//TRIGGERS: Roll, Hold, Start, Reset
