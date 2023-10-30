const mysql = require('mysql2');
const addMovie = require('express').Router();

addMovie.post('/', (req, res) => {
  const { title } = req.body;
  console.log(`POST: add a new movie with title ${title}`);
});


module.exports = addMovie;