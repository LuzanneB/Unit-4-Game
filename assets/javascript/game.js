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
let wins = 0;
let losses = 0;

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
        $(".losses").html("Losses: " + losses);
        console.log("losses are:" + losses);
        resetScore();}
    // if the total score is equal to the random, increment wins and reset the game
    else {
        $(".modalWin").modal("show");
        wins++;
        $(".wins").html("Wins: " + wins);
        console.log("wins are: "+ wins)
        resetScore();
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