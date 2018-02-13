var Letter = require('./Letter.js');
function Word(word) {
  var letters = [];
  var wordArray = word.split('');
console.log('word: ' + word);

  wordArray.forEach(function(wordLetter) {
	  letters.push(new Letter(wordLetter));
  });

  this.guessesRemaining = 10;

  this.guessed = false;

// This was meant to do all the processing if the letter is in the word; however, I couldn't get the userGuess to be added to the Word constructor in order for it to be checked against the random
	this.letterInWord = function (userGuess) {
    this.guessesRemaining--;
	console.log(userGuess);
		this.guessed = letters.every(function (letter) {
		console.log(letter.name.toLowerCase());
      if (userGuess === letter.name.toLowerCase()) {
        letter.guessed = true;
      }
      return letter.guessed;
    });
  };
  this.display = function() {
    var string = '';
	  letters.forEach(function(letter, index) {
      string += letter.display();
    });
    console.log(
      'Guess the Character\n' +
        string +
        '\nGuesses remaining: ' +
        this.guessesRemaining
    );
  };
}
module.exports = Word;