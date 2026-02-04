const express = require("express");
const {books} = require("../data/books.json");
const { users } = require("../data/users.json");
const router = express.Router();

/**
 * ============================================================
   Route: /books
 * Method: GET
 * Description: Getting all the books
 * Access: Public
 * Parameters: None
 * ============================================================
 */
  router.get("/",(req,res)=>{
    res.status(200).json({success:true,message:"Got all the books",data:books});
  })



  /* ## /books/issued
 Retrieves all currently issud books via Get request
*/

  /**
 * Route: /books/issued
 * Method: GET
 * Description: Get all issued books
 * Access: Public
 * Parameters: none
   */
  router.get("/issued/by-user", (req, res) => {
  const usersWithTheIssuedBook = users.filter((each) => {
    if (each.issuedBook) return each;
  });

  const issuedBooks = [];

  usersWithTheIssuedBook.forEach((each) => {
    const book = books.find((book) => book.id === each.issuedBook);

    book.issuedBy = each.name;
    book.issuedDate = each.issuedDate;
    book.returnDate = each.returnDate;

    issuedBooks.push(book);
  });

  if (issuedBooks.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No Book Have Been Issued Yet..",
    });
  }

  return res.status(200).json({
    success: true,
    message: "user with the issued book",
    data: issuedBooks,
  });
});
  
  
  
  /**
 * Route: /books/:id
 * Method: GET
 * Description: Get books by their ID
 * Access: Public
 * Parameters: id
   */
  router.get("/:id", (req, res) => {
  const { id } = req.params;

  const book = books.find((each) => each.id === id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "book Doesn't Found !!",
    });
  }

  return res.status(200).json({
    success: true,
    message: "book Found by their Id",
    data: book,
  });
});












module.exports = router;