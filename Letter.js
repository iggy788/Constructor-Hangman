

// • An array of new Letter objects representing the letters of the underlying word
// • A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// • A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

// Letter.js should not require any other files.
//-------------------------------------------------------------
// dependency for inquirer npm package
var inquirer = require('inquirer');
// dependency for prompt npm package
var prompt = require('prompt');
//-------------------------------------------------------------
// Creates a UserSearch Constructor
var Letter = function () {
	this.letter = letter; // String
	this.guessed = false; // Boolean
	// first method that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.feed = function() {
        if (this.hungry === true) {
            console.log('-----------------------');
            console.log('That was yummy!');
        } else {
            console.log('-----------------------');
            console.log('No thanks! I\'m full.');
        }
    };
	// second method that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.increaseAge = function() {
        if (this.sleepy === true) {
            this.age++; //Integer
            console.log('-----------------------');
            console.log('Happy Birthday to me! I am ' + this.age + ' old!');
        } else {
            return false;
        }
    };
};
//-------------------------------------------------------------
// Set Variables
var wordList = ['ron', 'ben', 'tom', 'april', 'andy', 'leslie', 'ann', 'donna'];
var chosenWord = '';
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
//-------------------------------------------------------------
// Recursive function which will allow the user to start game and then will generate random word and print correlating _ _ _ dashes for randomly word
var startGame = function() {
  // if the length of the team array is 8 or higher, no more questions will be asked
  if (starters.length + subs.length < 8) {
    console.log("\nNEW PLAYER!\n");
    inquirer.prompt([
      {
        name: "name",
        message: "Player's Name: "
      }, {
        name: "position",
        message: "Player's position: "
      }, {
        name: "offense",
        message: "Player's Offensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }, {
        name: "defense",
        message: "Player's Defensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }
    ]).then(function(answers) {
      // runs the constructor and places the new player object into the variable player.
      // turns the offense and defense variables into integers as well with parseInt
      var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
      // adds a player to the starters array if there are less than five player objects in it.
      // otherwise adds the newest player object to the subs array
      if (starters.length < 5) {
        starters.push(player);
        team.push(player);
        console.log(player.name + " added to the starters");
      }
      else {
        subs.push(player);
        team.push(player);
        console.log(player.name + " added to the subs");
      }
      // runs the createPlayer function once more
      createPlayer();
    });
  }
  else {
    // loops through the team array and calls printStats() for each object it contains
    for (var i = 0; i < team.length; i++) {
      team[i].printStats();
    }
  }
};
//-------------------------------------------------------------
// calls the function createPlayer() to start the code
startGame();
//-------------------------------------------------------------
module.exports = Letter;