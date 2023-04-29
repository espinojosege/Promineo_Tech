const numbers = [
  353, 799, 616, 171, 397, 586, 207, 841, 350, 597, 809, 462, 194, 172, 330, 80,
  398, 98, 258, 869, 286, 224, 129, 588, 329, 278, 194, 601, 90, 375, 212, 290,
  279, 827, 830, 371, 525, 919, 781, 916, 600, 286, 74, 866, 427, 647, 486, 543,
  158, 847,
];

// Write a method that will find the minimum value in the array of numbers.
// Expected value: 74


// Write a method that will find the maximum value in the array of numbers.
// Expected value: 919
function findMaxValue(numbers) {
  let maxValue = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (maxValue < numbers[i]) {
      maxValue = numbers[i];
    }
  }
  return maxValue;
}
let maximum = findMaxValue(numbers);
console.log("The maximum is " + maximum);

// Write a method that will calculate the total of the values in the array of numbers.
// Expected value: 22565
let sum = 0;
for (i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// Write a method that will calculate the average of the values in the array of numbers.
// Expected value: 451.3

let avg = 0;
for (i = 0; i < numbers.length; i++) {
  avg += numbers[i];
}
console.log(avg / numbers.length);

// Write a method that will return an array of 50 numbers that
// are evenly divisibly by 7.

function multiplesOfX(number) {
    let multiples = []
    for (let index = 1; index < 50; index++) {
        let multiple = number * index;
        multiples.push(multiple)
    }
    return multiples
}

let multiplesOf7 = multiplesOfX(7);
console.log(multiplesOf7);

// Write a method that takes the height and width of a rectangle
// and draws a solid square to the console.
//
// *****
// *****
// *****
// *****
// *****
//

// Write a method that takes the height and width of a rectangle
// and draws an outline to the console.
//
// *****
// *   *
// *   *
// *   *
// *****
//

// Would you rather...get a penny doubled every day for 30 days, or $10,000 every day?
// * Write a method that will take the day and return the total amount of money
//   you'd have if you started with a penny that doubled every day.
//
//   For example: If calling your method with 3 days, the result should be:
//                day1    day2    day3
//                $0.01 + $0.02 + $0.04 = $0.07
//
// * Write a method that will take the day and return the total amount of money
//   you'd have if you got $10000 per day.
//
//   For example: If calling your method with 3 days, the result should be:
//                $10000 + $10000 + $10000 = $30000
//
// Output the results for 30 days.
//
// For example:
//
//   Penny per Day Doubled vs Fixed Amount Per Day
//   [  ]    $        0.01    $    10000.00
//   [ 1]    $        0.02    $    20000.00
//   [ 2]    $        0.04    $    30000.00
//   [ 3]    $        0.08    $    40000.00
//   [ 4]    $        0.16    $    50000.00
//   [ 5]    $        0.32    $    60000.00
//   ...
