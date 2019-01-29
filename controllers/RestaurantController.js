const mongoose = require('mongoose')
const restaurantSchema = require('../models/Restaurant')
const Restaurant = mongoose.model('Restaurant', restaurantSchema)

const restaurantController = {}

//CREATE METHOD
restaurantController.create = (req, res) => {
  res.render('../views/restaurants/create')
}

restaurantController.save = (req, res) => {
  let restaurant = new Restaurant({
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    open: req.body.open
  })
  restaurant.save((error) => {
    if(error) {
      console.log(error)
      res.render('restaurants/create')
    } else {
      console.log('Restaurant was created successfully')
      res.redirect('/')
    }
  })

}




  module.exports = restaurantController
