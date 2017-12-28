const express = require('express');
const path = require('path');
const dataStore = require('./data_store/DataStore');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/cards', function (req, res, next) {
  const cards = dataStore.loadCardJson();
  res.json(cards);
});

app.get('/api/cards/:cardID', function (req, res, next) {
  const cardInfo = dataStore.loadSingleCardInfo(req.params.cardID);
  res.json(cardInfo);
});

app.get('/api/items', function (req, res, next) {
  const items = dataStore.loadItemsJson();
  res.json(items);
});

app.get('/api/staff', function (req, res, next) {
  const staff = dataStore.loadStaffJson();
  res.json(staff);
});

app.get('/api/tags', function (req, res, next) {
  const tags = dataStore.loadTagsJson();
  res.json(tags);
});

// The "catchall" handler: for any request that doesn't match one above, send
// back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(
    __dirname + '/client/build/index.html'
  ));
});

const port = process.env.PORT || 5000;
console.log(port);
app.listen(port);
