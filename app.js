

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

// MongoDB connection string for local instance
const mongoURL = 'mongodb://localhost:27017/dataset'; 

// Middleware to parse JSON requests
app.use(express.json());

// Basic route to test server setup
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURL)
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((err) => {
    console.error('Mongo connection error:', err);
  });
