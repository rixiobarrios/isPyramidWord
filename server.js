// * isPyramidWord Exercise server * //
// call the packages we need
let express = require('express'); // call express
let app = express(); // define our app using express
let bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//port assignment
let port = process.env.PORT || 8080; // set our port

// import controller
const controller = require('./controller.js');
// routes for our API
app.use('/', controller);

// Start the server
app.listen(port);
console.log('We are rolling on port ' + port);
