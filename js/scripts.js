function Player1() {
  this.player1TotalCount = 0,
  this.player1TurnCount = 0,
  this.player1DiceRoll = 0
}

Player1.prototype.hold = function() {
  if (this.hold) {
  this.player1TotalCount += this.player1TurnCount;
  this.player1TurnCount = 0;
  console.log(this.player1TotalCount);
  }
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
        this.player1DiceRoll = 1;    
        console.log(this.player1TurnCount);
        break;
    case (2):
      this.player1TurnCount += 2;
      this.player1DiceRoll = 2
      break;
    case (3):
      this.player1TurnCount += 3;
      this.player1DiceRoll = 3
      break;
    case (4):
      this.player1TurnCount += 4;
      this.player1DiceRoll = 4
      break;
    case (5):
      this.player1TurnCount += 5;
      this.player1DiceRoll = 5
      break;
    case (6):
      this.player1TurnCount += 6;
      this.player1DiceRoll = 6
      break;
    }
  }

Player2.prototype.hold = function() {
  if (this.hold) {
  this.player2TotalCount += this.player2TurnCount;
  this.player2TurnCount = 0;
  console.log(this.player2TotalCount);
  }
}
function Player2() {
  this.player2TotalCount = 0,
  this.player2TurnCount = 0
  this.player2DiceRoll = 0
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
      this.player2DiceRoll = 1    
      console.log(this.player2TurnCount);
      break;
    case (2):
      this.player2TurnCount += 2;
      this.player2DiceRoll = 2
      break;
    case (3):
      this.player2TurnCount += 3;
      this.player2DiceRoll = 3
      break;
    case (4):
      this.player2TurnCount += 4;
      this.player2DiceRoll = 4
      break;
    case (5):
      this.player2TurnCount += 5;
      this.player2DiceRoll = 5
      break;
    case (6):
      this.player2TurnCount += 6;
      this.player2DiceRoll = 6
      break;
    }
  }

//UI Logic
let player1 = new Player1()
let player2 = new Player2()

$(document).ready(function() {
  
  $("button#roll-1").click(function() {
    this.player1DiceRoll = player1.addDiceCount();
    console.log(player1.player1TurnCount);
    $("#turn-total-1").html(player1.player1TurnCount);
    $("#current-roll-1").html(player1.player1DiceRoll);
  });

  $("button#hold-1").click(function() {
    player1.hold();
    $("#score-total-1").html(player1.player1TotalCount);
    $("#roll-1").hide() //show #roll-2
  })
  
  $("button#roll-2").click(function() {
    this.player2DiceRoll = player2.addDiceCount();
    console.log(player2.player2TurnCount);
    $("#turn-total-2").html(player2.player2TurnCount);
    $("#current-roll-2").html(player2.player2DiceRoll);
  });
});

// disabling button: document.getElementById("myBtn").disabled = true; 
// perhaps inside the roll buttons with an "if" statement, when TotalCount >= 100; alert about winning + reset game

// co-authored-by: Kristen Hopper <hopperdavis@gmail.com>
// Co-authored-by: Brad Prettyman <brad.prettyman5@gmail.com>
// co-authored-by: Kevin Funez <kevin.funez315@gmail.com>
// co-authored-by: Ben Dunham <bendunhampdx@gmail.com>

//OBJECTS: Player1Counter{runningTotal, uniqueId}, Player2Counter{runningTotal, uniqueId}, gameMaster
//FUNCTIONS: holdCounter, rollDice, resetGame(maybe?), addZeroAtOne(skips turn without adding score), goodGame(when the person reaches to 100)
//TRIGGERS: Roll, Hold, Start, Reset
