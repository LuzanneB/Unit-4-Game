// Create a variable called randomNumber to equal a random number between 1-100 and
$( document ).ready(function() {
    console.log( "ready!" );



let randomNumber = Math.floor(Math.random()*150);
    console.log("random number is: "+ randomNumber);
    // Show value in .randomNumber
    $(".randomNumber").html(randomNumber);

// Create a variable called crystal1, crystal2, crystal3,crystal4 all to random # between 1-100.
let crystal1=Math.floor(Math.random()*15);
    console.log("crystal1 is "+ crystal1);
let crystal2=Math.floor(Math.random()*15);
    console.log("crystal2 is " + crystal2);
let crystal3=Math.floor(Math.random()*15);
    console.log("crystal3 is " +crystal3);
let crystal4=Math.floor(Math.random()*15);
    console.log("crystal4 is "+ crystal4);


// Create a variable called totalScore, wins & losses equal to 0.
totalScore = 0
wins = 0
losses = 0

// Create a function to reset randomNumber, crystal1-4, totalScore, and empty div for total score
function resetScore(){
    randomNumber = Math.floor(Math.random()*100);
    crystal1 = Math.floor(Math.random()*100);
    crystal2 = Math.floor(Math.random()*100);
    crystal3= Math.floor(Math.random()*100);
    crystal4 = Math.floor(Math.random()*100);
    totalScore = 0;
    $(".randomNumber").html(randomNumber);
    $(".totalScore").html("0");
}



// Create click event, so that when crystal images are clicked the current value of crystal adds to the totalScore value 
 // if the totalScore is less than randomNumber, update #totalScore with totalScore
 // if the totalScore is more than randomNumber,
// +1 to losses variable and update #losses
        // run reset function created above
    // if the totalScore is equal to randomNumber
        // +1 to wins variable and update #wins
        // run reset function created above


$(".crystal1").on("click", function(){
    totalScore = crystal1 + totalScore;
    console.log("totalScore is: " + totalScore);

    if(totalScore < randomNumber){
            $(".totalScore").html(totalScore);        
    }
    else if(totalScore > randomNumber){
        losses++;
        $(".losses").html("Losses: " + losses);
        console.log("losses are:" + losses);
        resetScore();}
    else {
        wins++;
        $(".wins").html("Wins: " + wins);
        console.log("wins are: "+ wins)
        resetScore();
    }
    
})

$(".crystal2").on("click", function(){
    totalScore = crystal2 + totalScore;
    console.log("totalScore is: " + totalScore);

    if(totalScore < randomNumber){
            $(".totalScore").html(totalScore);        
    }
    else if(totalScore > randomNumber){
        losses++;
        $(".losses").html("Losses: "+ losses);
        console.log("losses are:" + losses);
        resetScore();}
    else {
        wins++;
        $(".wins").html("Wins: "+ wins);
        console.log("wins are: "+ wins)
        resetScore();
    }
    
})

$(".crystal3").on("click", function(){
    totalScore = crystal3 + totalScore;
    console.log("totalScore is: " + totalScore);

    if(totalScore < randomNumber){
            $(".totalScore").html(totalScore);        
    }
    else if(totalScore > randomNumber){
        losses++;
        $(".losses").html("Losses: "+ losses);
        console.log("losses are:" + losses);
        resetScore();}
    else {
        wins++;
        $(".wins").html("Wins: " + wins);
        console.log("wins are: "+ wins)
        resetScore();
    }
    
})

$(".crystal4").on("click", function(){
    totalScore = crystal4 + totalScore;
    console.log("totalScore is: " + totalScore);

    if(totalScore < randomNumber){
            $(".totalScore").html(totalScore);        
    }
    else if(totalScore > randomNumber){
        losses++;
        $(".losses").html("Losses: "+ losses);
        console.log("losses are:" + losses);
        resetScore();}
    else {
        wins++;
        $(".wins").html("Wins: "+ wins);
        console.log("wins are: "+ wins)
        resetScore();
    }
    
})

});