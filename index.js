const express = require("express");

const app = express();
const PORT = 8081;

// Middleware
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running :-)",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});