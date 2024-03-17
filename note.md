# REST API built with Node.js, Express & MongoDB

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
