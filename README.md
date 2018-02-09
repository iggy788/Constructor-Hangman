# Constructor-Hangman
- - -
## Overview
### Creating a hangman command-line game using constructor functions.
![Hangman Cli](Images/01-Hangman-Cli.gif)
- - -
## Instructions

The completed game should meet the following criteria:

1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.

2. Your solution should have, at minimum, three files:

* **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

  * A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

  * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

  * An array of `new` Letter objects representing the letters of the underlying word

  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` *should not* `require` any other files.

4. `Word.js` *should only* require `Letter.js`

5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)
- - -
## Parks and Rec Hangman Game
### Guess the Parks and Rec Character!
![Hangman Cli](Images/ben.gif)
- - -
### How to Play!
1. Press any key to get started!

2. The app randomly picks a character from the Parks and Recreation TV Show, and the user has to guess the character correctly by typing letters the user thinks is in the character's name.

3. Wins: (# of times user guessed the word correctly).

   * If the word is `ben`, display it like this when the game starts: `_ _ _`.

   * As the user guesses the correct letters, reveal them: `b _ _ `.

4. Number of Guesses Remaining: (# of guesses remaining for the user).

5. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

6. After the user wins/loses the game should automatically choose another word and make the user play it.

![Hangman Cli](Images/ron.gif)
- - -
### Install These Packages
1. npm init --y
    * npm init -y sets up a project with defaults, that is pretty useful for test projects or prototyping and initialize a `package.json` file for your project.
2. npm install --save
    * npm install will install all modules listed as dependencies in package.json
3. npm install inquirer --save
   * [Inquirer](https://www.npmjs.com/package/inquirer)
```
var inquirer = require('inquirer');
inquirer.prompt([/* Pass your questions in here */]).then(answers => {
    // Use user feedback for... whatever!!
});
```
4. npm install prompt --save
   * [Prompt](https://www.npmjs.com/package/prompt)
```
  var prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['username', 'email'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
  });
  ```