const mysql = require('mysql2');
const addMovie = require('express').Router();

addMovie.post('/', (req, res) => {
  console.log(req.body);
  const { movie_name } = req.body;
  console.log(`POST: add a new movie with title ${movie_name}`);
  
  // Send a null response
  res.send('test');
  
});



module.exports = addMovie;