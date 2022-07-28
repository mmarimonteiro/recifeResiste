const mongoose = require("mongoose");

const iepsSchema = new mongoose.Schema({
  id: { type: Number },
  endereco: { type: String, Number, required: true },
  bairro: { type: String, required: true},
  anoConstrucao: { type: Number, String, required: true },
  zona: { type: String, required: true },
});

const ieps = mongoose.model('ieps', iepsSchema);

module.exports = ieps;