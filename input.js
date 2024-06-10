// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn; // Assign the conn object to the connection variable

  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput); 
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    // Ctrl + C was pressed, terminate the game
    console.log("Successfully terminated the game...");
    process.exit();
  } else if (key === 'w') {
    console.log("Move: up"); // Log the keypress
    connection.write("Move: up"); // Use the connection object to send the movement command.
  } else if (key === 'a') {
    console.log("Move: left"); // Log the keypress
    connection.write("Move: left");
  } else if (key === 's') {
    console.log("Move: down"); // Log the keypress
    connection.write("Move: down");
  } else if (key === 'd') {
    console.log("Move: right"); // Log the keypress
    connection.write("Move: right");
  } else if (key === 'q') {
    connection.write("Say: Hello!"); // Send a canned message to the server
  } else if (key === 'e') {
    connection.write("Say: I'm having fun!");
  } else if (key === 'r') {
    connection.write("Say: Good Bye!");
  }
};

module.exports = setupInput;
