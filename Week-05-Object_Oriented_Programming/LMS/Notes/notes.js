const consoleBreak = (breakTitle) => {
    let number = 50;;
    let str = "";
    for (let index = 0; index < number; index++) {
        str += "~";
    }
    let placeHolder = breakTitle.length / 2;

    let startString = str.slice(0, placeHolder * -1);

    return console.log(`\x1b[34m\n${startString} ${breakTitle} ${startString}\n\x1b[0m`);
    
}

consoleBreak("LMS NOTES");

consoleBreak(".map array method");

console.log(`let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
let lengths = names.map((element) => element.length);
console.log(lengths);`);

let names1 = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
// declared an array called names.
let lengths = names.map((element) => element.length);
// declared a new variable that hold the .map method used on names array that creates a new array with the giving function.
console.log(lengths);
// consoles out the new array lengths that was created using the .map method.

consoleBreak(".reduce array method");

console.log(`let sum = lengths.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);`);

let sum = lengths.reduce((accumulator, currentValue) => accumulator + currentValue);
// declared a variable that holds a sum of all the elements in the array lengths by using the .reduce method on array lengths.
console.log(sum);
// consoles out the sum of all the elements in the array of lengths.

console.log(`\nlet strArr = names.reduce((accumulator, currentValue) => accumulator + " " + currentValue);
console.log(strArr);`)

let strArr = names.reduce((accumulator, currentValue) => accumulator + " " + currentValue);
// declared a new variable that holds a concatenated string of all the elements inside the names array using the .reduce method.
console.log(strArr);
// consoles out the string that is all the elements of names concatenated using the .reduce method.

consoleBreak(".forEach array method");

console.log(`names.forEach((element) => console.log(element));`)

names.forEach((element) => console.log(element));
// uses the .forEach method in the array of names to invoke a function on every element. In this instance, the console.log(element) was returned for this function that was invoked on each element in the array names using the .forEach method.

consoleBreak(".filter array method");

console.log(`let evens = names.filter((element) => element.length % 2 == 0);
console.log(evens);`)

let evens = names.filter((element) => element.length % 2 == 0);
// declared a new variable called evens that holds an array that was created using the .filter method. The filter method returns an array if the invoked function which is a Boolean comparator returns true, then it is added to a new array called the name of the variable which the .filter method was invoked.
console.log(evens);
// consoles out the new array that was created using the .filter method invoked on the names array.

consoleBreak(".splice array method");

console.log(`let removedElement = names.splice(0, 1);
console.log(removedElement);`)

let removedElement = names.splice(0, 1);
// declared new variable which holds an element that was removed from it's array using the .splice method.
console.log(removedElement);
// consoles out the element that was removed from the array using the .splice method.


consoleBreak(".every array method");

let fullName = "Mary" + " " + "Brown";
let gradesArray = [100, 79, 80, 90, 100, 55];
const isPassing = (currentValue) => currentValue >= 70;

console.log("Student: " + fullName);
console.log("Grades: ");
for (let i = 0; i < gradesArray.length; i++) {
  console.log("\t" + (i + 1) + ": " + gradesArray[i]);
}
console.log("Evaluation: ");

if (gradesArray.every(isPassing)) {
  console.log("\tEvery grade is a passing grade (>= 70)!");
} else {
  console.log("\tNot all grades are passing.  A passing grade is >= 70!\n");
}