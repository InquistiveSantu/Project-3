# Project-3
Here we create a server >> This is storing certain Book Data.
                        >> User here register it.
                        >> Subscribe for a certain time.(Subscribers)
Hello! This is a Book Record Management for API server Library system or management of records and for manual books.

## Fine System
If a user take a book on 05/02/2025 and validation is 08/06/2025
if he delays 19/06/2025
so per day fine is 10INR then it will be 11*10 = 110
Also missing the renewal date you have to charge 100 rpuess.

## Subscription System [Types]
User have three type of Subscription
1) Three Months Subscription (Basic Package)
2) Six Months Subscription (Standard Package)
3) Twelve Months Subscription (Prmium Package)

## /users/subscription details/{id}
GET: Get user subscription Details
    >> Date of subscription
    >> Valid time
    >> If fine is available or not
# Routes and Endpoints
# /Users
Post: Create a new user  // something like total new
Get: Here all the information of an user
Here we found all the user information
//done

## /user/{id}
For single user information i pass certain id
GET: Get a single user by passing id
PUT: I want to update or change user minimal information by ID
//done
DELETE: DELETE by a user id ((check he/she still have an issued book) && (whether is there any fine to paid))

## /books 
GET: Get all the books //allow retrieving all books
POST: Create or add a new book 

## /books/{id}
GET: Get a specific book by id
PUT: Update a book by id

## /books/issued
GET: Retrieves all currently issud books via Get request
## /books/issued/with fine
GET: Get all issued books with their fine

## npm init
## npm i nodemon --save-dev








