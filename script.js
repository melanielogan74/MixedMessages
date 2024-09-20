//Project Description:  Build a message generator program. Every time a user runs a program, they should get a new, randomized output.
//Purpose: Practice JavaScript scripting, Git version control, using command line, and developing code locally/push to GitHub
//Desired Outcome: Program will generate random message, successful version control, creating code locally and pushing remotely to GitHub

//This is the user who will run the program and used to customize message
const userName = "Carol";

//An array of positive, motivational messages to be used randomly
const randomMsg = [`Have a nice day, ${userName}!`, `${userName}, anyone who keeps the ability to see beauty never grows old - Franz Kafka`, `You are so much stronger than you think, ${userName}!`, `${userName}, be the reason someone else feels seen, heard, and supported today`];

//Get a random number that will be used to select a random message from the array
let randomNum = Math.floor(Math.random() * randomMsg.length);

//Test that message will print to screen
console.log(randomMsg[randomNum]);


