function Player1() {
  this.player1TotalCount = 0,
  this.player1TurnCount = 0,
  this.player1DiceRoll = 0
}

Player1.prototype.newGame = function() {
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
      player1.hold();
      $("#roll-1").hide();
      $("#hold-1").hide();
      $("#hold-2").show();
      $("#roll-2").show();
      $("#roll1").hide();
      $("#roll2").show();
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

function Player2() {
  this.player2TotalCount = 0,
  this.player2TurnCount = 0
  this.player2DiceRoll = 0
}

Player2.prototype.newGame = function() {
  this.player2TotalCount = 0,
  this.player2TurnCount = 0,
  this.player2DiceRoll = 0
}

Player2.prototype.hold = function() {
  if (this.hold) {
  this.player2TotalCount += this.player2TurnCount;
  this.player2TurnCount = 0;
  console.log(this.player2TotalCount);
  }
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
      player2.hold();
        $("#roll-2").hide();
        $("#hold-2").hide();
        $("#hold-1").show();
        $("#roll-1").show(); 
        $("#roll2").hide(); 
        $("#roll1").show();
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
    $("#turn-total-1").html(player1.player1TurnCount);
    $("#current-roll-1").html(player1.player1DiceRoll);
    if ((player1.player1TotalCount + player1.player1TurnCount) >= 100) {
      alert("Player 1 wins!")
      player1.newGame();
      player2.newGame();};
  });

  $("button#hold-1").click(function() {
    player1.hold();
    $("#score-total-1").html(player1.player1TotalCount);
    $("#roll-1").hide();
    $("#hold-1").hide();
    $("#roll-2").show();
    $("#hold-2").show();
    $("#roll1").hide();
    $("#roll2").show();
  })
  
  $("button#roll-2").click(function() {
    this.player2DiceRoll = player2.addDiceCount();
    $("#turn-total-2").html(player2.player2TurnCount);
    $("#current-roll-2").html(player2.player2DiceRoll);
    if ((player2.player1TotalCount + player2.player1TurnCount) >= 100) {
      alert("Player 2 wins!")
      player1.newGame();
      player2.newGame();};
  });
  
  $("button#hold-2").click(function() {
    player2.hold();
    $("#score-total-2").html(player2.player2TotalCount);
    $("#roll-2").hide();
    $("#hold-2").hide();
    $("#roll-1").show();
    $("#hold-1").show();
    $("#roll2").hide(); 
    $("#roll1").show();
  })
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
