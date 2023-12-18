const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
  console.error(`MongoDB Connection Error: ${error}`);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
  console.log('MongoDB Connection Disconnected');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('MongoDB Connection Closed');
    process.exit(0);
  });
});

module.exports = db;

