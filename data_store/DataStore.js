'use stricit';

const fs = require('fs');

// Helper validating functions
function validateCardJson() {
  //TODO: Helper function
}

// API to access all datasets
class DataStore {
  static loadCardJson() {
    const file = fs.readFileSync('data_store/cards.json', 'utf8');
    return JSON.parse(file);
  }
  static writeCardJson() {
    //TODO: Support write data into card json
    return true;
  }

  static loadItemsJson() {
    const file = fs.readFileSync('data_store/items.json', 'utf8');
    return JSON.parse(file);
  }

  static loadSingleCardInfo(cardID) {
    const cards = JSON.parse(fs.readFileSync('data_store/cards.json', 'utf8'));
    if (cards.hasOwnProperty(cardID)) {
      return cards[cardID];
    }
    return null;
  }
}

module.exports = DataStore;
