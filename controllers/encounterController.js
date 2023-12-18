const Encounter = require('../models/encounter');

exports.startEncounter = async (req, res) => {
  try {
    const encounter = await Encounter.create(req.body);
    res.status(201).json(encounter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listEncounters = async (req, res) => {
  try {
    const encounters = await Encounter.find().populate('patient');
    res.status(200).json(encounters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEncounterDetails = async (req, res) => {
  try {
    const encounter = await Encounter.findById(req.params.id).populate('patient');
    if (!encounter) {
      return res.status(404).json({ error: 'Encounter not found' });
    }
    res.status(200).json(encounter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
