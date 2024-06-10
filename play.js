const connect = require('./client.js');
const setupInput = require("./input");

console.log("Connecting ...");

let connection = connect(); // Store the connection object in a variable.
setupInput(connection);