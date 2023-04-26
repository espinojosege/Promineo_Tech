function cLogRed(str) {                             // created function called 'cLogRed' with one parameter
                                                    // a string. Returns a console.log function
    return console.log('\x1b[31m%s\x1b[0m', str);   // that logs the string red. The function takes in 
                                                    // 2 parameters, the output color and the string.
};                                                  // 1st parameter: '\x1b[31m' is the color red, 
                                                    // '%s' is a placeholder for the string, '\x1b[0m' 
                                                    // resets the color on exit
                                                    // 2nd parameter: the string which will be placed 
                                                    // inside the first parameter. Will replace '%s' when code logs to console.
                                                    // can also be written as followed: console.log('\x1b[31mString\x1b[0m')
                                                    
let ages = [3, 9, 23, 64, 2, 8, 28, 93];            // create array called ages with 8 objects.
console.log(`\n! ~~~~~     Week 04 Assignment      ~~~~~ !`)
console.log(`\n\n! ~~~~~        Question 1           ~~~~~ !`)
cLogRed(`\n1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`);
console.log(`let ages = [3, 9, 23, 64, 2, 8, 28, 93];\n`);

cLogRed(`1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
Do not use numbers to reference the last element, find it programmatically.
ages[7] – ages[0] is not allowed!`);
console.log(`(ages[ages.length - 1]) - ages[0] = ${ages[ages.length - 1] - ages[0]}\n`);
// created a subtraction problem that subtracts the first element in an array from the last element in the array.
// array[array.length-1] = last item in the array
// array[0] = first element of the array.
// this achieves a more dynamic way of finding the last element on the array without knowing the length of the array.

cLogRed(`1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`);
ages.push(1996);
// array.push() adds a new item to the end of an array. Used this to add a new element to the array in a dynamic way without using array[9] = newValue
console.log(`ages.push(1996)\n(ages[ages.length - 1]) - ages[0] = ${ages[ages.length - 1] - ages[0]}\n`);
// with the new element, created the same subtraction problem and solved for first element minus last element.

cLogRed(`1c. Use a loop to iterate through the array and calculate the average age.`);
let sumOfAges = 0;
// declared a new variable called 'sumOfAges' to represent the sum of all elements in the array ages.
for (let index = 0; index < ages.length; index++) {
    sumOfAges += ages[index];
};
// used a for loop to iterate through all the elements and let 'sumOfAges' equal the sum of each element it iterates. 
// the += means that 'sumOfAges' will add the current element and then re-assign itself as the sum of 'sumOfAges' + ages[index]
let averageOfAges = sumOfAges / ages.length;
// declared new variable called 'averageOfAges' which divides the sum of all the elements in the array ('sumOfAges') to the length of the array(ages.length).
console.log(`let sumOfAges = 0;
for (let index = 0; index < ages.length; index++) {
    sumOfAges += ages[index];
}
let averageOfAges = sumOfAges / ages.length
The average age of ages array is = ${averageOfAges}`);

console.log(`\n\n! ~~~~~        Question 2           ~~~~~ !\n`);
cLogRed(`2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.`);
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(`let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];`);
cLogRed(`\n2a. Use a loop to iterate through the array and calculate the average number of letters per name.`);
let nameLengths = [];
// declared a new empty array which will hold the number of letters of each element
let sumOfNameLengths = 0;
// declared a new variable which will add up all the numbers inside of 'nameLengths' array.
for (let index = 0; index < names.length; index++) {
    nameLengths[index] = names[index].length;
    sumOfNameLengths += nameLengths[index]
};
// created a for loop that assigns the number of letters of each element to the array 'nameLengths'
let averageOfSumOfNameLengths = sumOfNameLengths / nameLengths.length;
// declared a new variable that evaluates the average number of letters per name from array 'names'
// by diving the 'sumOfNameLengths', which holds the sum of the number of letters per name, with the length of name array.
console.log(`let nameLengths = [];
let sumOfNameLengths = 0;
for (let index = 0; index < names.length; index++) {
    nameLengths[index] = names[index].length;
    sumOfNameLengths += nameLengths[index]
};
let averageOfSumOfNameLengths = sumOfNameLengths / nameLengths.length;
The average number of letters per name from names = ${averageOfSumOfNameLengths}`);

