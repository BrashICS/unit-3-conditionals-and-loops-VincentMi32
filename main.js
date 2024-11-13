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
let input = Number(prompt('Enter a number.'));

if (isNaN(input))
  input = Number(prompt("Please enter a number."));


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

function average(n) {
    let avg= 0;
    let count = 1;

    while (count <= n) {
        avg = avg + Number(prompt('Please enter  value ${count}/${n}'));
    }
    avg = round(avg /n, 1);
    console.log('the average is ${avg}}');
}
function random_until(min, max, stop) {
    
    if (max<= min) {
        return -1;
    }
    
    if (stop < min || stop > max) {
        return -1;
    } 
    let rnd = randInt(min, max);

    while (rnd != stop){
        console.log(rnd)
        rnd = randInt(min, max);
    }
    return stop;
}


