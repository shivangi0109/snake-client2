const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle Messages From Server
  // Event handler for when the connection is established
  // connect is a specific event that happens when a successful connection is made
  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    // Send the name to the server
    conn.write("Name: SHI"); // Replace SNK with your three-letter initials
  });

  // Handle Messages From Server
  // Update the connect function to handle incoming data and console.log it for the player.
  // Event handler for receiving data from the server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

module.exports = connect;