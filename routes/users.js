const express = require("express");
const { users } = require("../data/users.json");
const router = express.Router();

/**
 * ============================================================
 * GET ALL USERS
 * Route: /
 * Method: GET
 * Description: Fetches the list of all users
 * Access: Public
 * Parameters: None
 * ============================================================
 */
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});


/**
 * ============================================================
 * GET A USER BY ID
 * Example: http://localhost:8081/users/4
 *
 * Route: /:id
 * Method: GET
 * Description: Fetch a single user using their ID
 * Access: Public
 * Parameters: id
 * ============================================================
 */
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((each) => each.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Doesn't Exist !!",
    });
  }

  return res.status(200).json({
    success: true,
    message: "User Found",
    data: user,
  });
});


/**
 * ============================================================
 * CREATE A NEW USER
 * Example: POST http://localhost:8081/users
 *
 * Route: /
 * Method: POST
 * Description: Adds a new user to the system
 * Access: Public
 * Parameters: None
 * Body Fields:
 *   id, name, surname, email, subscriptionType, subscriptionDate
 * ============================================================
 */
router.post("/", (req, res) => {
  const { id, name, surname, email, subscriptionType, subscriptionDate } = req.body;

  // Check duplicate ID
  const existingUser = users.find((each) => each.id === id);

  if (existingUser) {
    return res.status(404).json({
      success: false,
      message: "User With This ID Already Exists",
    });
  }

  users.push({
    id,
    name,
    surname,
    email,
    subscriptionType,
    subscriptionDate,
  });

  return res.status(201).json({
    success: true,
    message: "User created successfully",
    data: users,
  });
});


/**
 * ============================================================
 * UPDATE A USER BY ID
 * Example: PUT http://localhost:8081/users/1
 *
 * Route: /:id
 * Method: PUT
 * Description: Updates user details by ID
 * Access: Public
 * Parameters: id
 * Body:
 *   data (fields to update)
 * ============================================================
 */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const user = users.find((each) => each.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Doesn't Exist !!",
    });
  }

  const updatedUsers = users.map((each) =>
    each.id === id ? { ...each, ...data } : each
  );

  return res.status(200).json({
    success: true,
    message: "User Updated !!",
    data: updatedUsers,
  });
});


/**
 * ============================================================
 * DELETE A USER BY ID
 * Example: DELETE http://localhost:8081/users/2
 *
 * Route: /:id
 * Method: DELETE
 * Description: Removes a user from the system using their ID
 * Access: Public
 * Parameters: id
 * ============================================================
 */
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((each) => each.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Doesn't Exist !!",
    });
  }

  const index = users.indexOf(user);
  users.splice(index, 1);

  return res.status(200).json({
    success: true,
    message: "User deleted successfully!",
    data: users,
  });
});


module.exports = router;
