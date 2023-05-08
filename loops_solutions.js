// 1. Write a while loop to print the numbers 1 through 10.
var number = 1;
while (number <= 10) {
  console.log(number);
  number = number + 1;
}

// 2. Write a while loop that prints the word "hello" 5 times.
var count = 0;
while (count < 5) {
  console.log("hello");
  count = count + 1;
}

// 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".
while (true) {
  var input = window.prompt("Enter a word: ");
  if (input === "stop") {
    break;
  }
}

// 4. Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.
var number = 0;
while (number <= 100) {
  console.log(number);
  number = number + 5;
}

// 5. Write a while loop that prints the number 9000 ten times.
var count = 0;
while (count < 10) {
  console.log(9000);
  count = count + 1;
}

// 6. Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.
while (true) {
  var input = window.prompt("Enter a number: ");
  if (parseInt(input) > 10) {
    break;
  }
}

// 7. Write a while loop that prints the numbers 50 to 70.
var number = 50;
while (number <= 70) {
  console.log(number);
  number = number + 1;
}

// 8. Write a while loop that prints the phrase "Around the world" 144 times.
var count = 0;
while (count < 144) {
  console.log("Around the world");
  count = count + 1;
}

// 9. Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.
while (true) {
  var input = window.prompt("Enter a word: ");
  if (input.length > 5) {
    break;
  }
}

// 10. Write a while loop that prints the even numbers from 2 to 40.
var number = 2;
while (number <= 40) {
  console.log(number);
  number = number + 2;
}
