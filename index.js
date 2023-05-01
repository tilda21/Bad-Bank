var express = require('express');
var app     = express();
var cors    = require('cors');
var dotenv    = require('dotenv');
var dal     = require('./dal.js');
var path = require('path');
var mongoose = require('mongoose');

dotenv.config();
app.use(cors());


// create user account
app.post('/api/account/create/:name/:email/:password' , function (req, res) {
    dal.create(req, res)
});

// all accounts
app.get('/api/account/all', function (req, res) {
    console.log('getting all users');
    dal.all(req, res)
});

const PORT = process.env.PORT || 8000;
console.log(`Server will start...`)

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT} `);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });

// used to serve static files from public directory
app.use(express.static(path.resolve(__dirname, "./frontend/build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});