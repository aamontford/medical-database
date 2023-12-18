//server.js

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  phoneNumber: { type: String }, // Add patient's phoneNumber
  residentialAddress: { type: String }, // Add patient's residentialAddress
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;





