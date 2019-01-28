const express = require('express')
const router = express.Router()

const restaurant = require('../controllers/RestaurantController.js')

router.get('/create', restaurant.create)

module.exports = router
