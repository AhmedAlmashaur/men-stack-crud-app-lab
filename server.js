/*------------------- Imports/Initialization ---------------------*/
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

/*------------------- Middlewear ---------------------*/
const app = express();
app.use(morgan('dev'));

/*------------------- MongoDB connection ---------------------*/
const connect = async () => {
    // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await mongoose.connect(process.env.MONGO_URL);
  
    // Call the runQueries function, which will eventually hold functions to work
    // with data in our db.
    await runQueries()
  
    // Disconnect our app from MongoDB after our queries run.
    await mongoose.disconnect();
  
    // Close our app, bringing us back to the command line.
    process.exit();
  };
  
  connect()

/*------------------- Model imports ---------------------*/



/*------------------- Routes ---------------------*/



/*------------------- GET routes ---------------------*/



/*------------------- POST routes ---------------------*/



/*------------------- PUT routes ---------------------*/



/*------------------- DELETE routes ---------------------*/



/*------------------- Listener ---------------------*/



/*------------------- Run server ---------------------*/
const runQueries = async () => {
    console.log('Running.')
  };