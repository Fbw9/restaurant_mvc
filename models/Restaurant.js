const mongoose = require('mongoose')
require('./Cuisine')

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'You must provide a restaurant name here',
    unique: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  rating: {
    type: Number
  },
  open: {
    type: Boolean,
    default: false
  },
  cuisine: [{ type: mongoose.Schema.ObjectId, ref: "Cuisine"}],
  image: {
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = restaurantSchema
