var Letter = require('./Letter.js');
// export Word Constructor function
function Word(word) {
  // array of letter objects
  var letters = [];
  var wordArray = word.split('');
  console.log('word: ' + word);
  // console.log('wordArray: ' + wordArray);

  // pushing Letter Objects into Word Object's letter array.
  wordArray.forEach(function(wordLetter) {
    letters.push(new Letter(wordLetter));
  });
  // maximum allowed guesses
  this.guessesRemaining = 10;
  // default value is false. it should be set to true when the whole word is guessed.
  this.guessed = false;

// does all the processing if the letter is in the word
	this.letterInWord = function (userGuess) {
		this.guessesRemaining--;
		// word.guessed will be set to true when all the letters have been guessed.
		this.guessed = letters.every(function (letter) {
			// console.log('this.guessed: ' + word.guessed);
			// checks if the letter is in the word. If it is in the word, then sets guessed property to true.
			if (userGuess === letter.name) {
				console.log('letter.name: ' + letter.name);
				letter.guessed = true;
				console.log('letter.guessed: ' + letter.guessed);
			}
			return letter.guessed;
		});
	};
	console.log('this.letterInWord: ' + this.letterInWord);


  // for displaying the word on console
  this.display = function() {
    var string = '';
    letters.forEach(function(letter) {
      string += letter.display();
	});
	// console.log('letter.display(): ' + letter.display());
    console.log(
      'Guess the Character\n' +
        string +
        '\nGuesses remaining: ' +
        this.guessesRemaining
    );
  };
}

module.exports = Word;