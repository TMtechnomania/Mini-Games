var level = 1;
var gameStart = false;
var tileId;
var record = [];
var userInput = [];
$(document).keyup(function(){
    if(!gameStart){
        gameStart = true;
        $("#title").text("Level " + level);
        randomTitle();
    }
});

$("button").click(function(){
    if(!gameStart){
        gameStart = true;
        $("#title").text("Level " + level);
        randomTitle();
    }
})

function randomTitle(){
    userInput = [];
    var rand = (Math.round((Math.random()) * 3) + 1);
    record.push("click" + rand);
    animateTile("click" + rand);
    playAudio("click" + rand);
    // console.log(rand);
}

$(".clickable").click(function() {
    if(gameStart === true){
        tileId = this.id;
        userInput.push(tileId);
        // console.log(this.id + " is clicked.");
        // console.log(tileId + " is clicked.");
        animateTile(tileId);
        playAudio(tileId);
        compareRes();
    }
});

function animateTile(tile){
    $("#" + tile).addClass("invert");
    setTimeout(function(){
        $("#" + tile).removeClass("invert");
    }, 1000);
}

function playAudio(tile){
    var title = new Audio(['/assets/audio/' + tile + ".wav"])
    title.play();
}

function compareRes(){
    for(i = 0; i < userInput.length; i++){
        if(record[i] !== userInput[i]){
            alert("You fail!");
            location.reload();
            return;
        }
    }
    // userInput = [];
    if(userInput.length === record.length){
        setTimeout(function(){
            randomTitle();
            level = level + 1;
            $("#title").text("Level " + level);
        }, 2000);
    }
}