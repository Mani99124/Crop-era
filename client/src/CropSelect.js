import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Register.css';
import logo from './assets/logo.png';

const crops = [
  { name: 'Rice', icon: '🌾' },
  { name: 'Wheat', icon: '🌱' },
  { name: 'Cotton', icon: '🧵' },
  { name: 'Sugar Cane', icon: '🍬' },
  { name: 'Tomato', icon: '🍅' },
  { name: 'Brinjal', icon: '🍆' },
];

export default function CropSelect() {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  const handleCropSelect = (crop) => {
    setSelectedCrop(crop);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCrop) {
      setError('Please select a crop.');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      // Update user's crop selection in MongoDB
      const response = await fetch('https://crop-era.onrender.com/update-crop', {

        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: email,
          crop: selectedCrop 
        }),
      });
      
      if (response.ok) {
        // Crop selection successful, redirect to login
        navigate('/login');
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to save crop selection.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registerPage">
      <div className="registerBox">
        <img src={logo} id="logo" alt="logo" />
        <h2 id="heading">Select Your Crop</h2>
        <div className="divider"><span>Choose one crop to continue</span></div>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', margin: '32px 0' }}>
            {crops.map((crop) => (
              <button
                type="button"
                key={crop.name}
                onClick={() => handleCropSelect(crop.name)}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  border: selectedCrop === crop.name ? '3px solid #195030' : '2px solid #bdbdbd',
                  background: selectedCrop === crop.name ? 'linear-gradient(135deg, #195030, #2e7d32)' : '#fff',
                  color: selectedCrop === crop.name ? '#fff' : '#195030',
                  fontSize: 32,
                  fontWeight: 600,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: selectedCrop === crop.name ? '0 4px 16px rgba(25,80,48,0.15)' : '0 2px 8px rgba(25,80,48,0.08)',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.2s',
                  gap: 4,
                }}
              >
                <span style={{ fontSize: 36 }}>{crop.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 500, marginTop: 4 }}>{crop.name}</span>
              </button>
            ))}
          </div>
          <button
            type="submit"
            id="signup"
            disabled={isLoading}
            style={{ width: '100%', marginTop: 12 }}
          >
            {isLoading ? 'Saving...' : 'Continue'}
          </button>
        </form>
      </div>
      <div className="bg-img">
        {/* Optionally add a background image or illustration here */}
      </div>
    </div>
  );
} 