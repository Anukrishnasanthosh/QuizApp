const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 1000;

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/q';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB Successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

app.use('/api/auth', require('./routes/auth'));
app.use('/api/quiz', require('./routes/quiz'));

connectToMongo();

app.listen(port, () => {
  console.log(`Quiz backend listening on port ${port}`);
});
