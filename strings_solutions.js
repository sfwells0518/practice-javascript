// 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).
var firstName = "Grace";
var lastName = "Hopper";
console.log(firstName + " " + lastName);

// 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the ${} operator).
var firstName = "Beyonce";
var lastName = "Knowles";
console.log(`${firstName} ${lastName}`);

// 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".
var word = window.prompt("Enter a word:");
if (word === "marco") {
  console.log("polo");
}

// 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).
var color1 = "red";
var color2 = "green";
var color3 = "blue";
console.log("My favorite colors are " + color1 + ", " + color2 + ", and " + color3 + ".");

// 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the ${} operator).
var color1 = "red";
var color2 = "green";
var color3 = "blue";
console.log(`My favorite colors are ${color1}, ${color2}, and ${color3}.`);

// 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."
var name = window.prompt("What is your name?");
if (name !== "Santa") {
  console.log("You're not Santa.");
}

// 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).
var bookTitle = "Practical Object-Oriented Design in Ruby";
var bookAuthor = "Sandi Metz";
console.log("The author of " + bookTitle + " is " + bookAuthor + ".");

// 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the ${} operator).
var bookTitle = "Practical Object-Oriented Design in Ruby";
var bookAuthor = "Sandi Metz";
console.log(`The author of ${bookTitle} is ${bookAuthor}`);

// 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"
var password = window.prompt("Enter the password: ");
if (password === "Joshua") {
  console.log("Shall we play a game?");
} else {
  console.log("Access denied");
}

// 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).
var city1 = "Chicago";
var city2 = "New York";
var city3 = "San Francisco";
console.log(city1 + ", " + city2 + ", and " + city3 + " are three major cities in the United States.");
