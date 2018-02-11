// The file containing the logic for the course of the game, which depends on Word.js

// • Randomly selects a word and uses the Word constructor to store it
// • Prompts the user for each guess and keeps track of the user's remaining guesses
//-------------------------------------------------------------
// dependency for inquirer npm package
var inquirer = require('inquirer');
// dependency for prompt npm package
var prompt = require('prompt');
// require Word.js
var Word = require('./Word.js');
//-------------------------------------------------------------
// Randomly selects a word and uses the Word constructor to store it
var myAdmin = new WeatherAdmin();
//-------------------------------------------------------------
// Prompts the user for each guess and keeps track of the user's remaining guesses
if (loginType === "admin") {
  myAdmin.getData();
}
else {
  myAdmin.newUserSearch(userName, userLocation);
}