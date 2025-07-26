import React, { useState } from 'react';
import './TechPredictions.css';
import robo from './assets/robo.png';
import former from './assets/former.jpg';

const TechPredictions = () => {
  const [inputs, setInputs] = useState({
    cropFieldSize: '',
    state: '',
    weather: '',
    cropType: '',
    soilType: '',
    budgetRange: '',
    farmingExperience: '',
    irrigationType: '',
    season: ''
  });
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Comprehensive technology database with unique images and names
  const technologyDatabase = {
    // Small farms (1-5 acres)
    small: {
      hot: {
        'Maharashtra': {
          'Rice': {
            'Clay': {
              'Low': [
                {
                  name: 'Smart Drip Irrigation System',
                  image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
                  description: 'Automated drip irrigation with soil moisture sensors for rice cultivation',
                  cost: '₹25,000 - ₹50,000',
                  implementation: '3-4 weeks',
                  benefits: 'Saves 40% water, increases yield by 25%',
                  suitability: 'Perfect for rice in clay soil'
                }
              ],
              'Medium': [
                {
                  name: 'Solar-Powered Water Pump',
                  image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
                  description: 'Solar-powered water pumping system for irrigation',
                  cost: '₹35,000 - ₹75,000',
                  implementation: '2-3 weeks',
                  benefits: 'Zero electricity cost, reliable water supply',
                  suitability: 'Ideal for sustainable rice farming'
                },
                {
                  name: 'Climate-Resilient Rice Varieties',
                  image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
                  description: 'Heat-tolerant rice varieties for hot weather',
                  cost: '₹200 - ₹500 per kg',
                  implementation: 'Immediate',
                  benefits: 'Better yield in high temperatures',
                  suitability: 'Specifically bred for hot climates'
                }
              ],
              'High': [
                {
                  name: 'Automated Greenhouse System',
                  image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop',
                  description: 'Climate-controlled greenhouse for year-round rice production',
                  cost: '₹5,00,000 - ₹15,00,000',
                  implementation: '3-4 months',
                  benefits: 'Year-round production, 3x higher yield',
                  suitability: 'Premium solution for high-budget farmers'
                }
              ]
            }
          },
          'Wheat': {
            'Loamy': {
              'Low': [
                {
                  name: 'Precision Seeding System',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                  description: 'GPS-guided seeding for optimal wheat planting',
                  cost: '₹15,000 - ₹30,000',
                  implementation: '1-2 weeks',
                  benefits: 'Improves germination rate by 30%',
                  suitability: 'Perfect for wheat in loamy soil'
                }
              ],
              'Medium': [
                {
                  name: 'IoT Weather Station',
                  image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop',
                  description: 'Real-time weather monitoring for wheat farming',
                  cost: '₹50,000 - ₹1,00,000',
                  implementation: '2-3 weeks',
                  benefits: 'Accurate weather predictions, crop protection',
                  suitability: 'Essential for wheat disease prevention'
                }
              ]
            }
          },
          'Cotton': {
            'Red Soil': {
              'Low': [
                {
                  name: 'Shade Net Farming',
                  image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop',
                  description: 'Shade net structures to protect cotton from heat stress',
                  cost: '₹15,000 - ₹30,000 per acre',
                  implementation: '1-2 weeks',
                  benefits: 'Reduces heat stress, improves fiber quality',
                  suitability: 'Ideal for cotton in hot climates'
                }
              ],
              'Medium': [
                {
                  name: 'Automated Sprinkler System',
                  image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
                  description: 'Automated sprinkler irrigation with timer control',
                  cost: '₹20,000 - ₹40,000',
                  implementation: '2-3 weeks',
                  benefits: 'Efficient water distribution, reduces labor',
                  suitability: 'Perfect for cotton irrigation'
                }
              ]
            }
          }
        },
        'Karnataka': {
          'Coffee': {
            'Red Soil': {
              'Low': [
                {
                  name: 'Shade-Grown Coffee System',
                  image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
                  description: 'Traditional shade-grown coffee with modern monitoring',
                  cost: '₹20,000 - ₹40,000 per acre',
                  implementation: '2-3 weeks',
                  benefits: 'Better coffee quality, natural pest control',
                  suitability: 'Perfect for coffee in Karnataka'
                }
              ],
              'Medium': [
                {
                  name: 'Smart Coffee Processing Unit',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                  description: 'Automated coffee processing and drying system',
                  cost: '₹1,00,000 - ₹3,00,000',
                  implementation: '1-2 months',
                  benefits: 'Consistent quality, faster processing',
                  suitability: 'Ideal for medium-scale coffee farmers'
                }
              ]
            }
          }
        },
        'Tamil Nadu': {
          'Rice': {
            'Alluvial': {
              'Low': [
                {
                  name: 'System of Rice Intensification (SRI)',
                  image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
                  description: 'Water-efficient rice cultivation method',
                  cost: '₹5,000 - ₹15,000',
                  implementation: 'Immediate',
                  benefits: '50% less water, 30% higher yield',
                  suitability: 'Perfect for Tamil Nadu rice farmers'
                }
              ],
              'Medium': [
                {
                  name: 'Rice Transplanting Machine',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                  description: 'Mechanical rice transplanting for efficiency',
                  cost: '₹50,000 - ₹1,00,000',
                  implementation: '1-2 weeks',
                  benefits: 'Reduces labor cost by 60%',
                  suitability: 'Ideal for medium-scale rice farming'
                }
              ]
            }
          }
        }
      },
      rainy: {
        'Kerala': {
          'Coconut': {
            'Laterite': {
              'Low': [
                {
                  name: 'Raised Bed Farming',
                  image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
                  description: 'Raised bed cultivation to prevent waterlogging in coconut farms',
                  cost: '₹10,000 - ₹20,000 per acre',
                  implementation: '1-2 weeks',
                  benefits: 'Prevents root rot, better drainage',
                  suitability: 'Essential for coconut in rainy regions'
                }
              ],
              'Medium': [
                {
                  name: 'Disease-Resistant Coconut Varieties',
                  image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
                  description: 'Fungal-resistant coconut varieties for humid conditions',
                  cost: '₹300 - ₹600 per plant',
                  implementation: 'Immediate',
                  benefits: 'Reduces disease incidence by 60%',
                  suitability: 'Perfect for humid coastal areas'
                }
              ]
            }
          },
          'Spices': {
            'Laterite': {
              'Low': [
                {
                  name: 'Organic Spice Cultivation Kit',
                  image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
                  description: 'Complete organic spice farming setup',
                  cost: '₹15,000 - ₹30,000',
                  implementation: '2-3 weeks',
                  benefits: 'Premium organic spices, better market price',
                  suitability: 'Perfect for Kerala spice farmers'
                }
              ]
            }
          }
        },
        'West Bengal': {
          'Rice': {
            'Alluvial': {
              'Low': [
                {
                  name: 'Floating Rice Cultivation',
                  image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
                  description: 'Traditional floating rice method for flood-prone areas',
                  cost: '₹8,000 - ₹15,000',
                  implementation: 'Immediate',
                  benefits: 'Survives floods, traditional method',
                  suitability: 'Perfect for flood-prone West Bengal'
                }
              ]
            }
          }
        }
      },
      moderate: {
        'Punjab': {
          'Wheat': {
            'Alluvial': {
              'Low': [
                {
                  name: 'Precision Agriculture Kit',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                  description: 'Soil testing and nutrient management system for wheat',
                  cost: '₹12,000 - ₹25,000',
                  implementation: '2-3 weeks',
                  benefits: 'Optimizes fertilizer use, increases yield by 20%',
                  suitability: 'Perfect for wheat in alluvial soil'
                }
              ],
              'Medium': [
                {
                  name: 'Crop Monitoring App',
                  image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
                  description: 'Mobile app for wheat crop monitoring and alerts',
                  cost: '₹1,000 - ₹2,000',
                  implementation: 'Immediate',
                  benefits: 'Real-time crop monitoring, pest alerts',
                  suitability: 'Essential for modern wheat farming'
                }
              ]
            }
          }
        },
        'Haryana': {
          'Wheat': {
            'Alluvial': {
              'Low': [
                {
                  name: 'Zero Tillage Wheat System',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                  description: 'No-till wheat farming for soil conservation',
                  cost: '₹8,000 - ₹15,000',
                  implementation: 'Immediate',
                  benefits: 'Saves soil, reduces cost by 25%',
                  suitability: 'Perfect for Haryana wheat farmers'
                }
              ]
            }
          }
        }
      }
    },
    // Medium farms (5-20 acres)
    medium: {
      hot: {
        'Maharashtra': {
          'Sugarcane': {
            'Black Soil': {
              'Medium': [
                {
                  name: 'Automated Sugarcane Harvester',
                  image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
                  description: 'Mechanical sugarcane harvesting system',
                  cost: '₹3,00,000 - ₹8,00,000',
                  implementation: '2-3 months',
                  benefits: 'Reduces labor cost by 70%',
                  suitability: 'Perfect for medium sugarcane farms'
                }
              ],
              'High': [
                {
                  name: 'Smart Farm Management System',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                  description: 'Integrated farm management with AI for sugarcane',
                  cost: '₹10,00,000 - ₹25,00,000',
                  implementation: '4-6 months',
                  benefits: 'Complete farm automation, 40% efficiency increase',
                  suitability: 'Premium solution for large sugarcane farms'
                }
              ]
            }
          }
        },
        'Gujarat': {
          'Cotton': {
            'Black Soil': {
              'Medium': [
                {
                  name: 'BT Cotton Cultivation System',
                  image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
                  description: 'Genetically modified cotton with pest resistance',
                  cost: '₹2,000 - ₹5,000 per acre',
                  implementation: 'Immediate',
                  benefits: 'Reduces pesticide use by 80%',
                  suitability: 'Perfect for Gujarat cotton farmers'
                }
              ]
            }
          }
        }
      },
      rainy: {
        'Karnataka': {
          'Coffee': {
            'Red Soil': {
              'Medium': [
                {
                  name: 'Hydroponic Coffee System',
                  image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop',
                  description: 'Soilless coffee farming with controlled environment',
                  cost: '₹3,00,000 - ₹8,00,000',
                  implementation: '2-3 months',
                  benefits: '5x higher yield, 90% less water usage',
                  suitability: 'Revolutionary for coffee production'
                }
              ]
            }
          }
        }
      },
      moderate: {
        'Uttar Pradesh': {
          'Wheat': {
            'Alluvial': {
              'Medium': [
                {
                  name: 'Drone-Based Crop Monitoring',
                  image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=400&h=300&fit=crop',
                  description: 'Drone with multispectral cameras for crop analysis',
                  cost: '₹2,00,000 - ₹5,00,000',
                  implementation: '1-2 months',
                  benefits: 'Early disease detection, precision farming',
                  suitability: 'Perfect for large wheat farms'
                }
              ]
            }
          }
        }
      }
    },
    // Large farms (20+ acres)
    large: {
      hot: {
        'Rajasthan': {
          'Bajra': {
            'Desert Soil': {
              'High': [
                {
                  name: 'Large-Scale Solar Farm',
                  image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
                  description: 'Solar power generation for large farm operations',
                  cost: '₹50,00,000 - ₹2,00,00,000',
                  implementation: '6-12 months',
                  benefits: 'Zero electricity cost, additional income from power sale',
                  suitability: 'Perfect for large farms in sunny regions'
                }
              ]
            }
          }
        },
        'Madhya Pradesh': {
          'Soybean': {
            'Black Soil': {
              'High': [
                {
                  name: 'Precision Agriculture Hub',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                  description: 'Complete precision agriculture setup with AI',
                  cost: '₹30,00,000 - ₹75,00,000',
                  implementation: '6-8 months',
                  benefits: 'Maximum yield optimization, data-driven decisions',
                  suitability: 'Perfect for large soybean farms'
                }
              ]
            }
          }
        }
      },
      rainy: {
        'Assam': {
          'Tea': {
            'Laterite': {
              'High': [
                {
                  name: 'Automated Tea Processing Plant',
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
                  description: 'Fully automated tea processing and packaging',
                  cost: '₹1,00,00,000 - ₹3,00,00,000',
                  implementation: '8-12 months',
                  benefits: 'Consistent quality, higher market value',
                  suitability: 'Perfect for large tea estates'
                }
              ]
            }
          }
        }
      },
      moderate: {
        'Punjab': {
          'Wheat': {
            'Alluvial': {
              'High': [
                {
                  name: 'Automated Grain Storage',
                  image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
                  description: 'Automated grain storage and processing facility',
                  cost: '₹50,00,000 - ₹1,00,00,000',
                  implementation: '8-12 months',
                  benefits: 'Prevents grain loss, better market prices',
                  suitability: 'Perfect for large wheat farms'
                }
              ]
            }
          }
        }
      }
    }
  };

  const getFieldSize = (size) => {
    if (size <= 5) return 'small';
    if (size <= 20) return 'medium';
    return 'large';
  };

  const validateInputs = () => {
    const newErrors = {};
    
    if (!inputs.cropFieldSize || inputs.cropFieldSize <= 0) {
      newErrors.cropFieldSize = 'Please enter a valid field size';
    }
    if (!inputs.state) {
      newErrors.state = 'Please select a state';
    }
    if (!inputs.weather) {
      newErrors.weather = 'Please select weather condition';
    }
    if (!inputs.cropType) {
      newErrors.cropType = 'Please select crop type';
    }
    if (!inputs.soilType) {
      newErrors.soilType = 'Please select soil type';
    }
    if (!inputs.budgetRange) {
      newErrors.budgetRange = 'Please select budget range';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getPredictions = () => {
    const fieldSize = getFieldSize(parseInt(inputs.cropFieldSize));
    const weather = inputs.weather.toLowerCase();
    const state = inputs.state;
    const cropType = inputs.cropType;
    const soilType = inputs.soilType;
    const budgetRange = inputs.budgetRange;

    // Get specific predictions based on all inputs
    let predictions = [];
    
    if (technologyDatabase[fieldSize]?.[weather]?.[state]?.[cropType]?.[soilType]?.[budgetRange]) {
      predictions = technologyDatabase[fieldSize][weather][state][cropType][soilType][budgetRange];
    } else if (technologyDatabase[fieldSize]?.[weather]?.[state]?.[cropType]?.[soilType]) {
      // If no budget match, get any budget level
      const allBudgets = technologyDatabase[fieldSize][weather][state][cropType][soilType];
      predictions = Object.values(allBudgets).flat();
    } else if (technologyDatabase[fieldSize]?.[weather]?.[state]?.[cropType]) {
      // If no soil match, get any soil type
      const allSoils = technologyDatabase[fieldSize][weather][state][cropType];
      predictions = Object.values(allSoils).flat().flat();
    } else if (technologyDatabase[fieldSize]?.[weather]?.[state]) {
      // If no crop match, get any crop type
      const allCrops = technologyDatabase[fieldSize][weather][state];
      predictions = Object.values(allCrops).flat().flat().flat();
    } else if (technologyDatabase[fieldSize]?.[weather]) {
      // If no state match, get any state
      const allStates = technologyDatabase[fieldSize][weather];
      predictions = Object.values(allStates).flat().flat().flat().flat();
    }

    // Return top 3 predictions
    return predictions.slice(0, 3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateInputs()) {
      return;
    }

    setLoading(true);
    setErrors({});
    
    // Simulate API call delay
    setTimeout(() => {
      const results = getPredictions();
      setPredictions(results);
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="tech-predictions-container">
      <div className="tech-predictions-header">
        <div className="header-content">

          <h1>Smart Technology Predictions</h1>
          <p>Get personalized agricultural technology recommendations based on your detailed farm profile</p>
        </div>
      </div>

      <div className="tech-predictions-content">
        <div className="input-section">
          <h2>Enter Your Detailed Farm Profile</h2>
          <form onSubmit={handleSubmit} className="input-form">
            <div className="input-row">
              <div className="input-group">
                <label>Crop Field Size (acres):</label>
                <input
                  type="number"
                  name="cropFieldSize"
                  value={inputs.cropFieldSize}
                  onChange={handleInputChange}
                  placeholder="e.g., 10"
                  min="1"
                  className={errors.cropFieldSize ? 'error' : ''}
                />
                {errors.cropFieldSize && <span className="error-message">{errors.cropFieldSize}</span>}
              </div>

              <div className="input-group">
                <label>State:</label>
                <select 
                  name="state" 
                  value={inputs.state} 
                  onChange={handleInputChange}
                  className={errors.state ? 'error' : ''}
                >
                  <option value="">Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Kerala">Kerala</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                </select>
                {errors.state && <span className="error-message">{errors.state}</span>}
              </div>

              <div className="input-group">
                <label>Weather Condition:</label>
                <select 
                  name="weather" 
                  value={inputs.weather} 
                  onChange={handleInputChange}
                  className={errors.weather ? 'error' : ''}
                >
                  <option value="">Select Weather</option>
                  <option value="hot">Hot</option>
                  <option value="rainy">Rainy</option>
                  <option value="moderate">Moderate</option>
                </select>
                {errors.weather && <span className="error-message">{errors.weather}</span>}
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>Crop Type:</label>
                <select 
                  name="cropType" 
                  value={inputs.cropType} 
                  onChange={handleInputChange}
                  className={errors.cropType ? 'error' : ''}
                >
                  <option value="">Select Crop</option>
                  <option value="Rice">Rice</option>
                  <option value="Wheat">Wheat</option>
                  <option value="Cotton">Cotton</option>
                  <option value="Sugarcane">Sugarcane</option>
                  <option value="Coconut">Coconut</option>
                  <option value="Coffee">Coffee</option>
                  <option value="Bajra">Bajra</option>
                  <option value="Maize">Maize</option>
                  <option value="Pulses">Pulses</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Spices">Spices</option>
                  <option value="Tea">Tea</option>
                  <option value="Soybean">Soybean</option>
                </select>
                {errors.cropType && <span className="error-message">{errors.cropType}</span>}
              </div>

              <div className="input-group">
                <label>Soil Type:</label>
                <select 
                  name="soilType" 
                  value={inputs.soilType} 
                  onChange={handleInputChange}
                  className={errors.soilType ? 'error' : ''}
                >
                  <option value="">Select Soil Type</option>
                  <option value="Clay">Clay</option>
                  <option value="Loamy">Loamy</option>
                  <option value="Red Soil">Red Soil</option>
                  <option value="Laterite">Laterite</option>
                  <option value="Alluvial">Alluvial</option>
                  <option value="Black Soil">Black Soil</option>
                  <option value="Desert Soil">Desert Soil</option>
                  <option value="Sandy">Sandy</option>
                </select>
                {errors.soilType && <span className="error-message">{errors.soilType}</span>}
              </div>

              <div className="input-group">
                <label>Budget Range:</label>
                <select 
                  name="budgetRange" 
                  value={inputs.budgetRange} 
                  onChange={handleInputChange}
                  className={errors.budgetRange ? 'error' : ''}
                >
                  <option value="">Select Budget</option>
                  <option value="Low">Low (₹10,000 - ₹50,000)</option>
                  <option value="Medium">Medium (₹50,000 - ₹5,00,000)</option>
                  <option value="High">High (₹5,00,000+)</option>
                </select>
                {errors.budgetRange && <span className="error-message">{errors.budgetRange}</span>}
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>Farming Experience:</label>
                <select name="farmingExperience" value={inputs.farmingExperience} onChange={handleInputChange}>
                  <option value="">Select Experience</option>
                  <option value="Beginner">Beginner (0-2 years)</option>
                  <option value="Intermediate">Intermediate (3-10 years)</option>
                  <option value="Expert">Expert (10+ years)</option>
                </select>
              </div>

              <div className="input-group">
                <label>Irrigation Type:</label>
                <select name="irrigationType" value={inputs.irrigationType} onChange={handleInputChange}>
                  <option value="">Select Irrigation</option>
                  <option value="Rainfed">Rainfed</option>
                  <option value="Tube Well">Tube Well</option>
                  <option value="Canal">Canal</option>
                  <option value="Drip">Drip</option>
                  <option value="Sprinkler">Sprinkler</option>
                  <option value="None">None</option>
                </select>
              </div>

              <div className="input-group">
                <label>Season:</label>
                <select name="season" value={inputs.season} onChange={handleInputChange}>
                  <option value="">Select Season</option>
                  <option value="Kharif">Kharif (Monsoon)</option>
                  <option value="Rabi">Rabi (Winter)</option>
                  <option value="Zaid">Zaid (Summer)</option>
                  <option value="Year-round">Year-round</option>
                </select>
              </div>
            </div>

            <button type="submit" className="predict-btn">
              Get Personalized Technology Recommendations
            </button>
          </form>
        </div>

        {submitted && (
          <div className="predictions-section">
            <h2>Recommended Technologies</h2>
            
            {loading ? (
              <div className="loading">
                <div className="spinner"></div>
                <p>Analyzing your detailed farm profile...</p>
              </div>
            ) : predictions.length === 0 ? (
              <div className="no-results">
                <img src={former} alt="Farmer" className="no-results-img" />
                <h3>No specific recommendations found</h3>
                <p>Try different combinations of farm details. We're expanding our database to include more crop and soil combinations.</p>
                <p><strong>Available combinations:</strong></p>
                <ul>
                  <li>Maharashtra + Hot + Rice + Clay</li>
                  <li>Karnataka + Hot + Cotton + Red Soil</li>
                  <li>Kerala + Rainy + Coconut + Laterite</li>
                  <li>Punjab + Moderate + Wheat + Alluvial</li>
                  <li>Rajasthan + Hot + Bajra + Desert Soil</li>
                </ul>
              </div>
            ) : (
              <div className="predictions-grid">
                {predictions.map((prediction, index) => (
                  <div key={index} className="prediction-card">
                    <div className="prediction-image">
                      <img 
                        src={prediction.image} 
                        alt={prediction.name}
                        onError={(e) => {
                          e.target.src = robo;
                        }}
                      />
                    </div>
                    
                    <div className="prediction-content">
                      <h3>{prediction.name}</h3>
                      <p className="prediction-description">{prediction.description}</p>
                      
                      <div className="prediction-details">
                        <div className="detail-item">
                          <span className="label">Cost:</span>
                          <span className="value">{prediction.cost}</span>
                        </div>
                        
                        <div className="detail-item">
                          <span className="label">Implementation:</span>
                          <span className="value">{prediction.implementation}</span>
                        </div>
                        
                        <div className="detail-item">
                          <span className="label">Benefits:</span>
                          <span className="value">{prediction.benefits}</span>
                        </div>
                        
                        <div className="detail-item">
                          <span className="label">Suitability:</span>
                          <span className="value">{prediction.suitability}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TechPredictions; 