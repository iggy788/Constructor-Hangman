// The file containing the logic for the course of the game, which depends on Word.js
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
var wordList = [
	'Ron',
	'Ben',
	'Tom',
	'April',
	'Andy',
	'Leslie',
	'Ann',
	'Donna'

];

var ranSong = wordList[Math.floor(Math.random() * wordList.length)];

var gameWord = new Word(ranSong);
gameWord.underScore();
console.log('Chosen Word: ' + gameWord.arrayWord);
console.log('Underscores: ' + gameWord.spots);

// prompt the user to input a Letter
inquirer
	.prompt([
		{
			name: 'inputLetter',
			message: 'Guess a Letter!',
			type: 'input',
			validate: function validateGuess(name){
				return name !== '' && name.length === 1 && /[a-z]/i.test(name);
			}
		}
	])
	.then(function(guess) {
		console.log(guess.inputLetter);
		if (guess.inputLetter === gameWord.arrayWord) {
			console.log('CORRECT!');
		} else {
			console.log('WRONG!');

		} // create a variable that stores the inputted-Letter
		// var newGuess = new Letter(answers.wordLetter);
		// run the inputted-Letter to check if it is correct or not. Returns the letter or _
		//guess.inputLetter.guessedLogic();
	});

//-------------------------------------------------------------