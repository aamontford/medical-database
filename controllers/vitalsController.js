const Vitals = require('../models/vitals');

exports.submitVitals = async (req, res) => {
  try {
    const vitals = await Vitals.create(req.body);
    res.status(201).json(vitals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
