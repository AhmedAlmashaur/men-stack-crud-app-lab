/*------------------- Server initialization ---------------------*/
var express = require('express');
var app = express();


/*------------------- Configuration ---------------------*/
// Morgan
var morgan = require('morgan');
app.use(morgan('dev'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// mongoose connection
const dotenv = require('dotenv');
dotenv.config();

var mongoose = require('mongoose');
//connect to our database
const connect = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database...connected');
};
connect();


/*------------------- Routes ---------------------*/
// use res.render to load up an ejs view file




/*------------------- CRUD elements ---------------------*/

// GET routes

// POST routes

// PUT routes

// DELETE routes


/*------------------- Server initialization ---------------------*/
app.listen(3000);
console.log('Running...');