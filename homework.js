"use strict";

// No input verification

// ARRAY: [1,6,23,8,4,8,3,7]

// 1) Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number

function calculateSumofArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function calculateSumofArray2(arr) {
  return arr.reduce((acc, number) => (acc += number));
}

// 2) Create a function that returns sum of first and last elements of given array.

function sumOfFirstLast(arr) {
  return arr[0] + arr[arr.length - 1];
}

// 3) Create a function that takes a number and return factorial of that number.

function factorialLoop(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

function factorialRecursion(n) {
  if (n === 0) {
    return 1;
  } else {
    return factorial(n - 2) * factorial(n - 1);
  }
}
// 4) Create a function that returns given array in reverse order. // no build in functions 

function reverseArray(arr) {
  let returnArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    returnArr[returnArr.length] = arr[i];
  }
  return returnArr;
}

// 5) Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
function transformPatternOne(arr) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i += 2) {
    resultArray.push(arr[i] + arr[i + 1]);
  }
  return resultArray;
}
// 6) For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

function transformPatternTwo(arr) {
  let resultArray = [];
  for (let i = 0; i < arr.length - 1; i += 2) {
    resultArray.push(arr[i] + arr[i + 1]);
  }
  const lastElement = arr[arr.length - 1];
  resultArray.push(lastElement * 2);
  return resultArray;
}

// 7) Create a function the return one random element from given array. // use random function

function returnRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// 8) Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.

function returnLowestRandom(arr, attempts) {
  let lowest = null;
  for (let i = 0; i < attempts; i++) {
    const currentNumber = returnRandom(arr);
    if (lowest == null || currNumber < lowest) {
      lowest = currentNumber;
    }
  }
  return lowest;
}

// 9) Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array.

function rearrange(arr) {
  let arrayCopy = [...arr];
  let resultArray = [];
  while (arrayCopy.length > 0) {
    const randomElement = returnRandom(arrayCopy);
    const randomsIndex = arrayCopy.indexOf(randomElement);
    arrayCopy.splice(randomsIndex, 1);
    resultArray.push(randomElement);
  }
  return resultArray;
}

// 10) Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)

function performRandomOp(arr) {
  let accumulator = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.random() * 2 >= 1) {
      accumulator += arr[i];
    } else {
      accumulator -= arr[i];
    }
  }
  return accumulator;
}

function perfomRandomOp2(arr) {
  return arr.reduce((acc, number) =>
    Math.floor(Math.random() * 2) ? (acc += number) : (acc -= number)
  );
}

// 11) Create a function that will return the current day name in Polish.

function returnPolishDay() {
  const daysInPolish = [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
  ];
  const index = new Date().getDay();
  return daysInPolish[index];
}

// 12) Create a function that tells us how many days till Friday 

function calcDaysToFriday() {
  const today = new Date().getDay();
  const diff = 5 - today;
  return diff >= 0 ? diff : diff + 7;
}

// 13) Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations.

function getCalculateObj(x, y) {
  return {
    add: x + y,
    subtract: x - y,
    multiply: x * y,
    divide: x / y,
  };
}

// TEST CASES:
const testArr1 = [1, 6, 23, 8, 4, 8, 3, 7];
const testArr2 = [1, 6, 23, 8, 4, 8, 3];
console.log(`1) Sum of array is - ${calculateSumofArray(testArr1)}`);
console.log(`2) Sum of first and last element is: ${sumOfFirstLast(testArr1)}`);
console.log(`3) Factorial of n = 9 is: ${factorialLoop(9)}`);
console.log(`4) Reversed array: ${reverseArray(testArr1)}`);
console.log(`5) 6) Array Pattern 1: ${newArrayPatterCombo(testArr1)}
                   Array Pattern 2: ${newArrayPatterCombo(testArr2)}`);
console.log(`7) Random array element: ${returnRandom(testArr1)}`);
console.log(`8) Lowest number from 3 random elements: ${returnLowestRandom(testArr1, 3)}`);
console.log(`9) Array randomly rearranged: ${rearrange(testArr1)}`);
console.log(`10) Result of random +/- calculatoion: ${performRandomOp(testArr1)}`);
console.log(`11) Today in Polish is: ${returnPolishDay()}`);
console.log(`12) Days left till Friday: ${calcDaysToFriday()}`);
const calculator = getCalculateObj(10, 5);
console.log(`13) Calculate obj is:`);
for (const key in calculator) {
  console.log(`${key}: ${calculator[key]}`);
}
