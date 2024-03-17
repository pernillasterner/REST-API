# RESTful API built with Node.js, Express & MongoDB

### Installing dependecies

1. Started the project by running `npm init`. That will create package.json
2. Installing all the dependencies using `npm i <package>`
   - `npm i express mongoose`
     Mongoose interacts with MongoDB
3. Install development dependecies that will not be installed in production by typing `npm i --save-dev dotenv nodemon`
   - dotenv will make it possible to pull in enviromental variables from .env file
   - nodemon will refresh the server everytime changes are made without end it and restart
4. Remove "test" script in package.json and add a new script called `"devStart": "nodemon server.js"`
5. Create server.js
6. Create .env
7. Connect to server
8. Connect to database
9. Use CommonJS to load and configure environment variable.
   Important: CommonJS ensures that the application can securely access sensitive information like database credentials or API keys without hardcodeing them into the source code.
10. Set up server to except .json
11. Setting up routes
    - Create route for subscriber and create file for subscribers
      - Getting All - get('/)
      - Getting One - get('/:id)
      - Creating One - post()
      - Updating One - patch() or put()
      - Deleting One - delete('/:id)
12. Download the extension REST Client to be able to call the RESTful API from VS Code
13. Create route.rest to create requests
14. Create module for subsriber and create a schema
15. Create an async function to get all the subscribers
16. Create an async function to add subsribers
17. Setting up middleware
18. Delete subscibers

## Terminal

### Open the MongoDB shell

https://www.youtube.com/watch?v=ofme2o29ngU

> mongosh
