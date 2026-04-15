const readline = require('readline-sync');

let name = readline.question("What is your name? ");

console.log("Welcome to the program, " + name +"!");

let question1 =  readline.question("Which symbol would you use to concatenate two strings? ");
let question2 =  readline.questionInt("How many different primitive data types are there? ");
let question3 =  readline.questionInt("How many complex data types have we gone over so far? ");
let question4 =  readline.question("What types of values can a boolean have? ");
let question5 =  readline.question("Which date type might you use in code to signify an intended abscence of value? ");

console.log("For the first question you answered: " + question1);
console.log("For the second question you answered: " + question2);
console.log("For the third question you answered: " + question3);
console.log("For the fourth question you answered: " + question4);
console.log("For the fifth question you answered: " + question5);

