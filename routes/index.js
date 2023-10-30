const miniApp = require('express').Router();

// Import our modular routers for /tips and /feedback
const moviesRouter = require('./movies');
const movie_reviewsRouter = require('./movie-reviews');
const add_movieRouter = require('./add-movie');
const movieRouter = require('./movie');
const reviewRouter = require('./review');

miniApp.use('/movies', moviesRouter);
miniApp.use('/movie-reviews', movie_reviewsRouter);
miniApp.use('/add-movie', add_movieRouter);
miniApp.use('/movie', movieRouter);
miniApp.use('/review', reviewRouter);

module.exports = miniApp;
