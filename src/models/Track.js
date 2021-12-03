const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number
  }
});
const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    default: ''
  },
  locations: [pointSchema], 
  dateSaved: {
    type: String, 
    default: ''
  }, 
  timeSaved: {
    type: String,
    default: ''
  }, 
  seconds: {
    type: Number, 
    default: null
  },
  minutes: {
    type: Number, 
    default: null
  }
});

mongoose.model('Track', trackSchema);
