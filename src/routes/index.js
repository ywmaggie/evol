const dataStore = require('../data_store/DataStore');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const cards = JSON.parse(dataStore.loadCardJson());
  console.log(cards);
  // res.send(cards);
  res.render('index', cards);
});

// router.get('/cards/', function(req, res, next) {
//   const res.send(dataStore.loadCardJson());
// });

module.exports = router;
