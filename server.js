/*------------------- Server initialization ---------------------*/
var express = require('express');
var app = express();


/*------------------- Configuration ---------------------*/
//method-override
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

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

// test route
app.get('/test', function(req, res) {
  res.render('pages/test');
});

// read module (index/read)
app.get('/', function(req, res) {
  res.render('pages/index');
});

// create module (/new)
app.get('/new', function(req, res) {
  res.render('pages/new');
});

// update module (index/update)
app.get('/update/:id', function(req, res) {
  res.render('pages/update');
});

// delete module (index/delete)
app.get('/delete/:id', function(req, res) {
  res.render('pages/delete');
});

/*------------------- GET routes ---------------------*/
//Displays a list of all plants


//Shows a form to create a new plant


//Displays a specific plant by its ID


//Shows a form to edit an existing plant



/*------------------- POST routes ---------------------*/
//Creates a new plant


/*------------------- PUT routes ---------------------*/
//Updates a specific plant by its ID


/*------------------- DELETE routes ---------------------*/
//Deletes a specific plant by its ID


/*------------------- Server initialization ---------------------*/
app.listen(3000);
console.log('Running...');