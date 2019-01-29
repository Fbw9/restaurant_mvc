const express = require('express')
const router = express.Router()

const restaurant = require('../controllers/RestaurantController.js')

//Get all restaurants
router.get('/', restaurant.list)
//Create restaurant
router.get('/create', restaurant.create)
//Save restaurant
router.post('/save', restaurant.save)
//Get single restaurant by id
router.get('/show/:id', restaurant.show)
//Edit restaurant
router.get('/edit/:id', restaurant.edit)
//Update restaurant
router.post('/update/:id', restaurant.update)
//Delete restaurant
router.post('/delete/:id', restaurant.delete)

module.exports = router
