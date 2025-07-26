const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: function() {
      return !this.googleId; // Password is required only if not using Google auth
    },
    minlength: 6
  },
  googleId: {
    type: String,
    sparse: true
  },
  crop: {
    type: String,
    enum: ['Rice', 'Wheat', 'Cotton', 'Sugar Cane', 'Tomato', 'Brinjal'],
    required: false
  },
  state: {
    type: String,
    required: false
  },
  landType: {
    type: String,
    enum: ['irrigated', 'rainfed', 'dryland'],
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password') && this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema); 