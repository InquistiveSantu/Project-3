const express = require("express");
const { users} = require("./data/users.json");
const { books } = require("./data/books.json");


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
/**
 * GET /users  → Get all users
 */
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,   
  });
});

/**
 * which user i fetch by id f
  //http://localhost:8081/users/4
 * Route:/users/:id
 * Method:Get we are fetching certain information from the server
 * Description:Get single users by their id
 * Access:Public
 * Parameters:Id
 */
app.get('/users/:id',(req,res)=> {  // In request we are passing id
  const {id} = req.params;   //params meams parameter like id
const user = users.find((each)=>each.id ===id);
if(!user){
  return res.status(404).json({
    success: false,
    message: "User Doesn't Exist !!"
  });
} else{
return res.status(200).json({
  success:true,
  message: "User Found",
  data: user,
});
}
});
/**
 
  //http://localhost:8081/users
 * Route:/users
 * Method:POST // we are passing certain information to the server
 * Description:Creating a new user
 * Access:Public
 * Parameters:NONE
 */

app.post("/users", (req, res) => {
  const { id, name, surname, email, subscriptionType, subscriptionDate } = req.body;

  const user = users.find((each) => each.id === id);

  // If user already exists
  if (user) {
    return res.status(404).json({
      success: false,
      message: "User With The ID Exists",
    });
  }

  // Push (insert) new user
  users.push({
    id,
    name,
    surname,
    email,
    subscriptionType,
    subscriptionDate,
  });

  // Success response
  return res.status(201).json({
    success: true,
    message: "User created successfully",
    data: users,
  });
});
/**
 
  //http://localhost:8081/users
 * Route:/users/:id
 * Method:PUT
 * Description:Updating a user by ID
 * Access:Public
 * Parameters:Id
 */
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  // Check if user exists
  const user = users.find((each) => each.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Doesn't Exist !!",
    });
  }

  // Update user data
  const updateUserData = users.map((each) => {
    if (each.id === id) {
      return {
        ...each,
        ...data,
      };
    }
    return each;
  });

  return res.status(200).json({
    success: true,
    message: "User Updated !!",
    data: updateUserData,
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
