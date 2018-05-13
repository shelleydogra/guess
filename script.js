/*
   New Perspectives on JavaScript, 2nd Edition
   Final Project

   Author:   Shelley Dogra
   Date:     May 12, 2018

   Filename: script.js
*/

var randomNum;
var fromNumber;
var toNumber;
var userGuesses = [];

function init() {
    document.getElementById("fromTextbox").value = "";
    document.getElementById("toTextbox").value = "";
    document.getElementById("instructions").value = "Please set range of numbers and press the Start button.";
    document.getElementById("guessTextbox").value = "";
    document.getElementById("guessesTextbox").value = "";

    document.getElementById("fromTextbox").focus();     // focus to the 'from' text box
}

function start() {

    //capture guess range from user
    fromNumber = parseInt(document.getElementById("fromTextbox").value);
    toNumber = parseInt(document.getElementById("toTextbox").value);

    //validate user entry of Range
    if (toNumber <= fromNumber) {
        document.getElementById("instructions").value = "Plese choose a larger to number!";
        document.getElementById("toTextbox").focus();
    } else {
        //generate random number
        randomNum = randomNumber(fromNumber, toNumber);
        document.getElementById("instructions").value = "Please guess a number, enter it, and press Guess.";
        document.getElementById("guessTextbox").focus();
    }
}

function guess() {
    // capture guess from user
    var userGuess = parseInt(document.getElementById("guessTextbox").value);
    userGuesses.push(userGuess);

        if (userGuess === randomNum) {
            document.getElementById("guessesTextbox").value = "Number(s) Guessed: " + userGuesses.join(' ');
            window.alert("Correct! It took you "  + userGuesses.length +" attempt(s) to guess this number." );
            userGuesses.length = 0; //clear the array
            init();

        } else {

            if (userGuess < fromNumber || userGuess > toNumber) {
                window.alert("The number you entered is not in the From-To range. Please enter a valid number.");
                document.getElementById("guessTextbox").value = "";
                document.getElementById("guessTextbox").focus();
            }

            if (userGuess > randomNum) {
                document.getElementById("instructions").value = "My number is less than " + userGuess + ".";
            } else {
                document.getElementById("instructions").value = "My number is greater than " + userGuess + ".";
            }

            document.getElementById("guessesTextbox").value = "Number(s) Guessed: " + userGuesses.join(' ');
            document.getElementById("guessTextbox").value = "";
            document.getElementById("guessTextbox").focus();
        }

}

function randomNumber(low, high) {

    return Math.floor(Math.random()*(high-low+1)+low);
}
