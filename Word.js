// Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore),

// That means the constructor should define:
// • A string value to store the underlying character for the letter
// • A boolean value that stores whether that letter has been guessed yet
// • A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// • A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
//-------------------------------------------------------------
// Word.js should only require Letter.js
//-------------------------------------------------------------
// dependency for inquirer npm package
var inquirer = require('inquirer');
// require Letter.js
var letter = require('./Letter.js');
//-------------------------------------------------------------
// dependency for inquirer npm package
var inquirer = require('inquirer');
// dependency for prompt npm package
var prompt = require('prompt');

// Set initial variables
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
// Creates a UserSearch Constructor
var Word = function (word) {
	this.word = word; // Array
	// First method that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together
    this.feed = function() {
        if (this.hungry === true) {
            console.log('-----------------------');
            console.log('That was yummy!');
        } else {
            console.log('-----------------------');
            console.log('No thanks! I\'m full.');
        }
    };
	// Second method that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
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
module.exports = Word;