// Assign Six GLOBAL Variables
let totalScore = 0;
let scoreToMatch = 0;
let wins = 0;
let losses = 0;
let randomNumber;
var gemValues;

//randomNumber function
function generateRandNumber() {
    return Math.floor((Math.random() * 102) + 1);
}
// Start Function
function start() {
    // Generate Random Number and assign it to a variable between 19 and 120 formula:[ () * (max - min + 1)) + min];
    randomNumber = generateRandNumber()
    console.log(randomNumber); //sanity test: works!
    // Display random number in "#scoreToMatch" ID.
    $("#scoreToMatch").text(randomNumber);
    // Generate a random number for all gems that should be bwteen 1 and 12.
    let blueNum = Math.floor((Math.random() * 12) + 1);
    console.log(blueNum);
    let purpleNum = Math.floor((Math.random() * 12) + 1);
    console.log(purpleNum);
    let yellowNum = Math.floor((Math.random() * 12) + 1);
    console.log(yellowNum);
    let redNum = Math.floor((Math.random() * 12) + 1);
    console.log(redNum);
    totalScore = 0;
    $("#totalScore").text(totalScore);
    return [blueNum, purpleNum, yellowNum, redNum];

}
// Create an on.click event that triggers and adds the "saphireNum" to the totalScore.
$(".crystals").on("click", function() {
    // if .this "click" event .is(has) id "img-saphire"
    if ($(this).is("#img-blue")) {
        //add the number gen by saphire to totalScore, rinse and repeat...
        totalScore += gemValues[0];
    } else if ($(this).is("#img-purple")) {
        totalScore += gemValues[1];
    } else if ($(this).is("#img-yellow")) {
        totalScore += gemValues[2];
    } else if ($(this).is("#img-red")) {
        totalScore += gemValues[3];
    }
    $("#totalScore").text(totalScore);
    console.log(totalScore); //sanity check: works!
    // If totalScore === scoreToMatch add +1 to "winsCoount
    if (totalScore === randomNumber) {
        wins++;
        $("#winsCount").text(wins);
        gemValues = start();
        // else +1 to lossesCount
    } else if (totalScore > randomNumber) {
        losses++;
        $("#lossesCount").text(losses);
        gemValues = start();
    }
});
gemValues = start();
console.log(gemValues);