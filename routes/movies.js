const mysql = require('mysql2');
const movies = require('express').Router();

movies.get('/', (req, res) => {
  console.log('GET: list of all movies');
  // Send a null response
  res.send('test');
  
});



module.exports = movies;