// Letter.js should not require any other files.
//-------------------------------------------------------------
// Define the Letter Constructor
/*
function Letter(wordLetter) {
	this.stored = wordLetter; //string
	this.inputLetter = '_'; //string
	this.guessed = false; //boolean
	this.guessedLogic = function () {
		if (this.guessed) {
			return this.inputLetter;
		}
		return '_';
	};
}
*/
// Define the Letter Constructor
function Letter(wordLetter) {
	this.name = wordLetter; //string
	this.guessed = false; //boolean
	// console.log('wordLetter: ' + wordLetter);
	// console.log('this.guessed: ' + this.guessed);
}
Letter.prototype.display = function() {
  if (this.guessed === false) {
    // hide the name
    return ' _ ';
  } else {
    return wordLetter;
  }
};
//-------------------------------------------------------------
module.exports = Letter;