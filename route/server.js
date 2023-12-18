//index.js
const express = require('express');
const mongoose = require('mongoose');
const db = require('../db');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const patientsRouter = require('./patients');
const encountersRouter = require('./encounters');
const vitalsRouter = require('./Vitals');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//connect mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(morgan('dev')); 
app.use(helmet());

// Routes
app.use('/patients', patientsRouter);
app.use('/encounters', encountersRouter);
app.use('/vitals', vitalsRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
