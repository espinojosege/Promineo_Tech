let weight = 230; // lbs
let height = 73;  // 6' 1"  in inches
const METRIC_CONVERSION = 703;

// Calculation: [150 ÷ (65)2] x 703 = 24.96
let bmi = weight / (height * height) * METRIC_CONVERSION;
                 // Math.pow(height, 2)

console.log('Your weight is: ' + weight + 'lbs');
console.log('Your height is: ' + height + 'in');
console.log('BMI: ' + bmi);

//If less than 18.5, then underweight
if (bmi < 18.5) {
  console.log('You are underweight.');
}
//If less than 24.9, but greater than or equal to 18.5 then normal or healthy
//else if ((bmi < 24.9) && (bmi >= 18.5)) {
else if (bmi < 24.9) {
  console.log('You are normal! Good job!');
}
//If less than 29.9, but greater than or equal to 25.0 then overweight
//else if ((bmi < 29.9) && (bmi >= 25.0)) {
else if (bmi < 29.9) {
  console.log('You are overweight.');
}
//If less than 39.9, but greater than or equal to 30.0 then obese
//else if ((bmi < 39.9) && (bmi >= 30.0)) {
else if (bmi < 39.9) {
  console.log('Your are obese');
}
//If greater than or equal to 40, then morbidly obese
else {
  console.log('You are morbidly obese.');
}

console.log('------------------------');
/*
// This won't work!
switch(bmi) {
  case 18.5:
    console.log('You are underweight.');
    break;
  case 24.9:
    console.log('You are normal! Good job!');
    break;
  case 29.9:
    console.log('You are overweight.');
    break;
  case 39.8:
  case 39.8999999999:
  case 39.9:
    console.log('You are obese.');
    break;
  default: 
    console.log('You are morbidly obese.');
    break;
}
*/