cLogRed(`\n2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. `);
let stringNames = "";
// declared a variable named 'stringNames' that will hold all the elements in the array as a string.
for (let index = 0; index < names.length; index++) {
        stringNames += names[index] + " ";
}
// created for loop to concatenate all the strings in 'name' array separated by a space.
console.log(`let stringNames = "";
for (let index = 0; index < names.length; index++) {
        stringNames += names[index] + " ";
}
'names' array concatenated = ${stringNames}`);

console.log(`\n\n! ~~~~~        Question 3           ~~~~~ !`);
cLogRed(`\n3. How do you access the last element of any array?`);
console.log(`To access the last element of an array you would use the method '.length'.
For example array.length would be the last element of an array.`);

console.log(`\n\n! ~~~~~        Question 4           ~~~~~ !`);
cLogRed(`\n4. How do you access the first element of any array?`);
console.log(`To access the first element of an array you would use array[0].`);

console.log(`\n\n! ~~~~~        Question 5           ~~~~~ !`);
cLogRed(`\n5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:
let names = ["Kelly", "Sam", "Kate"];   //starting with this array
let nameLengths = [5, 3, 4];            //create this new array`);
console.log(`let nameLengths = [];
for (let index = 0; index < names.length; index++) {
    nameLengths[index] = names[index].length;
};
The number of letters per name from 'names' in an array is nameLengths = [${nameLengths}]`);

console.log(`\n\n! ~~~~~        Question 6           ~~~~~ !`);
cLogRed(`\n6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`);
console.log(`let nameLengths = [${nameLengths}];
let sumOfNameLengths = 0;
for (let index = 0; index < nameLengths.length; index++) {
    sumOfNameLengths += nameLengths[index]
};
The sum from array nameLengths = ${sumOfNameLengths}`);

console.log(`\n\n! ~~~~~        Question 7           ~~~~~ !`);
cLogRed(`\n7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).`);
function repeatWordByX(word, n) { //    created function called 'repeatWordByX' that takes two parameters, 'word' and 'n'
    let str = "";               ///     declared an empty string where the words will be concatenated.
    for (let index = 0; index < n; index++) {
        str += word;            ///     created a for loop to iterated by the argument provided in the parameter 'n'. This will iterate the loop 'n' times.
                                ///     it will add itself as a string in variable 'str'
    };
    return str;                 ///     The completed string will be returned in variable 'str'
};
console.log(`function repeatWordByX(word, n) {
    let str = "";
    for (let index = 0; index < n; index++) {
        str += word;
    };
    return str;
};
repeatWordByX("hello", 3);
OUTPUT = ${repeatWordByX("hello", 3)}`);
//  I have called upon the function with the
//  arguments 'hello', and 3, respectively.
//  The output of function call will be 'hellohellohello'

console.log(`\n\n! ~~~~~        Question 8           ~~~~~ !`);
cLogRed(`\n8. Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.`);
function firstLast(firstName, lastName) {
// created function called 'firstLast' with two parameters 'firstName' and 'lastName'
    let fullName = `${firstName} ${lastName}`;
// declared new variable 'fullName' that will hold the concatenation of the two arguments 'firstName' and 'lastName'
    return fullName;
// return the concatenated string 'fullName' and exit the function.
}
console.log(`function firstLast(firstName, lastName) {
    let fullName = \`\${firstName} \${lastName}\`;
    return fullName;
}
firstLast("Jose", "Espino Espino");
OUTPUT = ${firstLast("Jose", "Espino Espino")}
`);

console.log(`\n\n! ~~~~~        Question 9           ~~~~~ !`);
cLogRed(`\n9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`);
function sumGreaterThan100(array) {
// declared a function named 'sumGreaterThan100' that takes one parameter 'array'
    let sum = 0;
// declared new variable that will hold the sum of all the elements in the array.
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
// created a for loop to iterate all the elements in the array and storing them in variable 'sum'
    if (sum > 100) {
        return true
// created if statement to check if 'sum' is greater than 100
// if true, returns true
    } else {
        return false
// if false, returns false.
    }
}
console.log(`function sumGreaterThan100(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }

    if (sum > 100) {
        return true
    } else {
        return false
    }
}
console.log(sumGreaterThan100(ages));
OUTPUT = ${sumGreaterThan100(ages)}`);

