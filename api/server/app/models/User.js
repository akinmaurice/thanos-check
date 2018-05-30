const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  ipAddress: {
    type: String,
    unique: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('User', userSchema);
