const mongoose = require('mongoose')
const restaurantSchema = require('../models/Restaurant')
const Restaurant = mongoose.model('Restaurant', restaurantSchema)

require('dotenv').config()
const cloudinary = require('cloudinary')

//configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

const restaurantController = {}

//LIST ALL
restaurantController.list = (req, res) => {
  Restaurant.find({}).exec((error, restaurants) => {
    if (error) {
      console.log('Error:', error)
    } else {
      res.render('../views/restaurants/index', {restaurants: restaurants})
    }
  })
}

//CREATE METHOD
restaurantController.create = (req, res) => {
  res.render('../views/restaurants/create')
}

restaurantController.save = async (req, res) => {
  console.log(req.file)
  //upload to cloudinary
  let cloudinaryUpload = await cloudinary.v2.uploader.upload(req.file.path)
  console.log(cloudinaryUpload)
  let restaurant = new Restaurant({
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    open: req.body.open,
    image: cloudinaryUpload.secure_url
  })
  restaurant.save((error) => {
    if(error) {
      console.log(error)
      res.render('restaurants/create')
    } else {
      console.log('Restaurant was created successfully')
      res.redirect(`/restaurants/show/${restaurant._id}`)
    }
  })
}

//SHOW METHOD
restaurantController.show = (req, res) => {
  Restaurant.findOne({_id: req.params.id}).exec((error, restaurant) => {
    if(error) {
      console.log('Error:', error)
    } else {
      res.render('../views/restaurants/show', {restaurant: restaurant})
    }
  })
}

//EDIT
restaurantController.edit = (req, res) => {
  Restaurant.findOne({_id: req.params.id}).exec((error, restaurant) => {
    if(error) {
      console.log(error)
    } else {
      res.render('../views/restaurants/edit', {restaurant: restaurant})
    }
  })
}


//UPDATE
restaurantController.update = (req, res) => {
  Restaurant.findByIdAndUpdate(req.params.id, { $set: {
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    open: req.body.open
  }}, { new: true }, (error, restaurant) => {
    if(error) {
      console.log(error)
      res.render('../views/restaurants/edit', {restaurant: req.body})
    } else {
      res.redirect(`/restaurants/show/${restaurant._id}`)
    }
  })
}
  //DELETE
  restaurantController.delete = (req, res) => {
    Restaurant.remove({_id: req.params.id}, (error) => {
      if(error) {
        console.log(error)
      } else {
        console.log('Restaurant has been deleted!!! ')
        res.redirect('/restaurants')
      }
    })
  }





  module.exports = restaurantController
