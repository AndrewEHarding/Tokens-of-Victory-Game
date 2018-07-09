$(document).ready(function () {

    // =====GLOBAL VARIABLES======
    var winCounter = 0;
    var lossCounter = 0;
    var targetNumber = 0;
    var currentScore = 0;
    var blackPhantoms = ["Maneater Mildred", "Xanthous King Jeremiah", "Kirk, Knight of Thorns", "Paladin Leeroy", "Marvelous Chester"];

    // =====GAME OBJECT=====
    function Game() {
        var self = this;

        // =====NEW GAME=====
        self.newGame = function () {
            console.log("New Game Created!!")
            targetNumber = Math.floor(Math.random() * 101 + 19);
            console.log(targetNumber);
            $("#target-number").text(targetNumber);
            currentScore = 0;
            $("#win-counter").text(winCounter);
            console.log(winCounter);
            $("#loss-counter").text(lossCounter);
            console.log(lossCounter);
            $("#current-score").text(currentScore);
            $('#cov-1').val(Math.floor(Math.random() * 11 + 1));
            $('#cov-2').val(Math.floor(Math.random() * 11 + 1));
            $('#cov-3').val(Math.floor(Math.random() * 11 + 1));
            $('#cov-4').val(Math.floor(Math.random() * 11 + 1));
            console.log('cov-1 ' + $('#cov-1').val());
            console.log('cov-2 ' + $('#cov-2').val());
            console.log('cov-3 ' + $('#cov-3').val());
            console.log('cov-4 ' + $('#cov-4').val());
        }

        // =====CHECK WIN=====
        self.checkWin = function () {
            if (currentScore == targetNumber) {
                alert("Victory Achieved");
                winCounter++;
                $("#win-counter").text(winCounter);
                self.newGame();
            }

            else if (currentScore > targetNumber) {
                alert("Dark spirit " + blackPhantoms[Math.floor(Math.random()* blackPhantoms.length)] + " has invaded!\nYou Died");
                lossCounter++;
                $("#loss-counter").text(lossCounter);
                self.newGame();
            }
        }
    }

    var gameObject = new Game();
    gameObject.newGame();

    // =====BUTTON CLICK=====
    $(".cov-button").on("click", function () {
        var addedTokens = $(this).val();
        console.log(addedTokens);
        currentScore = parseInt(currentScore) + parseInt(addedTokens);
        $("#current-score").text(currentScore);
        gameObject.checkWin();

    });

});