// Letter.js should not require any other files.
//-------------------------------------------------------------
// Define the Letter Constructor
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
//-------------------------------------------------------------
module.exports = Letter;