console.log(`\n\n! ~~~~~        Question 10          ~~~~~ !`);
cLogRed(`\n10. Write a function that takes an array of numbers and returns the average of all the elements in the array.`);
function averageOfArray(array) {
// declared new function named 'averageOfArray' that takes one parameter 'array'
    let sumOfArray = 0;
// declared new variable names 'sumOfArray' to store the sum of all the elements in the array.
    for (let index = 0; index < array.length; index++) {
        sumOfArray += array[index];   
    }
// started a for loop to sum all the elements and store them inside of 'sumOfArray'.
    let average = sumOfArray / array.length;
// declared new variable named 'average' which will have the 'sumOfArray' divided by array.length
    return average;
// return the average and exit function.
};
console.log(`function averageOfArray(array) {
// declared new function named 'averageOfArray' that takes one parameter 'array'
    let sumOfArray = 0;
    for (let index = 0; index < array.length; index++) {
        sumOfArray += array[index];   
    }
    let average = sumOfArray / array.length;
    return average;
};
averageOfArray(ages);
OUTPUT = ${averageOfArray(ages)}`);

console.log(`\n\n! ~~~~~        Question 11          ~~~~~ !`);
cLogRed(`\n11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`);
function array1GreaterThanArray2(array1, array2) {
// declared new function named 'array1GreaterThanArray2' that takes two parameters 'array1' and 'array2'
    let array1Average = averageOfArray(array1);
// declared new variable named 'array1Average' that stores the average of array1 by invoking the function averageOfArray()
let array2Average = averageOfArray(array2);
// declared new variable named 'array2Average' that stores the average of array2 by invoking the function averageOfArray()
    if (array1Average > array2Average) {
        return true;
// created an if statement that compares the averages of both arrays and returns true if the average of array1 is greater than the average of array2.
    } else {
        return false;
// if the average of array1 is not greater than the average of array2 it will return false.
    }
};
console.log(`function array1GreaterThanArray2 (array1, array2) {
    let array1Average = averageOfArray(array1);
    let array2Average = averageOfArray(array2);
    if (array1Average > array2Average) {
        return true;
    } else {
        return false;
    }
};
array1GreaterThanArray2(ages, nameLengths);
OUTPUT = ${array1GreaterThanArray2(ages, nameLengths)}`);

console.log(`\n\n! ~~~~~        Question 12          ~~~~~ !`);
cLogRed(`\n12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`);
function willBuyDrink(isHotOutside, moneyInPocket) {
// created new function named 'willBuyDrink' that takes two parameters,
// one boolean and one number.
    if (isHotOutside && moneyInPocket >= 10.50) {
// created an if statement that takes two boolean values and compares them for both to be true using the '&&' comparator.
        return true;
// if both are true, return true
    } else {
        return false
// if one of them or both of them false return false.
    }
};
console.log(`function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket >= 10.50) {
        return true;
    } else {
        return false
    }
};
console.log(willBuyDrink(true, 12));
OUTPUT = ${willBuyDrink(true, 12)}
console.log(willBuyDrink(false, 12));
OUTPUT = ${willBuyDrink(false, 12)}
console.log(willBuyDrink(true, 9));
OUTPUT = ${willBuyDrink(true, 9)}`);

console.log(`\n\n! ~~~~~        Question 13          ~~~~~ !`);
cLogRed(`\n13. Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.`)
console.log(`function cLogRed(str) {                           
    return console.log('\x1b[31m\\x1b[31m\x1b[0m\x1b[33m%s\x1b[0m\x1b[32m\\x1b[0m\x1b[0m', str); 
};
created function called 'cLogRed' with one parameter
a string. Returns a console.log function
that logs the string red. The function takes in 
2 parameters, the output color and the string.
1st parameter: '\x1b[31m\\x1b[31m\x1b[0m' is the color red, 
'\x1b[33m%s\x1b[0m' is a placeholder for the string, '\x1b[32m\\x1b[0m\x1b[0m' 
resets the color on exit
2nd parameter: the string which will be placed 
inside the first parameter. Will replace '%s' when code logs to conso
can also be written as followed: console.log('\x1b[31m\\x1b[31m\x1b[0m\x1b[33mString\x1b[0m\x1b[32m\\x1b[0m\x1b[0m')
This function uses escape characters to change the color of the output text.
the backslash is the escape character. You can also add new lines with
escape characters with backslash+n (\\n)`);

console.log(`\n\n! ~~~~~        END Assignment       ~~~~~ !`);