'use stricit';

const fs = require('fs');

// Helper validating functions
function validateCardJson() {}
//TODO: Helper function


// API to access all datasets
class DataStore {
  static loadCardJson() {
    return fs.readFileSync('src/data_store/cards.json', 'utf8');
  }
  static writeCardJson() {
    //TODO: Support write data into card json
    return true;
  }

  static loadMenu() {
    const file = fs.readFileSync('src/data_store/menu.json', 'utf8');
    return JSON.parse(file);
  }
}

module.exports = DataStore;