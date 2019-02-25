const mongoose = require('mongoose')
const cuisineSchema = require('../models/Cuisine')
const Cuisine = mongoose.model('Cuisine', cuisineSchema)

const seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017/restos2', function() {

  // Load Mongoose models
  seeder.loadModels([
    'models/Cuisine.js'
  ]);

  // Clear specified collections
  seeder.clearModels(['Cuisine'], function() {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });

  });
});

// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Cuisine',
        'documents': [
            {
                'name': 'Japanese',
            },
            {
                'name': 'Chinese',
            },
            {
                'name': 'German',
            },
            {
                'name': 'Healthy',
            },
            {
                'name': 'Junkfood',
            },
            {
                'name': 'Cheap',
            },
            {
                'name': 'American',
            },
            {
                'name': 'Gourmet',
            },
        ]
    }
];
