# Book Store Backend 

This is the documentation for  component of the Book Store. It is built using TypeScript, Express.js, Zod validation, and Postgres and Knex.

---I utilized Knex for SQL queries , which I had not used before.


## API Endpoints

### Author
- GET /authors
- GET /authors/:id
- POST /authors
- PUT /authors/:id
- DELETE /authors/:id

### Book
- GET /books
- GET /books/:id
- POST /books
- PUT /books/:id
- DELETE /books/:
- GET /authors/:id/books: Retrieve a list of all books written by a specific author
- GET /books/author/:id: Retrieve a list of all books by a specific author.


### Author Json
## post
{
  "name": "Bijoy",
  "bio": "British author, best known for the Harry Potter series.",
  "birthdate": "1965-07-31"
}


## put 
{
  "name": "Bijoy Das",
  "bio": "British author, best known for the Harry Potter series.",
  "birthdate": "1965-07-31"
}



### Book Json

## post
{
  "name": "Bijoy",
  "bio": "British author, best known for the Harry Potter series.",
  "birthdate": "1965-07-31"
}


## put 
{
  "name": "Bijoy Das",
  "bio": "British author, best known for the Harry Potter series.",
  "birthdate": "1965-07-31"
}



- project run "yarn start" this command