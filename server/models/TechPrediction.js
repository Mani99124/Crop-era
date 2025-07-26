const mongoose = require("mongoose");

const techPredictionSchema = new mongoose.Schema({
  technology: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: String,
  confidence: Number,
  targetYear: Number,
  weather: {
    type: String,
    enum: ['hot', 'cold', 'rainy', 'dry', 'moderate', 'all'],
    default: 'moderate'
  },
  area: {
    type: String,
    enum: ['north', 'south', 'east', 'west', 'central', 'all', 'urban'],
    default: 'all'
  },
  landType: {
    type: String,
    enum: ['irrigated', 'rainfed', 'dryland', 'all', 'controlled', 'organic'],
    default: 'all'
  },
  state: {
    type: String,
    default: null
  },
  impact: String,
  implementation: String,
  cost: String,
  timeline: String
});

module.exports = mongoose.model("TechPrediction", techPredictionSchema);