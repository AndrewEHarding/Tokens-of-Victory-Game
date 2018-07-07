// Your rhinestone eyes are like factories far away

// id list:
// target-number
// win-counter
// loss-counter
// current-score
// cov-1
// cov-2
// cov-3
// cov-4
// Victory Achieved
// You Died

// The random number shown at the start of the game should be between 19 - 120
// Each crystal should have a random hidden value between 1 - 12

$(document).ready(function () {

    // Global Variables
    var winCounter = 0;
    var lossCounter = 0;
    var targetNumber = 0;
    var currentScore = 0;

    // Game Object
    var gameFunction = function () {
        this.newGame = function () {
            targetNumber = Math.floor(Math.random()*(120 - 19 + 1) + 19);
        }
        this.checkWin = function () {
            if (currentScore == targetNumber) {
                winCounter++;
                $("#win-counter").text(winCounter);
                this.newGame(); //Ask about this
            }
        }

    }
    var gameObject = gameFunction({});

    gameObject.newGame();

    console.log(targetNumber);

});