// Letter.js should not require any other files.
//-------------------------------------------------------------
// dependency for inquirer npm package
var inquirer = require('inquirer');
// dependency for prompt npm package
var prompt = require('prompt');
//-------------------------------------------------------------

// Define the Letter Constructor
function Letter(inputLetter) {
	this.inputLetter = inputLetter; // String
	this.guessed = false; // Boolean
	// first method that returns the underlying character if the inputLetter has been guessed, or a placeholder (like an underscore) if the inputLetter has not been guessed
	this.guessedLogic = function() {
		if (this.guessed === false) {
			this.inputLetter = '_';
		} else {
			this.inputLetter = inputLetter;
		}
	};
}

// prompt the user to input a Letter
inquirer
	.prompt([
		{
			name: 'inputLetter',
			message: 'Guess a Letter!',
			type: 'input'
		}
	])
	.then(function(answers) {
		// create a variable that stores the inputted-Letter
		var newGuess = new Letter(answers.inputLetter);
		// return the inputted-Letter to the console
		console.log(
			'----------\n' +
				'Input Letter: ' +
				newGuess.inputLetter +
				'\nGuessed: ' +
				newGuess.guessed +
				'\n----------'
		);
		// run the inputted-Letter to check if it is correct or not. Returns the letter or _
		newGuess.guessedLogic();
	});

//-------------------------------------------------------------
// calls the function Letter() to start the code
Letter();

// Letter.prototype.toString = function () {
//     console.log("Letter: " + this.inputLetter + "\nGuessed: " + this.guessed);
// };

//-------------------------------------------------------------
module.exports = Letter;
//-------------------------------------------------------------
// The file containing the logic for the course of the game, which depends on Word.js

// • Randomly selects a word and uses the Word constructor to store it
// • Prompts the user for each guess and keeps track of the user's remaining guesses
// Holds the word bank
//-------------------------------------------------------------
// dependency for inquirer npm package
var inquirer = require('inquirer');
// dependency for prompt npm package
var prompt = require('prompt');
// require Word.js
var Word = require('./Word.js');
//-------------------------------------------------------------
// Randomly selects a word and uses the Word constructor to store it
console.log('Welcome to Parks and Rec Hangman!');
console.log('Guess a Parks and Rec Character');
console.log('-----------------------------');
prompt.start();

game = {
	wordBank: ['ron', 'ben', 'tom', 'april', 'andy', 'leslie', 'ann', 'donna'],
	wordsWon: 0,
	guessesRemaining: 10,
	currentWrd: null,

	startGame: function(wrd) {
		this.resetGuesses();
		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
		this.currentWrd.getLet();
		this.promptUser();
	},

	resetGuesses: function() {
		this.guessesRemaining = 10;
	},

	promptUser: function() {
		var self = this;
		prompt.get(['guessLetter'], function(err, result) {
			console.log('You guessed: ' + result.guessLet);
			var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

			if (manyGuessed == 0) {
				console.log('WRONG');
				self.guessesRemaining--;
			} else {
				console.log('CORRECT');
				if (self.currentWrd.findWord()) {
					console.log('You won!');
					console.log('-------------------');
					return;
				}
			}
			console.log('Guesses remaining: ' + self.guessesRemaining);
			console.log('-------------------');
			if (self.guessesRemaining > 0 && self.currentWrd.found == false) {
				self.promptUser();
			} else if (self.guessesRemaining == 0) {
				console.log('Game over. Correct Word is', self.currentWrd.target);
			} else {
				console.log(self.currentWrd.wordRender());
			}
		});
	}
};

game.startGame();