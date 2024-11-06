/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}






// Setup the menu
let message = `Hi! Please make a selection:
1 - Play
2 - Options
3 - DLC
4 - Check for Updates
5 - Exit`;

console.log(message);

const choice = prompt("Please select an option:\n1 - Play\n2 - Options\n3 - DLC\n4 - Check for Updates\n5 - Exit");

if (choice === '1') {
    console.log("Starting the game...");
} else if (choice === '2') {
    console.log("Opening options menu...");
} else if (choice === '3') {
    console.log("Accessing DLC...");
} else if (choice === '4') {
    console.log("Checking for updates...");
} else if (choice === '5') {
    console.log("Exiting the game...");
} else {
    console.log("Invalid choice. Please select a valid option.");
}


