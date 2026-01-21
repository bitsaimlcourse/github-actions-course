// Test file with intentional security vulnerabilities for CodePulse testing

// SQL Injection vulnerability
function getUser(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// XSS vulnerability - innerHTML with user input
function displayMessage(userInput) {
  document.getElementById("output").innerHTML = userInput;
}

// Hardcoded credentials
const API_KEY = "sk-1234567890abcdef";
const password = "admin123";
const dbPassword = "root:password123@localhost";

// Command injection
const { exec } = require("child_process");
function runCommand(userInput) {
  exec("ls " + userInput, (err, stdout) => {
    console.log(stdout);
  });
}

// Eval with user input
function calculate(expression) {
  return eval(expression);
}

// Insecure random for security purposes
function generateToken() {
  return Math.random().toString(36);
}

// Path traversal
const fs = require("fs");
function readFile(filename) {
  return fs.readFileSync("/data/" + filename);
}

// Prototype pollution
function merge(target, source) {
  for (let key in source) {
    target[key] = source[key];
  }
}
