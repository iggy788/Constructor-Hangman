var Letter = require('./Letter.js');

function Word(randWord){
    this.arrayWord = randWord.split('');
	this.spots = [];
	this.right = false;
	this.underScore = function () {
		for (i = 0; i < this.arrayWord.length; i++) {
			this.spots.push(new Letter(this.arrayWord[i]).inputLetter);
		}
	};

	/*
		this.createLetters = function(randWord) {
		for (i = 0; i < this.arrayWord.length; i++) {
			this.spots.push(new Letter(this.arrayWord[i]));
		}
	};
	this.letterGuess = function(letterGuess) {
		for (i = 0; i < this.spots.length; i++) {
			if (this.spots[i].letter === letterGuess) {
				this.right = true;
				this.spots[i].guessed = true;
			}
		}
		if (this.spots.every(function(letter) {
				return letter.guessed;
			})) return true;
	};
	this.showBlanks = function(spots) {
		let string = '';
		for (i = 0; i < this.spots.length; i++) {
			string += this.spots[i].letterGuessed();
		}
		console.log(string);
	};
	*/
}
module.exports = Word;