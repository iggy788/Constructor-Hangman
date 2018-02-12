// The file containing the logic for the course of the game, which depends on Word.js
// dependency for inquirer npm package
var inquirer = require('inquirer');
// dependency for prompt npm package
var prompt = require('prompt');
// require Word.js
var Word = require('./Word.js');
//-------------------------------------------------------------
startGame();
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
    'Donna',
  ];
  // picks a random word
  var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  // creates word object
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
  //   console.log(word);
  inquirer
    .prompt([
      {
        name: 'letter',
        message: 'Guess a letter: ',
        validate: function(input) {
          return /[a-z]/.test(input.trim().toLowerCase());
        },
      },
    ])
    .then(function(guess) {
      console.log(guess.letter.toLowerCase());
      word.letterInWord(guess.letter.toLowerCase());
      console.log('word.letterInWord: ' + word.letterInWord);
      word.display();

		if (!word.guessed) {
        // console.log(word.guessed);
        if (word.guessesRemaining > 0) {
        //   console.log(word.guessesRemaining);
			getUserGuess(word);

        } else if (word.guessed) {
			console.log('\nCONGRATULATIONS YOU GUESSED THE CHARACTER!');
			startGame();
        } else {
			console.log('\nBOOOOOO, YOU LOSE!');
			startGame();
        }
      }
    });
}