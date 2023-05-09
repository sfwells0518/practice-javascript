// May 8, 2023 - Class Practice Exercises:

// # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
printNumbersDivisibleByThree();

// # Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function (string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
printEveryOtherItem(["a", "b", "c", "d", "e"]);

// # Write a method that accepts an array of numbers and returns the sum.
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
}
console.log(computeSum([2, 4, 5]));

// # Start with the hash: city_populations = {chi: 2700000}
var cityPopulations = { chi: 2700000 };
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000; // same as cityPopulations["sf"]
console.log(cityPopulations);

// # Write a function that prints out every number from 1 to 100.

function printEveryNumberToOneHundred() {
  var index = 1;
  while (index <= 100) {
    console.log(index);
    index = index + 1;
  }
}

printEveryNumberToOneHundred();

// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

function printEveryOtherNumberToOneHundred() {
  var index = 1;
  while (index <= 100) {
    console.log(index);
    index = index + 2;
  }
}

printEveryOtherNumberToOneHundred();

// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

function countOf55s(numbers) {
  var count = 0;
  numbers.forEach(function (number) {
    if (number === 55) {
      count++;
    }
  });
  console.log(count);
}
var myNumbers = [2, 4, 6, 32, 2, 55, 43, 55, 55, 123];

countOf55s(myNumbers);

// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}

var itemAmounts = { chair: 5, table: 2 };

console.log(itemAmounts.table);

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}

var itemAmounts = { chair: 5, table: 2, desk: 7 };

console.log(itemAmounts);

// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(number) {
  let result = 1;
  for (let index = 1; index <= number; index++) {
    result *= index;
  }
  return result;
}

var number = 6;
console.log(factorial(6));

// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

function printSums(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      let sum = array1[i] + array2[j];
      console.log(sum);
    }
  }
}
var array1 = [1, 5, 10];
var array2 = [100, 500, 1000];
printSums(array1, array2);

//--------------------------------------------------------------------------------------------------------------
// May 9, 2023 - Class Practice Exercises:

// 1. Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

function everyOtherString(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}
var input = ["a", "b", "c", "d", "e", "f"];
var output = everyOtherString(input);
console.log(output);

// 2. Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

function findMax(numbers) {
  var max = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
var input = [5, 4, 8, 1, 2];
var output = findMax(input);
console.log(output);

// 3. Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorialFive(number) {
  let result = 1;
  for (let index = 1; index <= number; index++) {
    result *= index;
  }
  return result;
}
var number = 5;
console.log(factorialFive(5));

// 4. Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

function reverseArray(numbers) {
  var reversed = [];
  for (var i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
  }
  return reversed;
}
var input = [1, 2, 3, 4, 5];
var output = reverseArray(input);
console.log(output);

// 5. Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

function comboSums(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      let sum = array1[i] + array2[j];
      console.log(sum);
    }
  }
}
var array1 = [1, 5, 10];
var array2 = [100, 500, 1000];
comboSums(array1, array2);