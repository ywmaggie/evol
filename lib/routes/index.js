const dataStore = require('../data_store/DataStore');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // const cards = JSON.parse(dataStore.loadCardJson());
  // console.log(cards.cards);
  console.log('reach here');
  res.send([{
    "name": "逆风",
    "owner": "白起",
    "image": "/src/static/images/icon/-1.png",
    "level": "r",
    "decision": 32,
    "creaticity": 122,
    "affinity": 22,
    "execution": 100
  }]);
  // res.render('index', cards);
});

module.exports = router;