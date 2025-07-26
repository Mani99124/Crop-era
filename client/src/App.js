import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Terms from './Terms';
import CropSelect from './CropSelect';
import About from './About';
import Profile from './Profile';
import WeatherAdvisor from './Weather';
import Store from './Store';
import Cart from './Cart';
import Wishlist from './Wishlist';
import TechPredictions from './TechPredictions';
import './App.css';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Placeholder Dashboard component
const Dashboard = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Dashboard</h2>
    <p>Welcome to your dashboard!</p>
  </div>
);

const WeatherTracking = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Weather Tracking</h2>
    <p>Weather tracking page coming soon.</p>
  </div>
);

const TechnologyPrediction = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Technology Prediction</h2>
    <p>Technology prediction page coming soon.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<Terms />} />

          {/* Protected routes */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/store" element={<ProtectedRoute><Store /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/weather" element={<ProtectedRoute><WeatherAdvisor /></ProtectedRoute>} />
          <Route path="/crop-select" element={<ProtectedRoute><CropSelect /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
          <Route path="/tech-predictions" element={<ProtectedRoute><TechPredictions /></ProtectedRoute>} />

          {/* Redirects */}
          <Route path="/tech-prediction" element={<Navigate to="/tech-predictions" replace />} />
          <Route path="/technology" element={<Navigate to="/tech-predictions" replace />} />

          {/* Default route - Protected Home page */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
