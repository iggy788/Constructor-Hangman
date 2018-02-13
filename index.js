var inquirer = require('inquirer');
var prompt = require('prompt');
var Word = require('./Word.js');
var chalk = require('chalk');
//-------------------------------------------------------------

//-------------------------------------------------------------
function getWord() {
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
	var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

	var word = new Word(randomWord);
	return word;
}
//-------------------------------------------------------------
// Start Game Function
//-------------------------------------------------------------
function startGame() {
	console.log('*****************************');
	console.log('Welcome to Parks and Rec Hangman!');
	console.log('-----------------------------');
	console.log('Guess a Parks and Rec Character');
	console.log('-----------------------------');
	var word = getWord();
	word.display();
	getUserGuess(word);
}
//-------------------------------------------------------------
// Guessing Function
//-------------------------------------------------------------
function getUserGuess(word) {
	inquirer
		.prompt([{
			name: 'letter',
			message: 'Guess a letter: ',
			type: 'input',
			validate: function validateGuess(name) {
				return name !== '' && name.length === 1 && /[a-z]/i.test(name);
			}
		}, ])
		.then(function (guess) {
			// This is supposed to add the guessed letter to the Word object in the constructor.
			word.letterInWord(guess.letter.toLowerCase());
			word.display();
			if (!word.guessed) {
				if (word.guessesRemaining > 0) {
					getUserGuess(word);
				} else {
					console.log(chalk.red('BOOOOOO, YOU LOSE!'));
					startGame();
				}
			} else if (word.guessed) {
				console.log(chalk.green('CONGRATULATIONS YOU GUESSED THE CHARACTER!'));
				startGame();
			}
		});
}
inquirer
	.prompt([{
		name: 'start',
		message: 'Ready to Play Parks and Rec Hangman?',
		type: 'confirm',
		default: true,
	}, ])
	.then(game => {
		if (game.start) {
			startGame();
		}
	});