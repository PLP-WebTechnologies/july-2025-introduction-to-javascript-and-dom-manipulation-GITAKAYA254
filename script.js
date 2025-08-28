// 🎯 Part 1: Mastering JavaScript Basics
// 👉 Practice Questions:

// Declare three variables: name, age, and isStudent. Log them to the console.

const firstName = "Achin";
const age = 33;
const isStudent = false;
console.log(firstName, age, isStudent);

// Write a program that asks the user for their age and outputs:
// "You are an adult" if age ≥ 18
// "You are a teenager" if age is between 13–17
// "You are a child" if age < 13

const askUserAge = prompt("How old are you sir?");
console.log(askUserAge);
if (askUserAge >= 18) {
  console.log("You are an adult");
} else if (askUserAge >= 13 && askUserAge <= 17) {
  console.log("You are a teenager");
} else if (askUserAge < 13) {
  console.log("You are a child");
} else {
  console.log("invalid input");
}

// Create two numbers (a and b). Print their sum, difference, product, and quotient.
const a = 5;
const b = 2;
const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a % b;
console.log(sum, difference, product, quotient);

// Write a program that checks if a number is even or odd.

if (a % 2 == 0) {
  console.log("we have an even number");
} else {
  console.log("It is an odd number");
}

// ❤️ Part 2: JavaScript Functions — The Heart of Reusability
// 👉 Practice Questions:

// Write a function greet(name) that prints "Hello, [name]!".

const greet = function (firstName) {
  return `Hello, [${firstName}]!`;
};
console.log(greet("Martin"));

// Create a function calculateArea(width, height) that returns the area of a rectangle.
function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(45, 75));

// Write a function isEven(number) that returns true if the number is even, and false if odd.
const isEven = (number) => {
  return number % 2 === 0;
};

console.log(isEven(72)); // true
console.log(isEven(13)); // false

// Create a function formatString(str) that capitalizes the first letter of the string.
function formatString(str) {
  if (str.length == 0) {
    return ""; // handles an empty string input
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(formatString("hello"));

// Write a function getMax(a, b, c) that returns the largest of three numbers.
function getMax(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else if (c > a && c > b) {
    console.log(c);
  }
}
getMax(6, 8, 2);

// better way
function getMaxBetter(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}
console.log(getMaxBetter(9, 16, 24));

// 🔁 Part 3: JavaScript Loops — Embrace the Power of Repetition!
// 👉 Practice Questions:

// Use a for loop to print numbers from 1 to 10.

for (i = 0; i <= 10; i++) console.log(i);

// Use a while loop to print numbers from 10 down to 1 (countdown).
let count = 10;
while (count > 1) {
  console.log(count);
  count--;
}

// Given an array ["apple", "banana", "cherry"], loop through it and log each fruit.
const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit) => {
  console.log(fruit);
});
// Write a program that calculates the sum of numbers from 1 to 100.

let total = 0;
for (i = 1; i <= 100; i++) {
  total += i;
}
console.log(`the sum is ${total}`);

// Create an array of 5 numbers and use a loop to find the largest number.
const numArr = [45, 45, 65, 76, 34];
let maxNum = numArr[0];
for (let i = 1; i < +numArr.length; i++) {
  if (numArr[i] > maxNum) {
    maxNum = numArr[i];
  }
}
console.log(`The largest number is : ${maxNum}`);

// 🌐 Part 4: Mastering the DOM with JavaScript
// 👉 Practice Questions:

// Create a button in index.html. When clicked, it changes the page background color.
const button = document.getElementById("btn");
function changeBackground() {
  // have random colors
  const colors = [
    "lightblue",
    "lightgreen",
    "lightcoral",
    "lightyellow",
    "lightpink",
  ];
  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  //apply
  document.body.style.backgroundColor = randomColors;
}
btn.addEventListener("click", changeBackground);
// Add an <h1> tag with text "Welcome". Write JavaScript to change its text to "Hello, JavaScript!".
const h1 = document.getElementById("text");
const h1Btn = document.getElementById("h1_button");
function changeText() {
  h1.textContent = "Hello, Javascript";
}
h1Btn.addEventListener("click", changeText);
// Create an input field and a button. When the button is clicked, display the text entered inside a <p> tag.
const userInput = document.getElementById("userInput");
const inputBtn = document.getElementById("showBtn");
const paragraph = document.getElementById("display");
function displayText() {
  const text = userInput.value;
  paragraph.textContent = text;
}
inputBtn.addEventListener("click", displayText);
// Add three <li> items in an unordered list. Write JavaScript to add a new item "Mango" when a button is clicked.

const list = document.getElementById("list");

// Add a new item "Mango" to the list when a button is clicked
const addItemBtn = document.getElementById("addItemBtn");
function addMango() {
  const li = document.createElement("li");
  li.textContent = "Mango";
  list.appendChild(li);
}
addItemBtn.addEventListener("click", addMango);

// Toggle the "highlight" class on a paragraph when it’s clicked
const highlightPara = document.getElementById("myPara");
highlightPara.addEventListener("click", function () {
  highlightPara.classList.toggle("highlight");
});
