const mongoose = require('mongoose')

const cuisineSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = cuisineSchema
