const path = require('path')
const bodyParser = require('body-parser')

const express = require('express')
const app = express()

const mongoose = require('mongoose')
const restaurants = require('./routes/restaurants')

mongoose
  .connect(`mongodb://heroku_tslqfhrg:3tt03cglmto1ke1mlt8bmp1kmt@ds139775.mlab.com:39775/heroku_tslqfhrg`, { useNewUrlParser: true })
  .then(console.log('Successful connection to database'))
  .catch(error => {
    console.log(`The following error occurred: ${error.message}`)
  })

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use('/restaurants', restaurants)

  app.set('views', path.join(__dirname, './views'))
  app.set('view engine', 'ejs')

  app.get('/', (req, res) => {
    res.render('index')
  })

  app.listen( process.env.PORT || 3000, () => {
    console.log('Listening at port 3000')
  })


