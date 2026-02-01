const express = require("express");
const { users} = require("./data/users.json");

const app = express();
const PORT = 8081;

app.use(express.json());

/**
 * Home Route
 */
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running :-)",
    data: "hey",
  });
});

/**
 * GET /users  → EXACT OUTPUT LIKE YOUR VIDEO
 */
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

/**
 * 404 Handler (Express 5 Safe)
 */
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
