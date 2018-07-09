// id list:
// target-number
// win-counter
// loss-counter
// current-score
// cov-1
// cov-2
// cov-3
// cov-4
// cov-button <---class
// Victory Achieved
// You Died

// The random number shown at the start of the game should be between 19 - 120
// Each crystal should have a random hidden value between 1 - 12

$(document).ready(function () {

    // =====GLOBAL VARIABLES======
    var winCounter = 0;
    var lossCounter = 0;
    var targetNumber = 0;
    var currentScore = 0;
    var cov1 = 0;
    var cov2 = 0;
    var cov3 = 0;
    var cov4 = 0;


    // =====GAME OBJECT=====
    var gameFunction = function () {

        // =====NEW GAME=====
        this.newGame = function () {
            $("#win-counter").text(winCounter);
            $("loss-counter").text(lossCounter);
            targetNumber = Math.floor(Math.random() * 101 + 19);
            $("target-number").text(targetNumber);
            currentScore = 0;
            $("current-score").text(currentScore);
            cov1 = Math.floor(Math.random()*11 + 1);
            cov2 = Math.floor(Math.random()*11 + 1);
            cov3 = Math.floor(Math.random()*11 + 1);
            cov4 = Math.floor(Math.random()*11 + 1);
            //Find a way to push the random numbers to the img value attributes
        }

        // =====CHECK WIN=====
        this.checkWin = function () {
            if (currentScore == targetNumber) {
                alert("Victory Achieved");
                winCounter++;
                // $("#win-counter").text(winCounter); May be redundant
                this.newGame();
            }

            else if (currentScore > targetNumber) {
                alert("You Died");
                lossCounter++;
                // $("#loss-counter").text(lossCounter);
                this.newGame();
            }
        }

    }
    var gameObject = gameFunction({});

    gameObject.newGame();

    // =====BUTTON CLICK=====
    $(".cov-button").on("click", function () {
        var addedTokens = $(this).attr("value"); // Make sure this is taking the value attribute from the cov that was clicked
        currentScore = currentScore + addedTokens;
        $("#current-score").text(currentScore);
        gameObject.checkWin();

    });

});