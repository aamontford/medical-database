const mongoose = require('mongoose');

//Patient's vitals
const vitalsSchema = new mongoose.Schema({
  encounter: { type: mongoose.Schema.Types.ObjectId, ref: 'Encounter', required: true },
  bloodPressure: { type: String },
  temperature: { type: String },
  pulse: { type: String },
});

const Vitals = mongoose.model('Vitals', vitalsSchema);

module.exports = Vitals;
