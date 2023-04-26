function cLogRed(str) {                             // created function called 'cLogRed' with one parameter, a string. Returns a console.log function
    return console.log('\x1b[31m%s\x1b[0m', str);   // that logs the string red. The function takes in 2 parameters, the output color and the string.
};                                                  // 1st parameter: '\x1b[31m' is the color red, '%s' is a placeholder for the string, '\x1b[0m' resets the color on exit
                                                    // 2nd parameter: the string which will be placed inside the first parameter. will replace '%s' when code logs to console.
                                                    // can also be written as followed: console.log('\x1b[31mString\x1b[0m')
let ages = [3, 9, 23, 64, 2, 8, 28, 93];            // create array called ages with 8 objects.
console.log(`\n\n! ~~~~~     Week 04 Assignment      ~~~~~ !`)
console.log(`\n\n! ~~~~~        Question 1           ~~~~~ !`)
cLogRed(`\n\n1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`);
console.log(`let ages = [3, 9, 23, 64, 2, 8, 28, 93];\n`);

cLogRed(`1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
Do not use numbers to reference the last element, find it programmatically.
ages[7] – ages[0] is not allowed!`);
console.log(`(ages[ages.length - 1]) - ages[0] = ${ages[ages.length - 1] - ages[0]}\n`);
// created a subtraction problem that subtracts the first element in an array from the last element in the array.
// array[array.length-1] = last item in the array
// array[0] = first element of the array.
// 

cLogRed(`1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`);
ages.push(1996);
console.log(`ages.push(1996)\n(ages[ages.length - 1]) - ages[0] = ${ages[ages.length - 1] - ages[0]}\n`);

cLogRed(`1c. Use a loop to iterate through the array and calculate the average age.`);



console.log(`\n\n! ~~~~~        Question 2           ~~~~~ !`);
// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
// 
// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
// 
// console.log(`\n\n! ~~~~~        Question 3           ~~~~~ !`);
// 3.	How do you access the last element of any array?
// 
// console.log(`\n\n! ~~~~~        Question 4           ~~~~~ !`);
// 4.	How do you access the first element of any array?
// console.log(`\n\n! ~~~~~        Question 5           ~~~~~ !`);
// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// 
// For example:
// 
// let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
// let nameLengths = [5, 3, 4]; 			//create this new array
// 
// console.log(`\n\n! ~~~~~        Question 6           ~~~~~ !`);
// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
// 
// 
// console.log(`\n\n! ~~~~~        Question 7           ~~~~~ !`);
// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
// 
// 
// console.log(`\n\n! ~~~~~        Question 8           ~~~~~ !`);
// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
// 
// 
// console.log(`\n\n! ~~~~~        Question 9           ~~~~~ !`);
// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// 
// 
// console.log(`\n\n! ~~~~~        Question 10          ~~~~~ !`);
// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
// 
// 
// console.log(`\n\n! ~~~~~        Question 11          ~~~~~ !`);
// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
// 
// 
// console.log(`\n\n! ~~~~~        Question 12          ~~~~~ !`);
// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// 
// 
// console.log(`\n\n! ~~~~~        Question 13          ~~~~~ !`);
// 13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.
// 



