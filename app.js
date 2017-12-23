const express = require('express');
const path = require('path');
const dataStore = require('./data_store/DataStore');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/menu', function(req, res, next){
  const menu = dataStore.loadMenu();
  res.json(menu.menu);
});

app.get('/api/cards', function(req, res, next){
  const cards = dataStore.loadCardJson();
  res.json(cards.cards);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
console.log(port);
app.listen(port);
