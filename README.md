# Dice Pig! (Aka Pig Dice, The Game)

#### Contributers: Kristen Hopper <hopperdavis@gmail.com>, Brad Prettyman <brad.prettyman5@gmail.com>, Kevin Funez <kevin.funez315@gmail.com>, Ben Dunham <bendunhampdx@gmail.com>, Dave Lindqvist <lindqvist.dave@gmail.com>

## Description:

This is a game created using HTML, CSS, jQuery/Javascript. Purpose of the game is to get to 100 points. If a player rolls a 1, then their turn-score is reset and it becomes the next player's turn.

Have fun!

#

Describe: rollDice();

Test: "It will generate a random number between 1-6"
Code: rollDice();
Expected Result: Random number between 1-6

Describe: Player#(name, counter)

Test: "It will create a Player# object with name and counter."
Code: Player#("Pliers", 0)
Expected Result:
Player# {playerName: "pliers", player#Counter: 0}

Describe: Player#.prototype.addDiceCount()

Test: "It will add the dice rolls"
Code:player#.addDiceCount
Expected Result:
Player# {playerName: "pliers", player#Counter: 3
Player# {playerName: "pliers", player#Counter: 7}

NOTE: '#' is the respective player (e.g, Player1, Player2)

Describe: Player#.prototype.addDiceCount()

Test: "It will push the dice rolls into an array"
Code:player#.addDiceCount
Expected Result:
Player# {playerName: "pliers", player#Counter: [3,1,2,3]}
NOTE: '#' is the respective player (e.g, Player1, Player2)
