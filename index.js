const express = require("express");

const userRouter = require("./routes/users.js");
const booksRouter = require("./routes/books.js");

const app = express();
const PORT = 8081;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running :-)",
    data: "hey",
  });
});

// User routes
app.use("/users", userRouter);

// Book routes (enable after completing)
app.use("/books", booksRouter);

/**
 * 404 Handler
 */
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
