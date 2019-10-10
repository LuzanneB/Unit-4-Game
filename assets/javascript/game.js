// Create a variable called randomNumber to equal a random number between 1-100 and
$( document ).ready(function() {
    console.log( "ready!" );

// set global variables
let randomNumber;
let crystal1;
let crystal2;
let crystal3;
let crystal4;
let totalScore = 0;
let wins= localStorage.getItem("wins")
let losses= localStorage.getItem("losses")

console.log("wins are: "+ wins)
console.log("losses are:" + losses);

if(wins === null){
    $(".wins").text("Wins: 0");
}
else{
    $(".wins").text("Wins: " + (localStorage.getItem("wins")))
}

if(losses === null){
    $(".losses").text("Losses: 0");
}
else{
    $(".losses").text("Losses: " + (localStorage.getItem("losses")))
}


resetScore();

// Create a function to reset randomNumber, crystal1-4, totalScore, and empty div for total score
function resetScore(){
    randomNumber = Math.floor(Math.random()*100);
    console.log("random number: " + randomNumber);
    crystal1 = Math.floor(Math.random()*15);
    console.log("crystal1 is: " + crystal1);
    crystal2 = Math.floor(Math.random()*15);
    console.log("crystal2 is: " + crystal2)
    crystal3= Math.floor(Math.random()*15);
    console.log("crystal3 is: " + crystal3);
    crystal4 = Math.floor(Math.random()*15);
    console.log("crystal4 is: " + crystal4);
    totalScore = 0;
    $(".randomNumber").html(randomNumber);
    $(".totalScore").html("0");
}

// runs the game after crystal is clicked
function playGame(){
    // check if the total score is less than the random, if it is display the current total score
    console.log("totalScore is: " + totalScore);
    if(totalScore < randomNumber){
            $(".totalScore").html(totalScore);        
    }
    // if total score is greater than random, increment loss counter and reset the game
    else if(totalScore > randomNumber){
        $(".modalLoss").modal("show");
        losses++;
        console.log("losses are:" + losses);
        updateLocal();
        resetScore();
    }
    // if the total score is equal to the random, increment wins and reset the game
    else {
        $(".modalWin").modal("show");
        wins++;
        console.log("wins are: "+ wins)
        updateLocal();
        resetScore();
    }
}
function updateLocal () {
    // store wins and losses to local storage
    localStorage.setItem("wins", wins);
    localStorage.setItem("losses", losses);
    if(wins === null){
        $(".wins").text("Wins: 0");
    }
    else{
        $(".wins").text("Wins: " + (localStorage.getItem("wins")))
    }
    
    if(losses === null){
        $(".losses").text("Losses: 0");
    }
    else{
        $(".losses").text("Losses: " + (localStorage.getItem("losses")))
    }

}
// Create click event, so that when crystal images are clicked the current value of crystal adds to the totalScore value and runs playGame()
 
$(".crystal1").on("click", function(){
    totalScore = crystal1 + totalScore;
    playGame();
    
})

$(".crystal2").on("click", function(){
    totalScore = crystal2 + totalScore;
    playGame();
    
})

$(".crystal3").on("click", function(){
    totalScore = crystal3 + totalScore;
    playGame();
    
})

$(".crystal4").on("click", function(){
    totalScore = crystal4 + totalScore;
    playGame();
    
})

});