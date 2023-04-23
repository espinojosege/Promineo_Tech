/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE 01 Lab  
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("");
console.log("Step 1:  Number of Seats on a Plane");
console.log("Answer:\n var totalSeats = 100");
var totalSeats = 100
console.log("Console Log:\n Number of Seats on a Plane = " + totalSeats)

console.log("");

console.log("Step 2:  Cost of Groceries");
console.log("Answer:\n var groceriesCost = 100");
var groceriesCost = 100;
console.log("Console Log:\n Cost of Groceries = " + groceriesCost);

console.log("");

console.log("Step 3:  Middle Initial");
console.log("Answer:\n var middleInitial = \"G\"");
var middleInitial = "G";
console.log("Console Log:\n Middle Initial = " + middleInitial)

console.log("");

console.log("Step 4:  Is it Hot Outside?");
console.log("Answer:\n var isHotOutside = false");
var isHotOutside = false;
console.log("Console Log:\n Is it Hot Outside? = " + isHotOutside);

console.log("");

console.log("Step 5:  First Name");
console.log("Answer:\n var firstName = \"Jose\"");
var firstName = "Jose";
console.log("Console Log:\n First Name = " + firstName);

console.log("");

console.log("Step 6:  Street Address");
console.log("Answer:\n var streetAddress = \"840 King Richard Ave\"");
var streetAddress = "840 King Richard Ave"
console.log("Console Log:\n Street Address = " + streetAddress);

console.log("");

/*-------------------------------------------------------*/

console.log(`\n--------------------------
Question 2. Creating & 'console.log()'ing variables \n `);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
*
* */

console.log('Remove Plane Seats:');
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
console.log('Answer:\n totalSeats -= 2');
totalSeats -= 2;
console.log('Console Log:\n Number of Seats on a Plane = ' + totalSeats + "\n ");


console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
console.log('Answer:\n groceriesCost -= 2.15');
groceriesCost -= 2.15
console.log('Console Log:\n Cost of Groceries = ' + groceriesCost + "\n ");


console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
console.log('Answer:\n middleInitial = \"L\"');
middleInitial = "L";
console.log('Console Log:\n Middle Initial = ' + middleInitial + "\n ");


console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
console.log('Answer:\n isHotOutside = !isHotOutside');
isHotOutside = !isHotOutside;
console.log('Console Log:\n Is it Hot Outside? = ' + isHotOutside + "\n ");


console.log('Full Name:')
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
console.log('Answer:\n var fullName = firstName + middleInitial + \"Espino\"');
var fullName = firstName + " " + middleInitial + " " + "Espino"
console.log('Console Log:\n Full name = ' + fullName + "\n ");


console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
console.log('Answer:\n console.log(\"Customer \" + fullName + \" lives at \" + streetAddress');
var fullName = firstName + " " + middleInitial + " " + "Espino"
console.log('Console Log:\n Customer ' + fullName + " lives at " + streetAddress);



    console.log('-----------Finished------------')