var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var randomNumber = Math.floor(Math.random() * 3) + 1;
var randomChosenColour = buttonColours[randomNumber];

$(".btn").click(function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
})

function nextSequence() {
    gamePattern.push(randomChosenColour);
    $("." + randomChosenColour).fadeOut(100).fadeIn(100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $(currentColour).addClass("pressed");
    setTimeout(() => {
        $(currentColour).removeClass("pressed");
    }, 100);
}