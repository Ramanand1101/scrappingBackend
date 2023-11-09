// Import the express framework
const express = require("express");

// Import the connection object from the database configuration file
const { connection } = require("./configs/db");

// Import the scrapeRouter from the domainRouter file
const { scrapeRouter } = require("./routes/domainRouter");

// Import the CORS module
const cors = require("cors");

// Load environment variables from a .env file into process.env
require("dotenv").config();

// Create an instance of the express application
const app = express();

// Add middleware to parse incoming request bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Set up a route to handle GET requests to the root URL
app.get("/", (req, res) => {
  res.send(`
          <h1>Welcome to the Website word counter application.</h1>
    `);
});

// Use the scrapeRouter for requests with the /info path
app.use("/info", scrapeRouter);

// Define the port for the server to listen on, using either the provided PORT environment variable or defaulting to 3000
const PORT = process.env.PORT || 3000;

// Start the server and handle connections
app.listen(PORT, async () => {
  try {
    // Attempt to connect to the database when the server starts
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    // Log any errors that occur during the database connection attempt
    console.log(err.message); 
  }
  // Output a message to indicate that the server is running and listening on the specified port
  console.log(`Server is running at port ${PORT}`);
});
