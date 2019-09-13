$(document).ready(function () {


    // variables for game loop //

    var winCount = 0;
    $("#wScore").text("Wins: " + winCount);
    var lossCount = 0;
    $("#lScore").text("Losses: " + lossCount);
    var userScore = 0;
    var gameScore = Math.floor(Math.random() * 99) + 17;
    var crystalOne = Math.floor(Math.random() * 11) + 1;
    var crystalTwo = Math.floor(Math.random() * 11) + 1;
    var crystalThree = Math.floor(Math.random() * 11) + 1;
    var crystalFour = Math.floor(Math.random() * 11) + 1;
    $("#gScore").text("Game Score: " + gameScore);
    $("#uScore").text("User Score: " + userScore);


    // resets game //

    function resetGame() {
        userScore = 0;
        gameScore = Math.floor(Math.random() * 99) + 17;
        crystalOne = Math.floor(Math.random() * 11) + 1;
        crystalTwo = Math.floor(Math.random() * 11) + 1;
        crystalThree = Math.floor(Math.random() * 11) + 1;
        crystalFour = Math.floor(Math.random() * 11) + 1;
        $("#gScore").text("Game Score: " + gameScore);
        $("#uScore").text("User Score: " + userScore);

    }

    // win function //

    function winGame() {
        alert("You win! Play again!");
        winCount = winCount + 1;
        $("#wScore").text("Wins: " + winCount);
        resetGame();
    }

    // loss funtion //

    function loseGame() {
        alert("You lose! Try again!");
        lossCount = lossCount + 1;
        $("#lScore").text("Losses: " + lossCount);
        resetGame();
    }

    // click funtions //

    $("#crystal1").click(function () {
        userScore = userScore + crystalOne;
        $("#uScore").text("User Score: " + userScore);
        if (userScore === gameScore) {
            winGame();
        } else if (userScore > gameScore) {
            loseGame();
        }
    });

    $("#crystal2").click(function () {
        userScore = userScore + crystalTwo;
        $("#uScore").text("User Score: " + userScore);
        if (userScore === gameScore) {
            winGame();
        } else if (userScore > gameScore) {
            loseGame();
        }
    });

    $("#crystal3").click(function () {
        userScore = userScore + crystalThree;
        $("#uScore").text("User Score: " + userScore);
        if (userScore === gameScore) {
            winGame();
        } else if (userScore > gameScore) {
            loseGame();
        }
    });

    $("#crystal4").click(function () {
        userScore = userScore + crystalFour;
        $("#uScore").text("User Score: " + userScore);
        if (userScore === gameScore) {
            winGame();
        } else if (userScore > gameScore) {
            loseGame();
        }
    });

});