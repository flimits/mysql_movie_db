const mysql = require('mysql2');
const review = require('express').Router();

review.put('/:review_id', (req, res) => {
  const reviewId = req.params.review_id;
  console.log(`PUT: update review with id: ${reviewId}`);
});


module.exports = review;