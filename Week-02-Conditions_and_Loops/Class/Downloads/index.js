// Write out "Hello World!" to the screen
console.log("Hello World!");

// Declare a variable to hold your first name
// Output your first name to the screen
let firstName = "George";
console.log(firstName);

// Declare a variable to hold your last name.
// Output your last name to the screen
let lastName = "Heeres";
console.log(lastName);

// Using the firstname variable you declare earlier,
// output to the screen the phrase "Hello <your name>!"
// Replace <your name> with the contents of the variable you created.
console.log("Hello " + firstName + "!");

// Declare a variable that holds combines the last name
// and first name variable you defined to store your name
// in the following format "<last name>, <first name>"
// Output your name to the screen.
let name = lastName + ", " + firstName;
console.log(name);

// Declare a variable that holds your age.
// Declare a variable that cannot be modified that stores 
// the legal voting age. (i.e. 18).
let age = 47;
const legalVotingAge = 18;

// Using the variables you declared previously, output the following 
// sentence to the screen:
//
// <first name> has been able to vote for <years can vote> years.
console.log(firstName + " has been able to vote for " + (age - legalVotingAge) + " years");

// Declare a variable that stores the current temperature in fahrenheit 
// down to a single decimal precision (i.e. 65.4)
let temperature = 84;

// Declare a variable that mathematically converts the temperature
// value you declare into the celsius equivalent. Output the result 
// using the following format:
//
// Temperature: <temperature F> F is <temperature C>C
//
// For example:
// 
// Temperature: 212F is 100C
let celsius = ((temperature - 32) * 5.0/9);
console.log(temperature + "F is " + celsius + "C");

// CHALLENGE:
// Declare a variable that holds a number
// Declare a boolean (true, false) variable that stores if the value
// entered is odd. (i.e. not evenly divisible by 2)
//
// Output the result to the screen with the following format:
//
// <number> is odd: <true|false>
//
// Hint: If there is no remainder (0) when dividing by 2, then the
//       value is even.
let number = 3;
let isOdd = (number % 2) != 0;
console.log(number + " is odd: " + isOdd);

// EXPERT: 
// Declare a variable that holds a number greater than 1000 but less than 10000
//
// Break down the number into a mathmatics equation that adds each power 
// of 10 together.
//
// For example if you defined the number 5329, the expected output would be:
// 
// 5000 + 300 + 20 + 9 = 5239
let value = 5329;
//let valueAsString = "5329";
let thousands = parseInt(value / 1000, 10) * 1000;
let hundreds = parseInt(value % 1000 / 100, 10) * 100;
let tens = parseInt(value % 100 / 10, 10) * 10;
let ones = value % 10;
console.log(thousands + " + " + hundreds + " + " + tens + " + " + ones + " = " + value);