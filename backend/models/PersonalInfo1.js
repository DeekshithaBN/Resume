const mongoose = require('mongoose');

const personalInfoSchema1 = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    // Other personal information fields...
  });
  
  module.exports = mongoose.model('PersonalInfo', personalInfoSchema1);