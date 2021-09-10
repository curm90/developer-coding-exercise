const mongoose = require('mongoose');

const { Schema } = mongoose;

const tokenSchema = new Schema({
  id: Number,
  rank: Number,
  name: String,
  symbol: String,
  price: String,
  priceChange: String,
  marketcap: String,
  volume: String,
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
