function cLogRed(str) {                             // created function called 'cLogRed' with one parameter, a string. Returns a console.log function
    return console.log('\x1b[31m%s\x1b[0m', str);   // that logs the string red. The function takes in 2 parameters, the output color and the string.
};                                                  // 1st parameter: \x1b[31m is the color red, %s is a placeholder for the string, \x1b[0m resets the color on exit
                                                    // 2nd parameter: the string which will be placed inside the first parameter. will replace %s when code logs to console.
                                                    // can also be written as followed: console.log('\x1b[31mString\x1b[0m')
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(`\n\n! ~~~~~     Week 04 Assignment      ~~~~~ !`)
console.log(`\n\n! ~~~~~        Question 1           ~~~~~ !`)
cLogRed(`\n\n1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`);
console.log(`let ages = [3, 9, 23, 64, 2, 8, 28, 93];\n`);

cLogRed(`1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
Do not use numbers to reference the last element, find it programmatically.
ages[7] – ages[0] is not allowed!`);
console.log(`(ages[ages.length - 1]) - ages[0] = ${ages[ages.length - 1] - ages[0]}\n`);

cLogRed(`1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`);
ages.push(1996);
console.log(`ages.push(1996)\n(ages[ages.length - 1]) - ages[0] = ${ages[ages.length - 1] - ages[0]}\n`);

cLogRed(`1c. Use a loop to iterate through the array and calculate the average age.`);



console.log(`\n\n! ~~~~~        Question 2           ~~~~~ !`);
console.log(`\n\n! ~~~~~        Question 3           ~~~~~ !`);
console.log(`\n\n! ~~~~~        Question 4           ~~~~~ !`);
console.log(`\n\n! ~~~~~        Question 5           ~~~~~ !`);
console.log(`\n\n! ~~~~~        Question 6           ~~~~~ !`);
console.log(`\n\n! ~~~~~        Question 7           ~~~~~ !`);
console.log(`\n\n! ~~~~~        Question 8           ~~~~~ !`);
console.log(`\n\n! ~~~~~        Question 9           ~~~~~ !`);
console.log(`\n\n! ~~~~~        Question 10          ~~~~~ !`);
console.log(`\n\n! ~~~~~        Question 11          ~~~~~ !`);
console.log(`\n\n! ~~~~~        Question 12          ~~~~~ !`);
console.log(`\n\n! ~~~~~        Question 13          ~~~~~ !`);



