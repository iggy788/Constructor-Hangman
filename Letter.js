function Letter(wordLetter) {
	this.name = wordLetter;
	this.guessed = false;
	this.display = function () {
		if (this.guessed === false) {
			return ' _ ';
		} else {
			return wordLetter;
		}
	};
}
//-------------------------------------------------------------
module.exports = Letter;