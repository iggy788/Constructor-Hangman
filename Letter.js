// Letter.js should not require any other files.
//-------------------------------------------------------------
// Define the Letter Constructor
function Letter(wordLetter) {
	this.name = wordLetter; //string
	this.guessed = false; //boolean
	console.log('wordLetter: ' + wordLetter);
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