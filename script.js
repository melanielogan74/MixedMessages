//Project Description:  Build a message generator program. Every time a user runs a program, they should get a new, randomized output.
//Purpose: Practice JavaScript scripting, Git version control, using command line, and developing code locally/push to GitHub
//Desired Outcome: Program will generate random message, successful version control, creating code locally and pushing remotely to GitHub

//This is the user who will run the program and used to customize message
const userName = "Carol";

//An object containing arrays of positive, motivational messages to randomly generate
const randomMsgs = {
    msgLine1: [`Have a nice day, ${userName}!`, `${userName}, anyone who keeps the ability to see beauty never grows old - Franz Kafka`, `You are so much stronger than you think, ${userName}!`, `${userName}, be the reason someone else feels seen, heard, and supported today`],
    msgLine2: ["Today could be the day!", "You got this!", "Peace, love, and blessings."],
    msgLine3: ["Go hard or go home!", "Nothing beats a failure but a try.", "Work hard, stay humble."]
};

//Test to ensure message from an array inside of an object will print
//console.log(randomMsgs.msgLine1[0]);

//Define variable that will store messages
const storeMsgs = [];

//Loop through several times to store the combined messages in a single array
for (let i = 0; i < 10; i++) {
    
    //Get random numbers using each property array in the object
    let randomNum1 = Math.floor(Math.random() * randomMsgs.msgLine1.length);
    let randomNum2 = Math.floor(Math.random() * randomMsgs.msgLine2.length);
    let randomNum3 = Math.floor(Math.random() * randomMsgs.msgLine3.length);
    
    let test1 = randomMsgs.msgLine1[randomNum1];
    let test2 = randomMsgs.msgLine2[randomNum2];
    let test3 = randomMsgs.msgLine3[randomNum3];
    
    storeMsgs[i] = `${test1} * ${test2} * ${test3}`;
    
}

//Print the combined messages
for (let j = 0; j < 10; j++) {
    console.log(storeMsgs[j]);
}
