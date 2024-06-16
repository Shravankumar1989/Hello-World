// Import the Express library, which is used to create web applications in Node.js
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define the port number on which the server will listen for requests
const port = 9000;

// Set up a route for the root URL ('/'). When this route is accessed, the callback function is executed
app.get('/', (req, res) => {
  // Send 'Hello World!' as the response to the client
  res.send('Hello World Node-Js Project!');
  // Print 'Hello World!' to the console
  console.log('Hello World Node-Js Project!');
});