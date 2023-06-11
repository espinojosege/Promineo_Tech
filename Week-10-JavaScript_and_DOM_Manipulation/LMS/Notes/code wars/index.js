let numbers2 = [];
let numbers = [];

for (let random = 0; random < 100; random++) {
  numbers.push(getRandomInt(-100, 100));
  numbers2.push(getRandomInt(-100, 100));
}

console.log(numbers, numbers2);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class SmallestIntegerFinder {
  findSmallestInt(arg) {
    return Math.min(...arg);
  }
}

let small = new SmallestIntegerFinder();

//console.log(`\n The smallest Int is: ${small.findSmallestInt(numbers)}`);

function addArray(array) {
  let answer = 0;

  for (let i = 0; i < array.length; i++) {
    answer += array[i];
  }

  return answer;
}

console.log("\n", addArray(numbers));
