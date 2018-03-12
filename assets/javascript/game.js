//Requirements
// The player will have to guess the answer, 
//just like in Hangman.This time, though, the player will guess with
// numbers instead of letters.

//Here's how the app works:

// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount 
//of points to the player's total score. 


// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.


// The player wins if their total score matches the random number from 
//the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.


// When the game begins again, the player should see a new random number.
//Also, all the crystals will have four new hidden values.Of course, the
// user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses.
//To that end, do not refresh the page as a means to restart the game.



//     Option 1 Game design notes


// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.





// PSEUDOCODE
// -------------------------------------------------------------
    //Create a random number for the game overall between 19-120
    //create random number for each crystal between 1-12
    //Display random number to player
    //record clicks on crystal images each time each time they click
    //Add score and display to user each time they click
    
        //IF score matches the random number, 
            //record a win 
            //display the win
            //restart the game with 
                //a new random number for the game overall
                //a new random number for each crystal
                //reset total score
        //Else IF score < random number,
            //continue to add each crystal click

        //Else If score > random number
            //record a loss
            //display a loss
            //restart the game with 
                //a new random number for the game overall
                //a new random number for each crystal
                //reset total score
            

// GLOBAL VARIABLES
// -------------------------------------------------------------

var wins = 0;
var losses = 0;
var total = 0;
var computerNumber = mainRandNumGen ();
var redNumber = redNumGen();
var blueNumber = blueNumGen ();
var yellowNumber = yellowNumGen ();
var greenNumber = greenNumGen ();

// FUNCTIONS
// -------------------------------------------------------------
 
//Create a random number for the game overall between 19-120
//Display random number to player
function mainRandNumGen () 
{
    mainRandom = Math.floor(Math.random() * 120) + 19;
   return mainRandom;
}


//create random number for each crystal between 1-12
 function redNumGen () {
    redRandom = Math.floor(Math.random() * 12) + 1;
    return redRandom;
    
 }

 function blueNumGen () {
    blueRandom = Math.floor(Math.random() * 12) + 1;
    return blueRandom;
 }

 function greenNumGen () {
    greenRandom = Math.floor(Math.random() * 12) + 1;
    return greenRandom;
 }

 function yellowNumGen () {
    yellowRandom = Math.floor(Math.random() * 12) + 1;
    return yellowRandom;
 }



//Add score and display to user each time they click
 function compareCount () 
 {
        //IF total matches the random number,
        if (total == computerNumber);
        {
            //record a win
            wins++;
            //display the win
            alert ("You won!")
            $("wins").text ("Wins: " + wins);
            //restart the game
            restart();
        }


        //Else If total > random number
        if (total > computerNumber);
            //record a loss
            losses++;
            //display a loss
            alert ("You lost!")
            $("losses").text ("Losses: " + losses);
            //restart the game with 
            restart();


        //Else IF total < random number,
            //continue to add each crystal click
 }


//restart the game with 
    //a new random number for the game overall
    //a new random number for each crystal
    //reset total score
 function restart ()
{
    mainRandNumGen();
    mainRandNumGen();
    redNumGen ();
    blueNumGen ();
    greenNumGen ();
    yellowNumGen ();
    total=0;
}


 

// MAIN PROCESS
// ---------------------------------------------
// Create a random number
mainRandNumGen ();
redNumGen ();
blueNumGen ();
greenNumGen ();
yellowNumGen ();

console.log ("The computer's number is: " + computerNumber);
console.log ("Red Crystal = " + redRandom);
console.log ("Blue Crystal = " + blueRandom);
console.log ("Yellow Crystal = " + yellowRandom);
console.log ("Green Crystal = " + greenRandom);

// record clicks on crystals and update total count 
// after each click

$(function()
{
$(".redIcon").on ("click", function()
    {
        total= total + redRandom;
        console.log ("Total= " + total);
        compareCount ();
    });

});

$(function()
{
$(".blueIcon").click (function()
    {
        total= total + blueRandom;
        console.log ("Total= " + total);
        compareCount ();
    });

});

$(function()
{
$(".yellowIcon").click (function()
    {
        total= total + yellowRandom;
        console.log ("Total= " + total);
        compareCount ();
    });

});

$(function()
{
$(".greenIcon").click (function()
    {
        total= total + greenRandom;
        console.log ("Total= " + total);
        compareCount ();
    });

});



 // Set the HTML for the  to the text of what was
 $(function(){
 $(".number").text(computerNumber);
 });
// $(function()
// {
//     $("redIcon").click ()
//     {   
//         $("redIcon").---();
//     });
// });

