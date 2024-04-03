const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mantee')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(() => {
    console.log('MongoDB connection failed');
  });

const manteeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  mail: { type: String, required: true },
  designation: { type: String, required: true },
  school: { type: String, required: true },
  interest: { type: String, required: true },
  social: { type: String, required: true },
});

const mentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: String, required: true },
  skills: { type: String, required: true },
  feed: { type: String, required: true },
  social: { type: String, required: true },
  about: { type: String, required: true },
  mail: { type: String, required: true },
});

const Mantee = mongoose.model('Mantee', manteeSchema);
const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = { Mantee, Mentor };
