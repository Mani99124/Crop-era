const mongoose = require("mongoose");
const Product = require("./models/Product");
const TechPrediction = require("./models/TechPrediction");
const Recommendation = require("./models/Recommendation");

// Connect MongoDB
mongoose.connect("mongodb+srv://ramreddy07007:4728@cluster0.v8mpego.mongodb.net/CropEra?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected 🎉"))
.catch((err) => console.log("MongoDB Error →", err.message));

// Import arrays
const products = require("./products");
const techPredictions = require("./techPredictions");

// Copy the recommendations array from index.js manually here:
const recommendations = [
  { crop: "Rice", condition: "temp > 35", action: "Water early morning, use mulch (dry leaves), spray potash to cool crop.", water_level: "Keep 5 cm standing water", spray_time: "Before 9 AM or after 5 PM" },
  { crop: "Rice", condition: "temp < 15", action: "Light irrigation to avoid cold stress.", water_level: "Light irrigation", spray_time: "At noon for maximum absorption" },
  { crop: "Rice", condition: "humidity > 60%", action: "Monitor for fungal diseases, ensure proper ventilation.", water_level: "Maintain moist soil", spray_time: "Early morning for best results" },
  { crop: "Rice", condition: "humidity < 60%", action: "Increase irrigation frequency to maintain soil moisture.", water_level: "Increase irrigation frequency", spray_time: "After sunset to avoid evaporation" },
  { crop: "Rice", condition: "rainfall > 50mm", action: "Ensure proper drainage, delay irrigation if necessary.", water_level: "Stop irrigation temporarily", spray_time: "During cloudy weather if possible" },
  { crop: "Rice", condition: "no rainfall for 7 days", action: "Water deeply and increase frequency of irrigation.", water_level: "Deep irrigation every alternate day", spray_time: "Avoid spraying during rainfall" },
  { crop: "Wheat", condition: "temp > 35", action: "Water early morning, use mulch (dry leaves), spray potash to cool crop.", water_level: "Keep 5 cm standing water", spray_time: "Before 9 AM or after 5 PM" },
  { crop: "Wheat", condition: "temp < 15", action: "Light irrigation to avoid cold stress.", water_level: "Light irrigation", spray_time: "At noon for maximum absorption" },
  { crop: "Wheat", condition: "humidity > 80%", action: "Monitor for fungal diseases, ensure proper ventilation.", water_level: "Maintain moist soil", spray_time: "Early morning for best results" },
  { crop: "Wheat", condition: "humidity < 30%", action: "Increase irrigation frequency to maintain soil moisture.", water_level: "Increase irrigation frequency", spray_time: "After sunset to avoid evaporation" },
  { crop: "Wheat", condition: "rainfall > 50mm", action: "Ensure proper drainage, delay irrigation if necessary.", water_level: "Stop irrigation temporarily", spray_time: "During cloudy weather if possible" },
  { crop: "Wheat", condition: "no rainfall for 7 days", action: "Water deeply and increase frequency of irrigation.", water_level: "Deep irrigation every alternate day", spray_time: "Avoid spraying during rainfall" },
  { crop: "Cotton", condition: "temp > 35", action: "Water early morning, use mulch (dry leaves), spray potash to cool crop.", water_level: "Keep 5 cm standing water", spray_time: "Before 9 AM or after 5 PM" },
  { crop: "Cotton", condition: "temp < 15", action: "Light irrigation to avoid cold stress.", water_level: "Light irrigation", spray_time: "At noon for maximum absorption" },
  { crop: "Cotton", condition: "humidity > 80%", action: "Monitor for fungal diseases, ensure proper ventilation.", water_level: "Maintain moist soil", spray_time: "Early morning for best results" },
  { crop: "Cotton", condition: "humidity < 30%", action: "Increase irrigation frequency to maintain soil moisture.", water_level: "Increase irrigation frequency", spray_time: "After sunset to avoid evaporation" },
  { crop: "Cotton", condition: "rainfall > 50mm", action: "Ensure proper drainage, delay irrigation if necessary.", water_level: "Stop irrigation temporarily", spray_time: "During cloudy weather if possible" },
  { crop: "Cotton", condition: "no rainfall for 7 days", action: "Water deeply and increase frequency of irrigation.", water_level: "Deep irrigation every alternate day", spray_time: "Avoid spraying during rainfall" },
  { crop: "Sugarcane", condition: "temp > 35", action: "Water early morning, use mulch (dry leaves), spray potash to cool crop.", water_level: "Keep 5 cm standing water", spray_time: "Before 9 AM or after 5 PM" },
  { crop: "Sugarcane", condition: "temp < 15", action: "Light irrigation to avoid cold stress.", water_level: "Light irrigation", spray_time: "At noon for maximum absorption" },
  { crop: "Sugarcane", condition: "humidity > 80%", action: "Monitor for fungal diseases, ensure proper ventilation.", water_level: "Maintain moist soil", spray_time: "Early morning for best results" },
  { crop: "Sugarcane", condition: "humidity < 30%", action: "Increase irrigation frequency to maintain soil moisture.", water_level: "Increase irrigation frequency", spray_time: "After sunset to avoid evaporation" },
  { crop: "Sugarcane", condition: "rainfall > 50mm", action: "Ensure proper drainage, delay irrigation if necessary.", water_level: "Stop irrigation temporarily", spray_time: "During cloudy weather if possible" },
  { crop: "Sugarcane", condition: "no rainfall for 7 days", action: "Water deeply and increase frequency of irrigation.", water_level: "Deep irrigation every alternate day", spray_time: "Avoid spraying during rainfall" },
  { crop: "Tomato", condition: "temp > 35", action: "Water early morning, use mulch (dry leaves), spray potash to cool crop.", water_level: "Keep 5 cm standing water", spray_time: "Before 9 AM or after 5 PM" },
  { crop: "Tomato", condition: "temp < 15", action: "Light irrigation to avoid cold stress.", water_level: "Light irrigation", spray_time: "At noon for maximum absorption" },
  { crop: "Tomato", condition: "humidity > 80%", action: "Monitor for fungal diseases, ensure proper ventilation.", water_level: "Maintain moist soil", spray_time: "Early morning for best results" },
  { crop: "Tomato", condition: "humidity < 30%", action: "Increase irrigation frequency to maintain soil moisture.", water_level: "Increase irrigation frequency", spray_time: "After sunset to avoid evaporation" },
  { crop: "Tomato", condition: "rainfall > 50mm", action: "Ensure proper drainage, delay irrigation if necessary.", water_level: "Stop irrigation temporarily", spray_time: "During cloudy weather if possible" },
  { crop: "Tomato", condition: "no rainfall for 7 days", action: "Water deeply and increase frequency of irrigation.", water_level: "Deep irrigation every alternate day", spray_time: "Avoid spraying during rainfall" },
  { crop: "Brinjal", condition: "temp > 35", action: "Water early morning, use mulch (dry leaves), spray potash to cool crop.", water_level: "Keep 5 cm standing water", spray_time: "Before 9 AM or after 5 PM" },
  { crop: "Brinjal", condition: "temp < 15", action: "Light irrigation to avoid cold stress.", water_level: "Light irrigation", spray_time: "At noon for maximum absorption" },
  { crop: "Brinjal", condition: "humidity > 80%", action: "Monitor for fungal diseases, ensure proper ventilation.", water_level: "Maintain moist soil", spray_time: "Early morning for best results" },
  { crop: "Brinjal", condition: "humidity < 30%", action: "Increase irrigation frequency to maintain soil moisture.", water_level: "Increase irrigation frequency", spray_time: "After sunset to avoid evaporation" },
  { crop: "Brinjal", condition: "rainfall > 50mm", action: "Ensure proper drainage, delay irrigation if necessary.", water_level: "Stop irrigation temporarily", spray_time: "During cloudy weather if possible" },
  { crop: "Brinjal", condition: "no rainfall for 7 days", action: "Water deeply and increase frequency of irrigation.", water_level: "Deep irrigation every alternate day", spray_time: "Avoid spraying during rainfall" }
];

// Insert all data
async function insertData() {
  try {
    await Product.insertMany(products);
    await TechPrediction.insertMany(techPredictions);
    await Recommendation.insertMany(recommendations);
    console.log("All data inserted into MongoDB Atlas");
  } catch (error) {
    console.error("Insert error:", error);
  } finally {
    mongoose.disconnect();
  }
}

insertData();

