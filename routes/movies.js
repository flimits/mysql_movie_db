const mysql = require('mysql2');
const movies = require('express').Router();

movies.get('/', (req, res) => {
  console.log('GET: list of all movies');
});


module.exports = movies;