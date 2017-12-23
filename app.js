const express = require('express');
const path = require('path');
const dataStore = require('./src/data_store/DataStore');

const app = express();
const cards = require('./lib/routes/index');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/menu', function(req, res, next){
  const menu = dataStore.loadMenu();
  console.log(menu);
  res.json(menu.menu);
});

app.get('/cards', function(req, res, next){
  const cards = JSON.parse(dataStore.loadCardJson());
  console.log(cards);
  res.json(cards.cards);
});

app.get('/users', function(req, res, next) {
  res.json([
    {
      id: 1,
      username: "samsepi0l"
    }, {
      id: 2,
      username: "D0loresH4ze"
    }
  ]);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
console.log(port);
app.listen(port);
