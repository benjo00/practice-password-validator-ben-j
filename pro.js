const input = require('readline-sync');

let password;
do {
    password = input.question(" Enter password ");
} while (password !== "Eight8Fold")
    console.log("Access granted.");