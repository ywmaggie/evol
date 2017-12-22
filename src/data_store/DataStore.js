'use stricit';

const fs = require('fs');

// Helper validating functions
function validateCardJson() {

}

// API to access all datasets
class DataStore {
  static loadCardJson() {
    return fs.readFileSync('src/data_store/cards.json', 'utf8');
  }
  static writeCardJson() {
    //TODO: Support write data into card json
    return true;
  }
}

module.exports = DataStore;
