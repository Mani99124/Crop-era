const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Product = require("./models/Product");
const TechPrediction = require("./models/TechPrediction");
const Recommendation = require("./models/Recommendation");
const User = require("./models/User");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://ramreddy07007:4728@cluster0.v8mpego.mongodb.net/CropEra?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));

const JWT_SECRET = 'cropEraSecureKey123';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

app.post("/register", async (req, res) => {
  try {
    const { name, email, password, googleId } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user (without crop, state, landType for original flow)
    const user = new User({
      name,
      email,
      password: password || null, // For Google sign-in, password might be null
      googleId: googleId || null
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: "Registration successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check password
    const validPassword = await user.comparePassword(password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        crop: user.crop
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});

// Get user profile
app.get("/api/profile", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
        res.json({
      success: true,
      user
    });;
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error: error.message });
  }
});


app.patch("/api/profile", authenticateToken, async (req, res) => {
  try {
    const { crop, state, landType } = req.body;
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (crop) user.crop = crop;
    if (state) user.state = state;
    if (landType) user.landType = landType;

    await user.save();

    res.json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        crop: user.crop,
        state: user.state,
        landType: user.landType
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error: error.message });
  }
});


app.put("/update-crop", async (req, res) => {
  try {
    const { email, crop } = req.body;
    console.log("Update crop request:", { email, crop });

    const user = await User.findOneAndUpdate(
      { email },
      { crop },
      { new: true }
    );

    if (!user) {
      console.log("User not found for email:", email); 
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Crop selection updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        crop: user.crop,
      },
    });
  } catch (error) {
    console.error("Update crop error:", error);
    res.status(500).json({ message: "Error updating crop selection", error: error.message });
  }
});


// Get user profile data
app.get("/user-profile", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        crop: user.crop,
        state: user.state,
        landType: user.landType,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error("Get user profile error:", error);
    res.status(500).json({ message: "Error fetching user profile", error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("CropEra backend is running!");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: err.message });
  }
});

app.get("/api/tech-predictions", async (req, res) => {
  try {
    const { technology, type, minConfidence, year, weather, area, landType, state } = req.query;
    const query = {};
    
    if (technology) query.technology = { $regex: technology, $options: "i" };
    if (type) query.type = type;
    if (minConfidence) query.confidence = { $gte: parseInt(minConfidence) };
    if (year) query.targetYear = parseInt(year);
    if (weather) query.weather = weather;
    if (area) query.area = area;
    if (landType) query.landType = landType;
    if (state) query.state = { $regex: state, $options: "i" };
    
    const predictions = await TechPrediction.find(query);
    res.json(predictions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching tech predictions", error: err.message });
  }
});

app.get("/api/tech-predictions/:technology", async (req, res) => {
  try {
    const { technology } = req.params;
    const { weather, area, landType, state } = req.query;
    
    const query = {
      technology: { $regex: technology, $options: "i" }
    };
    
    if (weather) query.weather = weather;
    if (area) query.area = area;
    if (landType) query.landType = landType;
    if (state) query.state = { $regex: state, $options: "i" };
    
    const results = await TechPrediction.find(query);
    if (results.length === 0)
      return res
        .status(404)
        .json({ message: "No predictions found for this technology." });
    res.json(results);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching prediction", error: err.message });
  }
});

app.get("/api/recommendations", async (req, res) => {
  try {
    const recommendations = await Recommendation.find();
    res.json(recommendations);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching recommendations", error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
