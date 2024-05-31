#! /usr/bin/env node

import inquirer from 'inquirer';
//1)computer will  print a random number
//2)useR input for guessing number
//3)compare user input with computer generated number as show resullt

const randomNumber = Math.floor(Math.random() *6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number:",
    }
    ]);
if(answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you guessed the number");
}else{
    console.log("You guessed Wrong");
}