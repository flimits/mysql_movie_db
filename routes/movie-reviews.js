const mysql = require('mysql2');
const reviews = require('express').Router();

reviews.get('/', (req, res) => {
  console.log('GET: list of all reviews with movie data');
  // Send a null response
  res.send('test');
  
});



module.exports = reviews;