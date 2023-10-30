const mysql = require('mysql2');
const movie = require('express').Router();

movie.delete('/:movie_id', (req, res) => {
  const movieId = req.params.movie_id;
  console.log(`DELETE: delete movie with id: ${movieId}`);
});


module.exports = movie;