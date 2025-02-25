const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
  band: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  setlist: {
    type: String,
  },
  memories: {
    type: String,
  },
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  concerts: [concertSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
