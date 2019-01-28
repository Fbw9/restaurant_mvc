const mongoose = require('mongoose')
const restaurantSchema = require('../models/Restaurant')
const Restaurant = mongoose.model('Restaurant', restaurantSchema)

const restaurantController = {}

//CREATE METHOD
restaurantController.create = (req, res) => {
  res.render('../views/restaurants/create')
}




  module.exports = restaurantController
