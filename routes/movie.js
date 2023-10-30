const mysql = require('mysql2');
const movie = require('express').Router();

movie.delete('/:movie_id', (req, res) => {
  const movieId = req.params.movie_id;
  console.log(`DELETE: delete movie with id: ${movieId}`);
  // Send a null response
  res.send('test');
  
});



module.exports = movie;